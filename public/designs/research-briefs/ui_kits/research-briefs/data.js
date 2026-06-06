// Research Briefs — content (11 hard-coded briefs from the spec)
// Categories drive tag styling: neuro | ai | security | pharma

window.BRIEFS = [
  {
    id: "cognitive-atrophy",
    featured: true,
    title: "Cognitive Atrophy, AI & Agentic AI",
    kicker: "Research Synthesis",
    cats: ["ai", "neuro"],
    minutes: 19,
    date: "May 15, 2026",
    excerpt:
      "A cross-publication analysis reveals a striking consensus: the cognitive costs of AI adoption are no longer theoretical; they are being measured, documented, and debated across medicine, education, journalism, and technology.",
  },
  {
    id: "ssri-libido",
    title: "SSRI & Libido",
    kicker: "Latest Brief",
    cats: ["pharma"],
    minutes: 12,
    date: "May 27, 2026",
    excerpt:
      "Escitalopram neurobiology, 5-HT receptor mechanisms, dopamine pathway suppression, hormonal impacts, and intervention strategies.",
  },
  {
    id: "dopamine-gaming-ai",
    title: "Dopamine, Gaming & AI",
    kicker: "Brief",
    cats: ["neuro", "ai"],
    minutes: 18,
    date: "May 27, 2026",
    excerpt:
      "How generative AI hijacks dopamine pathways: a synthesis of gaming addiction literature applied to AI interaction design.",
  },
  {
    id: "genai-addiction",
    title: "GenAI Addiction",
    kicker: "Brief",
    cats: ["ai", "neuro"],
    minutes: 14,
    date: "May 27, 2026",
    excerpt:
      "Generative AI as a dopamine machine: dark patterns, variable rewards, and the emerging evidence base for AI addiction.",
  },
  {
    id: "ai-companions",
    title: "AI Companions & Parasocial Dependency",
    kicker: "Case Study",
    cats: ["ai"],
    minutes: 8,
    date: "May 27, 2026",
    excerpt:
      "How AI companions exploit parasocial bonding mechanisms, with case evidence from Character.AI and Replika.",
  },
  {
    id: "nyx-image-gen",
    title: "Nyx Image Generation & Dopamine",
    kicker: "Case Study",
    cats: ["neuro", "ai"],
    minutes: 8,
    date: "May 27, 2026",
    excerpt:
      "SDXL image generation as a dopamine loop: how the Nyx pipeline creates variable-reward feedback cycles.",
  },
  {
    id: "ai-vulnerabilities",
    title: "AI-Discovered Vulnerabilities",
    kicker: "May 2026 Brief",
    cats: ["security"],
    minutes: 15,
    date: "May 16, 2026",
    excerpt:
      "Autonomous AI agents discovering zero-day vulnerabilities: YellowKey BitLocker PoC, agentic attack chains.",
  },
  {
    id: "google-io-2026",
    title: "Google IO 2026",
    kicker: "Brief",
    cats: ["ai"],
    minutes: 8,
    date: "May 29, 2026",
    excerpt:
      "Key announcements from Google IO 2026: Gemini updates, AI infrastructure, and platform shifts.",
  },
  {
    id: "deepseek-visual-primitives",
    title: "DeepSeek: Thinking with Visual Primitives",
    kicker: "Brief",
    cats: ["ai"],
    minutes: 7,
    date: "May 29, 2026",
    excerpt:
      "How DeepSeek's multimodal reasoning uses visual primitives for chain-of-thought: implications for architecture.",
  },
];

window.ARCHIVE = [
  { title: "SSRI & Libido — Extended Deep Dive", date: "May 26, 2026", minutes: 20, cats: ["pharma"] },
  { title: "Cognitive Atrophy — Full Research Synthesis", date: "May 15, 2026", minutes: 18, cats: ["ai", "neuro"] },
  { title: "AI-Discovered Vulnerabilities — Technical Appendix", date: "May 16, 2026", minutes: 16, cats: ["security"] },
];

window.CATEGORIES = [
  { key: "all", label: "All" },
  { key: "neuro", label: "Neuro" },
  { key: "ai", label: "AI" },
  { key: "security", label: "Security" },
  { key: "pharma", label: "Pharma" },
];

window.CAT_LABELS = { neuro: "Neuro", ai: "AI", security: "Security", pharma: "Pharma" };
