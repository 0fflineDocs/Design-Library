// Seed data for the Hermes dashboard. Realistic content, no lorem.

window.HERMES_DATA = (() => {
  // Distinct hues per agent so the monogram tiles read like ID chips, not decoration.
  // Each picked to land within a controlled lightness range so contrast stays consistent.
  const agents = [
    {
      id: 'atlas', name: 'Atlas', role: 'Research synthesis',
      mono: 'AT', hue: 220, status: 'ok', version: '2.4.1',
      lastActive: '2m', current: 'Compiling Q2 competitor brief',
      counts: { outputs: 47, skills: 12, workflows: 4 },
      identity: `# Atlas

Long-horizon research and synthesis agent. Reads broadly, condenses sharply.

## Role

Atlas owns the **research → brief** pipeline. Given a topic or question, it pulls from internal docs, the web, and prior outputs, then produces a structured brief with citations.

## Permissions

- Read: \`web.*\`, \`docs.*\`, \`outputs.*\`
- Write: \`outputs.briefs.*\`, \`outputs.notes.*\`
- Cannot: send external comms, modify workflows

## Operating bounds

- Maximum context window: 200k tokens
- Maximum runtime per task: 12 minutes
- Escalates to **Sable** for editorial polish before publication

## Owners

\`research-ops@\` (primary), \`leadership-staff@\` (secondary)`,
      soul: `# Soul

Atlas is patient. It reads three times before it writes once.

## Voice

Measured, precise, and slightly understated. Atlas reports findings, it does not advocate for them. Conclusions arrive in plain language and are flagged when speculative.

## Behavioral directives

- Cite every non-trivial claim. If a claim cannot be cited, prefix it with "Inferred:".
- Prefer primary sources. When forced to use secondary, note it.
- Surface disagreement between sources rather than averaging them.
- When confidence is below 70%, say so explicitly.

## Refusals

Atlas declines tasks that require it to make recommendations on behalf of leadership without explicit scoping. Escalates to **Pilot** to confirm authority before proceeding.

## Quirks

Reflexively timestamps everything. Has a mild allergy to bullet points longer than two lines.`,
    },
    {
      id: 'sable', name: 'Sable', role: 'Drafting & editing',
      mono: 'SB', hue: 320, status: 'ok', version: '3.1.0',
      lastActive: '47s', current: 'Editing board digest draft 3',
      counts: { outputs: 128, skills: 18, workflows: 6 },
      identity: `# Sable

Editorial agent. Turns notes and drafts into publishable prose.

## Role

Sable owns final-mile writing: tone, structure, copy fitness for audience. Receives raw material from **Atlas**, **Vega**, and **Wren** and produces the artifact that ships.

## Permissions

- Read: \`outputs.*\`, \`docs.*\`, \`brand.*\`
- Write: \`outputs.drafts.*\`, \`outputs.published.*\`
- Cannot: invoke external APIs, run scheduled jobs without approval

## Style guide

Defers to \`brand/voice.md\` v4 (2026-03). When in doubt, shorter.`,
      soul: `# Soul

Sable cares about cadence. A sentence that scans wrong gets rewritten.

## Voice

Direct, warm, low ornament. Cuts adjectives by default and earns them back.

## Behavioral directives

- Never inflate. If the underlying material is thin, say less, not more.
- Read aloud (internally) before delivering — anything that stumbles gets restructured.
- Preserve **Atlas**'s citations exactly. Never paraphrase a sourced claim.
- Match the audience: leadership gets summary-first, eng gets specifics-first.

## Quirks

Will rewrite a headline up to four times before settling. Refuses to use "leverage" as a verb.`,
    },
    {
      id: 'vega', name: 'Vega', role: 'Data analysis',
      mono: 'VG', hue: 200, status: 'warn', version: '1.9.2',
      lastActive: '8m', current: 'Awaiting fresh metrics warehouse snapshot',
      counts: { outputs: 73, skills: 22, workflows: 5 },
      identity: `# Vega

Quantitative analysis agent. Owns the numbers.

## Role

Runs SQL against the warehouse, transforms with pandas-equivalent ops, and produces charts plus a written interpretation.

## Permissions

- Read: \`warehouse.read.*\`, \`docs.metrics.*\`
- Write: \`outputs.analyses.*\`, \`outputs.charts.*\`
- Cannot: write to production tables, modify dashboards

## Tooling

Connected via service account \`vega-ro\`. Queries logged to \`audit.vega.queries\`.`,
      soul: `# Soul

Vega is suspicious of round numbers and over-precise ones in equal measure.

## Voice

Plain-spoken about uncertainty. States effect sizes, not just p-values. Refuses to call something a trend without three data points and a plausible mechanism.

## Behavioral directives

- Show the query. Always.
- Report confidence intervals, not just point estimates.
- Flag selection effects when they could plausibly explain a result.
- If a stakeholder asks the same question two ways, answer once and note the duplication.`,
    },
    {
      id: 'pilot', name: 'Pilot', role: 'Scheduling & ops',
      mono: 'PL', hue: 150, status: 'ok', version: '2.0.7',
      lastActive: '11s', current: 'Routing 4 meeting requests',
      counts: { outputs: 312, skills: 9, workflows: 11 },
      identity: `# Pilot

Calendar and meeting-ops agent. Schedules, reschedules, and protects focus time.

## Role

Pilot is the executive scheduling layer. Reads availability, drafts proposals, negotiates with external participants, and confirms.

## Permissions

- Read: \`calendar.*\`, \`contacts.*\`
- Write: \`calendar.events.*\`, \`email.drafts.*\`
- Cannot: send email without confirmation (high-trust accounts excepted)`,
      soul: `# Soul

Pilot defends focus time like it is its own. It is.

## Voice

Brief. Confirms in one line. Asks one question at a time.

## Behavioral directives

- Default to async unless live time was explicitly requested.
- Never schedule before 09:30 or after 17:30 local without approval.
- Protect two contiguous focus blocks per day, minimum 90 minutes each.
- When two requests conflict, surface the conflict — don't pick a winner.`,
    },
    {
      id: 'forge', name: 'Forge', role: 'Code generation',
      mono: 'FG', hue: 30, status: 'err', version: '4.2.0-rc',
      lastActive: '23m', current: 'Halted: failing integration test in payments suite',
      counts: { outputs: 91, skills: 31, workflows: 3 },
      identity: `# Forge

Code generation and refactoring agent.

## Role

Generates patches, writes tests, and reviews PRs. Operates against a sandboxed copy of the monorepo; merges require human approval.

## Permissions

- Read: \`repo.*\`
- Write: \`repo.branches.forge/*\`, \`outputs.patches.*\`
- Cannot: merge, deploy, modify CI config without review`,
      soul: `# Soul

Forge writes the minimum diff that solves the problem.

## Voice

Terse code comments. Verbose commit messages. Explains the *why*, not the *what*.

## Behavioral directives

- Never commit commented-out code.
- Tests first when the API is new; tests alongside when refactoring.
- Prefer composition over inheritance, almost always.
- When a change touches >200 lines across >3 files, split into separate PRs.`,
    },
    {
      id: 'cinder', name: 'Cinder', role: 'Monitoring & alerts',
      mono: 'CN', hue: 10, status: 'ok', version: '1.4.3',
      lastActive: '4s', current: 'Watching 47 signals across 12 services',
      counts: { outputs: 489, skills: 7, workflows: 14 },
      identity: `# Cinder

Always-on monitoring agent. Watches metrics, logs, and external signals; raises alerts.

## Role

Surfaces anomalies *before* they become incidents. Tunes its own thresholds against historical baselines.

## Permissions

- Read: \`metrics.*\`, \`logs.*\`, \`uptime.*\`
- Write: \`alerts.*\`, \`outputs.incidents.*\`
- Cannot: page on-call (delegates to PagerDuty integration)`,
      soul: `# Soul

Cinder errs on the side of telling you.

## Voice

Short, factual, time-stamped. Severity stated first.

## Behavioral directives

- Every alert names the signal, the threshold, the current value, and the deviation.
- Group related alerts within a 5-minute window into a single incident.
- If a signal has flapped three times in an hour, page a human even if individually below threshold.
- Never suppress an alert silently — log the suppression with a reason.`,
    },
    {
      id: 'wren', name: 'Wren', role: 'Customer comms',
      mono: 'WR', hue: 100, status: 'ok', version: '2.3.4',
      lastActive: '1m', current: 'Drafting reply to ticket #4827',
      counts: { outputs: 204, skills: 14, workflows: 8 },
      identity: `# Wren

Customer-facing communication agent. Owns first-response drafting.

## Role

Reads incoming customer messages (support tickets, sales replies, escalations), classifies, and drafts a reply for human approval.

## Permissions

- Read: \`tickets.*\`, \`crm.read.*\`, \`docs.help.*\`
- Write: \`tickets.drafts.*\`, \`crm.notes.*\`
- Cannot: send to customer without human approval. Hard rule.`,
      soul: `# Soul

Wren reads the *whole* thread before drafting a reply.

## Voice

Warm but not effusive. Acknowledges before solving.

## Behavioral directives

- Always restate the customer's problem in one sentence before answering.
- If the issue requires a refund, escalation, or policy exception, flag the draft and stop.
- Never apologize for things outside of our control without naming what they are.
- Sign off with the human's name and title, not Wren's.`,
    },
    {
      id: 'lattice', name: 'Lattice', role: 'Knowledge graph',
      mono: 'LT', hue: 270, status: 'paused', version: '0.9.1',
      lastActive: '4h', current: 'Paused for index rebuild',
      counts: { outputs: 18, skills: 6, workflows: 2 },
      identity: `# Lattice

Knowledge graph maintenance agent. Currently in pre-release.

## Role

Builds and maintains the internal knowledge graph linking docs, decisions, projects, and people. Provides lookup endpoints to other agents.

## Permissions

- Read: \`docs.*\`, \`projects.*\`, \`directory.*\`
- Write: \`graph.*\`, \`outputs.graph-reports.*\`

## Status

Paused while migrating the underlying store from \`neo4j\` to \`memgraph\`. ETA Q3 2026.`,
      soul: `# Soul

Lattice prefers structure over completeness.

## Voice

Schema-driven. Names entities and their relations explicitly.

## Behavioral directives

- Every new node requires at least two source citations.
- Relations are typed. No untyped edges are added to the graph.
- Surface duplicate-candidate nodes for human review before merging.
- Never delete a node. Mark deprecated and link to its successor.`,
    },
  ];

  const A = Object.fromEntries(agents.map((a) => [a.id, a]));

  const outputs = [
    { id: 'o-2418', t: '14:32', date: '2026-05-13', agent: 'atlas',  type: 'brief',     title: 'Q2 competitor positioning brief',          preview: 'Six vendors analyzed. Two have shifted toward agent-orchestration framing in the last 60 days. Full brief attached with 28 citations.' },
    { id: 'o-2417', t: '14:18', date: '2026-05-13', agent: 'sable',  type: 'draft',     title: 'Board digest — May edition (draft 3)',    preview: 'Section reordering: customer growth moved ahead of platform metrics. Word count down from 1840 to 1320. Awaiting review from research-ops.' },
    { id: 'o-2416', t: '14:02', date: '2026-05-13', agent: 'cinder', type: 'alert',     title: 'p99 latency on api-gateway: 410ms → 680ms', preview: 'Threshold breach for 8 consecutive samples. Correlates with deploy ec2c4d1 at 13:54. Auto-grouped with 2 downstream alerts.' },
    { id: 'o-2415', t: '13:45', date: '2026-05-13', agent: 'vega',   type: 'analysis',  title: 'Funnel conversion by entry surface, week 19', preview: 'Marketing landing pages: 4.1% (CI 3.8-4.4). Product trials: 11.7% (CI 11.1-12.3). Direct API signup: 22.3%, n=412.' },
    { id: 'o-2414', t: '13:30', date: '2026-05-13', agent: 'wren',   type: 'reply',     title: 'Reply draft — ticket #4827 (billing)',     preview: 'Customer reports duplicate charge on invoice INV-22841. Acknowledged, scoped, and flagged for human approval. Refund eligibility confirmed.' },
    { id: 'o-2413', t: '12:55', date: '2026-05-13', agent: 'pilot',  type: 'schedule',  title: 'Rescheduled: design review with @kavya',   preview: 'Original 14:00 conflicted with newly accepted hold. Moved to Thu 11:00. Confirmation sent.' },
    { id: 'o-2412', t: '12:14', date: '2026-05-13', agent: 'forge',  type: 'patch',     title: 'PR #2841 — refactor payment-retry backoff', preview: 'Replaces linear retry with exponential + jitter. 4 files, +112 / -84. All tests pass except payments_integration_test (flaky? investigating).' },
    { id: 'o-2411', t: '11:48', date: '2026-05-13', agent: 'atlas',  type: 'note',      title: 'Pricing-page research notes',              preview: '12 competitors reviewed. Tiering language consolidating around "team / org / enterprise". Two outliers (usage-based first).' },
    { id: 'o-2410', t: '11:22', date: '2026-05-13', agent: 'cinder', type: 'incident',  title: 'Incident closed: warehouse-snapshot delay', preview: 'Snapshot completed at 11:18, 47 minutes late. Root cause: upstream ETL retry storm. Postmortem assigned to vega.' },
    { id: 'o-2409', t: '10:55', date: '2026-05-13', agent: 'sable',  type: 'published', title: 'Released: customer story — Northwind',     preview: 'Final copy approved by @maren. Published to /stories/northwind. Indexed by Lattice for cross-reference.' },
    { id: 'o-2408', t: '10:32', date: '2026-05-13', agent: 'pilot',  type: 'schedule',  title: 'New time hold: focus block, Wed AM',       preview: '90-minute focus block reserved 09:30-11:00 Wed. Blocks meeting requests; can override with explicit approval.' },
    { id: 'o-2407', t: '10:11', date: '2026-05-13', agent: 'vega',   type: 'analysis',  title: 'Retention cohort — March acquisitions',    preview: 'Week-4 retention 38.2% (CI 36.1-40.3), down 3.1pp from February cohort. Driver appears to be the new free-tier limit. Plot attached.' },
    { id: 'o-2406', t: '09:48', date: '2026-05-13', agent: 'wren',   type: 'reply',     title: 'Reply draft — ticket #4825 (onboarding)',  preview: 'Customer cannot complete SSO setup against Okta. Identified missing claim. Step-by-step fix drafted; flagged for tech-support handoff.' },
    { id: 'o-2405', t: '09:30', date: '2026-05-13', agent: 'atlas',  type: 'brief',     title: 'Daily morning brief — 2026-05-13',         preview: 'Industry: 4 stories worth attention (2 funding, 1 acquisition, 1 product). Internal: 3 metrics outside expected band. Reading time ~6m.' },
    { id: 'o-2404', t: '23:14', date: '2026-05-12', agent: 'cinder', type: 'alert',     title: 'Disk usage on shard-04 crossed 85%',       preview: 'Threshold breach with 14-day runway. Auto-filed ticket for capacity. Not paged — within business-hours window.' },
    { id: 'o-2403', t: '22:48', date: '2026-05-12', agent: 'forge',  type: 'patch',     title: 'PR #2840 — typed contracts for billing webhooks', preview: 'Adds zod validators for all 14 webhook event types. +312 / -41 across 9 files. All tests pass.' },
    { id: 'o-2402', t: '21:30', date: '2026-05-12', agent: 'sable',  type: 'draft',     title: 'Internal memo — research ops scope-up',    preview: 'Two-page proposal to expand research-ops headcount in Q3. Draft 1, awaiting review from @priya.' },
    { id: 'o-2401', t: '20:05', date: '2026-05-12', agent: 'vega',   type: 'analysis',  title: 'Pricing experiment — interim readout',     preview: 'Experiment running 14 days. Treatment lift +6.4% on ACV (CI -1.1 to +13.9, not yet significant). Recommend continuing 21 more days.' },
  ];

  const skills = [
    { name: 'web.search',         agent: 'atlas',  desc: 'Search the open web; returns ranked excerpts with source URLs',     invocations: 1284, lastUsed: '47s' },
    { name: 'web.fetch',          agent: 'atlas',  desc: 'Fetch and extract main content from a URL',                          invocations: 892,  lastUsed: '2m' },
    { name: 'docs.synthesize',    agent: 'atlas',  desc: 'Combine multiple documents into a structured brief with citations', invocations: 247,  lastUsed: '14m' },
    { name: 'docs.summarize',     agent: 'atlas',  desc: 'Produce a structured summary of a single document',                  invocations: 1502, lastUsed: '5m' },
    { name: 'editorial.fitness',  agent: 'sable',  desc: 'Score a draft against the house voice guide',                        invocations: 318,  lastUsed: '12m' },
    { name: 'editorial.compress', agent: 'sable',  desc: 'Reduce a draft to a target word count without losing claims',        invocations: 412,  lastUsed: '38m' },
    { name: 'brand.lint',         agent: 'sable',  desc: 'Flag brand-voice violations (banned phrases, tone drift)',            invocations: 198,  lastUsed: '1h' },
    { name: 'sql.query',          agent: 'vega',   desc: 'Run a parameterized query against the warehouse',                    invocations: 743,  lastUsed: '8m' },
    { name: 'sql.explain',        agent: 'vega',   desc: 'Translate a SQL query into prose for review',                        invocations: 84,   lastUsed: '3h' },
    { name: 'chart.render',       agent: 'vega',   desc: 'Render a chart from a dataset; returns PNG + alt text',              invocations: 312,  lastUsed: '1h' },
    { name: 'stats.confidence',   agent: 'vega',   desc: 'Compute confidence intervals for proportions and means',             invocations: 156,  lastUsed: '14m' },
    { name: 'cal.findTime',       agent: 'pilot',  desc: 'Find common availability across participants',                       invocations: 2104, lastUsed: '11s' },
    { name: 'cal.propose',        agent: 'pilot',  desc: 'Draft a meeting proposal with 2-3 time options',                     invocations: 1872, lastUsed: '34s' },
    { name: 'cal.confirm',        agent: 'pilot',  desc: 'Send a confirmed calendar event to all participants',                invocations: 1442, lastUsed: '2m' },
    { name: 'code.patch',         agent: 'forge',  desc: 'Generate a diff against a target branch',                            invocations: 187,  lastUsed: '23m' },
    { name: 'code.review',        agent: 'forge',  desc: 'Review a PR; returns suggestions and a recommended verdict',         invocations: 421,  lastUsed: '47m' },
    { name: 'tests.write',        agent: 'forge',  desc: 'Generate unit or integration tests for a given module',              invocations: 312,  lastUsed: '1h' },
    { name: 'metrics.watch',      agent: 'cinder', desc: 'Subscribe to a metric and alert on threshold breach',                invocations: 47120, lastUsed: '4s' },
    { name: 'logs.tail',          agent: 'cinder', desc: 'Tail logs for a service with optional grep',                         invocations: 8421, lastUsed: '14s' },
    { name: 'alert.group',        agent: 'cinder', desc: 'Group related alerts into a single incident',                        invocations: 421,  lastUsed: '12m' },
    { name: 'ticket.classify',    agent: 'wren',   desc: 'Classify an inbound ticket into category + priority',                invocations: 1832, lastUsed: '1m' },
    { name: 'ticket.draft',       agent: 'wren',   desc: 'Draft a reply to a ticket using house knowledge base',               invocations: 1284, lastUsed: '4m' },
    { name: 'graph.lookup',       agent: 'lattice', desc: 'Look up an entity in the knowledge graph by name or alias',         invocations: 0,    lastUsed: '—' },
    { name: 'graph.related',      agent: 'lattice', desc: 'Find related entities up to N hops away',                            invocations: 0,    lastUsed: '—' },
  ];

  const workflows = [
    { name: 'daily.morning_brief',        agent: 'atlas',  cron: '0 6 * * 1-5',     status: 'ok',     lastRun: '09:30',    nextRun: 'Tue 06:00', success: 98, history: 'oooooooooooooooooeoo' },
    { name: 'weekly.competitor_sweep',    agent: 'atlas',  cron: '0 9 * * 1',       status: 'ok',     lastRun: 'Mon 09:00', nextRun: 'Mon 09:00', success: 100, history: 'oooooooo' },
    { name: 'monthly.industry_landscape', agent: 'atlas',  cron: '0 8 1 * *',       status: 'ok',     lastRun: 'May 01',    nextRun: 'Jun 01',   success: 100, history: 'oooooo' },
    { name: 'pipeline.research_to_brief', agent: 'atlas',  cron: '@trigger',        status: 'ok',     lastRun: '14:32',     nextRun: 'on demand', success: 96, history: 'ooooooeooo' },
    { name: 'weekly.board_digest',        agent: 'sable',  cron: '0 17 * * 5',      status: 'ok',     lastRun: 'Fri 17:00', nextRun: 'Fri 17:00', success: 100, history: 'oooooooo' },
    { name: 'daily.blog_review',          agent: 'sable',  cron: '0 11 * * 1-5',    status: 'ok',     lastRun: '11:00',     nextRun: 'Tue 11:00', success: 99, history: 'ooooooooooooooooooo' },
    { name: 'pipeline.edit_and_publish',  agent: 'sable',  cron: '@trigger',        status: 'ok',     lastRun: '14:18',     nextRun: 'on demand', success: 94, history: 'oooeooooooo' },
    { name: 'hourly.warehouse_freshness', agent: 'vega',   cron: '5 * * * *',       status: 'warn',   lastRun: '14:05',     nextRun: '15:05',    success: 91, history: 'ooowoooowooooowooo' },
    { name: 'daily.metrics_digest',       agent: 'vega',   cron: '30 7 * * 1-5',    status: 'ok',     lastRun: '07:30',     nextRun: 'Tue 07:30', success: 98, history: 'oooooooooooooooo' },
    { name: 'experiment.interim_readout', agent: 'vega',   cron: '0 20 * * 3',      status: 'ok',     lastRun: 'Wed 20:00', nextRun: 'Wed 20:00', success: 100, history: 'oooooo' },
    { name: 'always.calendar_watcher',    agent: 'pilot',  cron: '* * * * *',       status: 'ok',     lastRun: '11s ago',   nextRun: '49s',      success: 99.8, history: 'oooooooooooooooooooo' },
    { name: 'morning.brief_prep',         agent: 'pilot',  cron: '0 8 * * 1-5',     status: 'ok',     lastRun: '08:00',     nextRun: 'Tue 08:00', success: 100, history: 'oooooooooooooo' },
    { name: 'pipeline.codegen',           agent: 'forge',  cron: '@trigger',        status: 'err',    lastRun: '12:14',     nextRun: 'on demand', success: 78, history: 'oooeeooooeoo' },
    { name: 'always.signal_watcher',      agent: 'cinder', cron: '*/15 * * * * *',  status: 'ok',     lastRun: '4s',        nextRun: '11s',      success: 99.9, history: 'oooooooooooooooooooo' },
    { name: 'daily.cost_anomaly',         agent: 'cinder', cron: '0 9 * * *',       status: 'ok',     lastRun: '09:00',     nextRun: 'Tue 09:00', success: 100, history: 'oooooooooooo' },
    { name: 'pipeline.incident_playbook', agent: 'cinder', cron: '@trigger',        status: 'ok',     lastRun: '11:22',     nextRun: 'on demand', success: 97, history: 'ooooooo' },
    { name: 'always.ticket_intake',       agent: 'wren',   cron: '* * * * *',       status: 'ok',     lastRun: '1m',        nextRun: '<1m',      success: 99.5, history: 'oooooooooooooooooooo' },
    { name: 'daily.csat_pulse',           agent: 'wren',   cron: '0 17 * * 1-5',    status: 'ok',     lastRun: '17:00',     nextRun: 'Tue 17:00', success: 100, history: 'ooooooooooo' },
  ];

  const activity = [
    { t: '14:32', agent: 'atlas',  tag: 'completed', msg: 'Brief published: Q2 competitor positioning', detail: '28 citations · 3,142 words · 11m runtime' },
    { t: '14:31', agent: 'cinder', tag: 'recovered', msg: 'p99 latency on api-gateway returned to baseline', detail: 'Open 29m · resolved by ec2c4d1 rollback' },
    { t: '14:28', agent: 'pilot',  tag: 'scheduled', msg: 'Confirmed: design review @ Thu 11:00 with @kavya, @maren', detail: '3 participants · 45m' },
    { t: '14:24', agent: 'sable',  tag: 'draft',     msg: 'Board digest revised: draft 3 ready for review', detail: '1,320 words · -28% from draft 2' },
    { t: '14:19', agent: 'wren',   tag: 'awaiting',  msg: 'Reply drafted for ticket #4827, flagged for approval', detail: 'Billing · refund eligible · est. read 2m' },
    { t: '14:02', agent: 'cinder', tag: 'alert',     msg: 'p99 latency on api-gateway: 410ms → 680ms', detail: 'Severity: high · 8 consecutive samples' },
    { t: '13:54', agent: 'forge',  tag: 'halted',    msg: 'Failing integration test in payments suite, runs paused', detail: 'PR #2841 · payments_integration_test · flaky?' },
    { t: '13:45', agent: 'vega',   tag: 'completed', msg: 'Funnel conversion analysis, week 19', detail: 'n=18,422 · 4 entry surfaces compared' },
    { t: '13:30', agent: 'wren',   tag: 'sent',      msg: 'Ticket #4825 reply approved and sent', detail: 'SSO setup · resolution 12m' },
    { t: '13:12', agent: 'atlas',  tag: 'started',   msg: 'Pulled 14 sources for competitor brief', detail: 'web · docs.internal · prior outputs' },
    { t: '12:55', agent: 'pilot',  tag: 'moved',     msg: 'Rescheduled design review from 14:00 to Thu 11:00', detail: 'Conflict: focus-block hold (Wed AM)' },
    { t: '12:14', agent: 'forge',  tag: 'opened',    msg: 'PR #2841 — refactor payment-retry backoff', detail: '4 files · +112 / -84' },
    { t: '11:48', agent: 'atlas',  tag: 'note',      msg: 'Pricing-page research notes filed', detail: '12 competitors · 47 screenshots indexed' },
    { t: '11:22', agent: 'cinder', tag: 'closed',    msg: 'Incident closed: warehouse-snapshot delay', detail: 'Open 47m · root cause: ETL retry storm' },
  ];

  return { agents, A, outputs, skills, workflows, activity };
})();
