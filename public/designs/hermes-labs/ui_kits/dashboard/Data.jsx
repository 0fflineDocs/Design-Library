/* Hermes Labs — hardcoded dashboard content.
   All copy per the operational spec. No lorem, no placeholders. */

const HLData = {
  agents: [
    { name: 'HERMES',     role: 'orchestrator', status: 'running', uptime: '12d 4h',  last: '08:00 daily check',   pid: 'ag-001', mem: '412 MB', reqs: '1.2k/h' },
    { name: 'ENGINEER',   role: 'builder',      status: 'running', uptime: '6d 2h',   last: '10:43 research brief', pid: 'ag-002', mem: '388 MB', reqs: '740/h' },
    { name: 'RESEARCHER', role: 'analyst',      status: 'running', uptime: '18h',     last: '10:43 wiki update',   pid: 'ag-003', mem: '506 MB', reqs: '910/h' },
    { name: 'DOMINA',     role: 'persona',      status: 'idle',    uptime: '6d',      last: '13:05 May 28',        pid: 'ag-004', mem: '120 MB', reqs: '0/h' },
    { name: 'NYX',        role: 'bridge',       status: 'running', uptime: '3d',      last: '16:47 Domina bridge', pid: 'ag-005', mem: '297 MB', reqs: '430/h' },
  ],

  metrics: [
    { id: 'disk',    icon: 'disk',    label: 'Disk',         value: '14.9% free', sub: '480 / 564 GB', pct: 85, tone: 'warn' },
    { id: 'swap',    icon: 'swap',    label: 'Swap',         value: '89.2%',      sub: 'over threshold', pct: 89, tone: 'warn' },
    { id: 'gateway', icon: 'gateway', label: 'Gateways',     value: '5 / 5 up',   sub: 'all routing', pct: 100, tone: 'ok' },
    { id: 'errors',  icon: 'errors',  label: 'Errors (24h)', value: '136',        sub: 'mostly 400 / 503', pct: 38, tone: 'down', delta: '+23' },
  ],

  crons: [
    { agent: 'Hermes',     name: 'Morning Priority Check-In', schedule: '08:00 daily', status: 'failed', note: 'failing 11 days' },
    { agent: 'Hermes',     name: 'Daily Obsidian Note',       schedule: '23:30 daily', status: 'ok' },
    { agent: 'Hermes',     name: 'Weekly Suggestion Review',  schedule: 'Mon 08:00',   status: 'ok' },
    { agent: 'Hermes',     name: 'Weekly Digest',             schedule: 'Sun 09:00',   status: 'ok' },
    { agent: 'Engineer',   name: 'Daily Health Check',        schedule: '09:00 daily', status: 'ok' },
    { agent: 'Researcher', name: 'Community Pulse',           schedule: 'Sat 10:00',   status: 'warn', note: 'date filter' },
  ],

  log: [
    { time: '10:43', path: 'research/', text: '5 new briefs landed: SSRI, cognitive atrophy, Google IO', tag: 'ingest' },
    { time: '09:15', path: 'codex/',    text: 'Style Index updated, 4 styles documented', tag: 'codex' },
    { time: '08:00', path: 'cron',      text: 'Morning Priority Check-In CRASHED: _pool_may_recover_from_rate_limit', tag: 'fault', down: true },
    { time: '06:00', path: 'system/',   text: 'Nightly lint: 169 broken links remain, 0 frontmatter issues', tag: 'lint' },
    { time: '22:30', path: 'novaxl/',   text: 'Domina bridge: 6 Swedish prompts created', tag: 'bridge' },
    { time: '20:00', path: 'codex/',    text: 'Domina character sheet updated, Gothic Noir style added', tag: 'codex' },
    { time: '16:47', path: 'novaxl/',   text: 'Generation: domina-testprompt2-v3-efter-duschen.png OK', tag: 'gen' },
    { time: '11:36', path: 'wiki/',     text: '7 neuroscience pages created: Dopamine, Serotonin, BDNF', tag: 'wiki' },
  ],
};

window.HLData = HLData;
