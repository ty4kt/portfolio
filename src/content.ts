// All site copy and links live here. Edit text without touching components.
// PRIVACY BOUNDARY: no employer names, no NDA/offer details, no financials.

export const content = {
  name: "Tyrese Thomas",
  oneLiner: "CS grad building AI systems.",
  subLine: "Agents, automations, and the workflows that run my week.",
  now: "Right now: deep in agent architectures, shipping AI tooling, and levelling up for an AI engineering role.",
  cvUrl: "/cv/tyrese-thomas-cv.pdf", // drop your CV PDF at public/cv/ to light up the button

  about: {
    heading: "About me",
    avatar: "/images/me.jpg", // drop your selfie here (public/images/me.jpg)
    paragraphs: [
      "CS graduate. Spent time in face-to-face sales, learned how to read people and close. Now I build AI systems nights and days.",
      "I work with Claude, Python, and whatever the problem needs. I care about systems that hold up, not demos that look good once.",
      "Currently going deep on AI engineering. Agents, pipelines, the stuff behind the chat box.",
    ],
    bringHeading: "What I bring",
    bringIntro:
      "Here's what hiring me actually does for a business or a build:",
    bring: [
      {
        lead: "I find the real problem first.",
        detail:
          "Before I write a line of code I work out what actually needs solving. Sales drilled this into me. Most wasted engineering is building the wrong thing well, so I make sure we're building the right thing.",
      },
      {
        lead: "I turn manual work into systems.",
        detail:
          "Research, reporting, data entry, the repetitive stuff your team does by hand. I spot it and hand it to an agent or a pipeline so people stop burning hours on it and get back to real work.",
      },
      {
        lead: "I use AI where it actually pays off.",
        detail:
          "Agents, tool use, retrieval, prompt design. Not bolting a chatbot on for show. I apply AI where it genuinely makes a process faster, cheaper, or possible at all, and I leave it out where it doesn't.",
      },
      {
        lead: "I ship working software, not demos.",
        detail:
          "Ideas become tools people actually use. I care about the thing holding up in production under real load, not looking good once in a meeting.",
      },
      {
        lead: "I think about what breaks at scale.",
        detail:
          "Cost, latency, edge cases, what happens at ten times the traffic. I ask those questions before launch, because they're a lot cheaper to answer then than after.",
      },
      {
        lead: "I close gaps fast and don't drop things.",
        detail:
          "Every project here was new ground when I started it. I learn quickly, ask the right questions, and follow through. You won't have to chase me.",
      },
    ],
  },

  skills: {
    heading: "Skills",
    groups: [
      {
        title: "AI Engineering",
        items: [
          "Claude API & agent design",
          "Prompt & context engineering",
          "Agentic workflows (WAT pattern)",
          "Tool use & function calling",
          "Claude Code skills & subagents",
          "Search/retrieval pipelines (Tavily)",
        ],
      },
      {
        title: "Languages & Frameworks",
        items: [
          "Python",
          "TypeScript / JavaScript",
          "React & React Three Fiber",
          "HTML / CSS",
          "SQL",
        ],
      },
      {
        title: "Engineering Practice",
        items: [
          "Git & GitHub (branch → PR → review)",
          "REST APIs & integrations",
          "Code review",
          "CI-friendly project structure",
          "Documentation & decision logs",
        ],
      },
      {
        title: "From the sales floor",
        items: [
          "Reading people, fast",
          "Clear communication under pressure",
          "Handling rejection, staying consistent",
        ],
      },
    ],
  },

  work: {
    heading: "Work",
    projects: [
      {
        title: "AI Lead Research Agent",
        description:
          "Give it a company name, get a one-page AI opportunity brief in under 60 seconds. Python + Claude + Tavily, built on the WAT pattern (Workflows → Agent → Tools).",
        image: "/images/project-lead-research.svg", // TODO: swap for nano-banana webp
        tags: ["Python", "Claude API", "Tavily", "Agents"],
        link: "https://github.com/ty4kt/ai-lead-research",
        linkLabel: "View on GitHub",
        caseStudy: null,
      },
      {
        title: "My AI Operating System",
        description:
          "I turned Claude Code into my own operating system. Custom skills, subagents, decision logs. It onboards me, audits itself, and drills me for interviews.",
        image: "/images/project-aios.svg", // TODO: swap for nano-banana webp
        tags: ["Claude Code", "Agents", "Skills", "Systems design"],
        link: null,
        linkLabel: null,
        caseStudy: "aios",
      },
      {
        title: "Interactive 3D Portfolio",
        description:
          "The site you're on right now. An interactive 3D personal site built from scratch with React Three Fiber, then shipped to production on Vercel.",
        image: "/images/project-portfolio.svg",
        tags: ["React", "TypeScript", "Three.js", "Vite"],
        link: "https://github.com/ty4kt/portfolio",
        linkLabel: "View on GitHub",
        caseStudy: null,
      },
    ],
  },

  caseStudies: {
    aios: {
      title: "My AI Operating System",
      tagline: "A personal AI system I built to think, learn, and ship faster.",
      privateNote:
        "The repo is private by design — it holds personal and working context. Happy to walk through it live.",
      sections: [
        {
          heading: "What it is",
          body: "I turned Claude Code into a personal operating system: a set of custom skills, subagents, and logs that run on top of my own context. It onboards me, audits its own gaps, drills me for interviews, and helps me decide and build faster.",
        },
        {
          heading: "Why I built it",
          body: "Generic AI tools don't know me or my goals. I wanted a system that does — one that compounds. Every skill I add makes the next task cheaper. It is my proof that I can design and ship real agentic systems, not just use them.",
        },
        {
          heading: "How it's built",
          body: "Skills are isolated capabilities (markdown + instructions) the system loads on demand. Subagents are read-only delegates with least-privilege tool access — one researches codebases, one reviews my work like a demanding senior engineer. A decision log keeps an append-only record of why, not just what.",
        },
        {
          heading: "The WAT pattern",
          body: "Workflows → Agent → Tools. Deterministic code decides the steps where the path is known; the agent decides which tools to call where judgement is needed; tools do the actual work. Knowing where that line sits — code-driven vs LLM-driven control flow — is the core of building agents that are reliable instead of flaky.",
        },
      ],
    },
  },

  contact: {
    heading: "Say hi",
    line: "Open to interesting problems.",
    links: [
      { label: "GitHub", href: "https://github.com/ty4kt" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" }, // TODO: real profile URL from Tyrese
      { label: "Email", href: "mailto:mrtthomas2@icloud.com" },
    ],
    cvLabel: "Download CV",
  },
} as const;
