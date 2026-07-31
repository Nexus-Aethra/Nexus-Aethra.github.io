import type { Locale } from "./store";

/**
 * 站点文案：按"页面 → 段落"组织。所有展示文字必须经过此字典输出。
 * 语言切换在客户端瞬时完成，刷新后保留（zustand persist）。
 */
export type Dict = {
  meta: { tagline: string; heroKicker: string };
  nav: {
    brandSubtitle: string;
    links: { vision: string; ecosystem: string; features: string; roadmap: string };
    trackProgress: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    statusLeft: string;
    scrollHint: string;
    badge: string;
    headline1: string;
    headline2Pre: string;
    headline2Accent: string;
    headline2Post: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    marquee: string[];
  };
  vision: {
    tag: string;
    title: string;
    quote: string;
    pillars: { tag: string; title: string; body: string }[];
  };
  ecosystem: {
    tag: string;
    count: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    body: string;
    coreChain: string;
    modules: {
      code: string;
      name: string;
      role: string;
      description: string;
      status: { live: string; beta: string; soon: string };
      features: string[][];
    }[];
  };
  features: {
    tag: string;
    titleLead: string;
    titleItalic: string;
    titleTail: string;
    items: { icon: string; title: string; body: string }[];
  };
  manifesto: {
    tag: string;
    line1Lead: string;
    line1Accent: string;
    line2Lead: string;
    line2Stroke: string;
    line2Accent: string;
    line2Tail: string;
    line3: string;
    body: string;
    bgWord: string;
  };
  roadmap: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    states: { shipped: string; inProgress: string; planned: string };
    items: { label: string; date: string }[];
  };
  cta: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    primary: string;
    secondary: string;
    secondaryBadge: string;
  };
  footer: {
    marquee: string[];
    blurb: string;
    columns: { title: string; links: string[] }[];
    builtBy: string;
    license: string;
    statusOk: string;
  };
  notFound: {
    label: string;
    back: string;
  };
};

export const dict: Record<Locale, Dict> = {
  en: {
    meta: {
      tagline: "ai-native games",
      heroKicker: "Where worlds are forged from conversation.",
    },
    nav: {
      brandSubtitle: "ai-native games",
      links: {
        vision: "Vision",
        ecosystem: "Ecosystem",
        features: "Features",
        roadmap: "Roadmap",
      },
      trackProgress: "Track Progress",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      statusLeft: "system online · build v0.3.0",
      scrollHint: "scroll",
      badge: "Experimental · AI-native game platform · self-built storage core",
      headline1: "Beyond",
      headline2Pre: "the ",
      headline2Accent: "play",
      headline2Post: ".",
      body: "Where worlds are forged from conversation. Nexus replaces hardcoded game logic with a living ecosystem: a self-built storage kernel (NexusDB) grounds every world, visual editors weave branching narratives, characters come alive, and NPCs gain the ability to compile code at runtime — every player choice reshapes the world in real time.",
      ctaPrimary: "Explore the Ecosystem",
      ctaSecondary: "Read the Vision",
      marquee: [
        "AI-Native Worlds",
        "●",
        "NexusDB Storage Core",
        "●",
        "Visual Story Editor",
        "●",
        "Branching Narratives",
        "●",
        "Character System",
        "●",
        "Runtime Compilation",
        "●",
        "Infinite Replayability",
        "●",
      ],
    },
    vision: {
      tag: "The Vision",
      title: "Replace scripts with systems.",
      quote:
        "Games should not be filmed. They should be growing. With enough intelligence baked into the loop, every player becomes a world-builder — and every world, unrepeatable.",
      pillars: [
        {
          tag: "01",
          title: "Replace scripts with systems.",
          body: "Every NPC, quest and biome is generated on demand by language models. The game isn't a payload — it's a runtime.",
        },
        {
          tag: "02",
          title: "Make every choice irreversible.",
          body: "Player dialogue branches the narrative tree. Worlds, factions, and rewrites persist across sessions.",
        },
        {
          tag: "03",
          title: "Open the code.",
          body: "Nexus is built as composable microservices. Anyone can plug a new module — terrain, audio, NPCs — into the loop.",
        },
      ],
    },
    ecosystem: {
      tag: "The Ecosystem",
      count: "6 modules · 1 vision",
      titleLead: "A mosaic of microservices, ",
      titleAccent: "orchestrated",
      titleTail: " by AI.",
      body: "Each Nexus module is an independent service. Together they form a single living organism: identity, story, world, mind and storage — stitched at runtime by language models on top of our self-built NexusDB kernel.",
      coreChain: "core · narrative · auth · terrain · compile · storage",
      modules: [
        {
          code: "/NEXUS",
          name: "Nexus",
          role: "Core Platform",
          description:
            "The central hub that orchestrates every LLM call, world tick, and player session. Auth, routing, persistence — all in one runtime.",
          status: { live: "Live", beta: "Beta", soon: "Soon" },
          features: [
            ["Session orchestration", "Vector memory", "Tool registry"],
            ["Branch tree", "Quest synthesis", "Trigger graph"],
            ["JWT issuance", "Key rotation", "Microservice trust"],
            ["Procedural mesh", "Biome LLM", "Light probe synthesis"],
            ["Sandboxed eval", "Capability grant", "Hot reload"],
          ],
        },
        {
          code: "/STORY-LOOM",
          name: "Story Loom",
          role: "Narrative Engine",
          description:
            "Visual whiteboard editor: drag chapter and node cards, wire directed edges between them, and let a unique begin chapter anchor the whole story. Characters bind to beats; pixel covers give every world a face.",
          status: { live: "Live", beta: "Beta", soon: "Soon" },
          features: [
            ["Whiteboard editor", "Directed edges", "Begin chapter"],
            ["Character system", "Pixel covers", "Bridge nodes"],
            [],
            [],
            [],
          ],
        },
        {
          code: "/PORTAL",
          name: "Portal",
          role: "Auth Gateway",
          description:
            "Unified security entry point — handles login/registration, issues JWT tokens, and distributes public keys across all microservices.",
          status: { live: "Live", beta: "Beta", soon: "Soon" },
          features: [
            ["JWT issuance", "Key rotation", "Microservice trust"],
            [],
            [],
            [],
            [],
          ],
        },
        {
          code: "/TERRAIN",
          name: "Terrain",
          role: "Terrain Generator",
          description:
            "Dynamically builds 3D / 2D worlds from natural language descriptions. Mountains first, then forests, then ruins, then weather.",
          status: { live: "Live", beta: "Beta", soon: "Soon" },
          features: [
            ["Procedural mesh", "Biome LLM", "Light probe synthesis"],
            [],
            [],
            [],
            [],
          ],
        },
        {
          code: "/COMPILE",
          name: "Compile",
          role: "Runtime Compiler",
          description:
            "Lets NPCs generate, compile and execute code on the fly — new abilities, new spells, new crafts — every player conversation a chance to evolve.",
          status: { live: "Live", beta: "Beta", soon: "Soon" },
          features: [
            ["Sandboxed eval", "Capability grant", "Hot reload"],
            [],
            [],
            [],
            [],
          ],
        },
        {
          code: "/NEXUSDB",
          name: "NexusDB",
          role: "Self-Built Storage Core",
          description:
            "A write-heavy, low-latency single-machine database written in Rust — Share-Nothing cores, io_uring, a homegrown coroutine scheduler, and unified multi-protocol access (Redis-compatible today, PG/MySQL/Mongo on the roadmap). Every world's persistence runs on our own kernel.",
          status: { live: "Live", beta: "Beta", soon: "Soon" },
          features: [
            ["io_uring", "Zero-copy", "Coroutine scheduler"],
            ["Five protocols", "SQL + indexes", "GC compact"],
            [],
            [],
            [],
          ],
        },
      ],
    },
    features: {
      tag: "Key Features",
      titleLead: "Eight things ",
      titleItalic: "every other engine",
      titleTail: " can't do.",
      items: [
        {
          icon: "Database",
          title: "Self-Built Storage Kernel",
          body: "NexusDB — a Rust database written for write-heavy, low-latency worlds: io_uring, zero-copy IO, a homegrown coroutine scheduler and multi-protocol access.",
        },
        {
          icon: "Brain",
          title: "LLM-Driven Generation",
          body: "Terrain, dialogue and quests aren't pre-scripted — they're generated on demand by language models tuned for your world.",
        },
        {
          icon: "GitBranch",
          title: "Visual Narrative Editor",
          body: "A whiteboard canvas where chapters, nodes and characters are cards you drag, wire with directed edges, and bind together in seconds.",
        },
        {
          icon: "ShieldCheck",
          title: "Secure by Design",
          body: "JWT-based authentication with automatic refresh and public-key rotation. Tokens renew invisibly — sessions never die mid-game.",
        },
        {
          icon: "Code2",
          title: "Runtime Compilation",
          body: "NPCs can learn new abilities by writing and executing code in real time — within a strict capability sandbox.",
        },
        {
          icon: "Repeat",
          title: "Infinite Replayability",
          body: "No two playthroughs are the same. The world evolves with every choice; endings branch into new beginnings.",
        },
        {
          icon: "Users",
          title: "Character System",
          body: "Describe people once, bind them to any story beat. Protagonists, witnesses, narrators — roles shape how the narrative reacts.",
        },
        {
          icon: "Sparkles",
          title: "Composable Modules",
          body: "Drop-in services for narrative, terrain, audio or auth. Extend Nexus without touching the core.",
        },
      ],
    },
    manifesto: {
      tag: "Manifesto",
      line1Lead: "We don't write ",
      line1Accent: "stories.",
      line2Lead: "We write ",
      line2Stroke: "worlds",
      line2Accent: "that",
      line2Tail: " write",
      line3: "themselves.",
      body: "The next generation of games will not be authored. They will be grown — by language models, player dialogue, and a thousand tiny decisions at runtime. That's the world we're building.",
      bgWord: "CONVERSATION · WORLD",
    },
    roadmap: {
      tag: "Roadmap",
      titleLead: "We're building it in the ",
      titleAccent: "open",
      body: "Every milestone is documented, every commit is public. Watch the loop tighten as modules come online.",
      states: {
        shipped: "Shipped",
        inProgress: "In progress",
        planned: "Planned",
      },
      items: [
        { label: "Module planning & architecture design", date: "Q1" },
        { label: "Auth Portal — JWT issuance & auto refresh", date: "Q2" },
        { label: "Story Loom — whiteboard narrative editor", date: "Q3" },
        { label: "Character system & node-cast binding", date: "Q4" },
        { label: "NexusDB — self-built storage kernel", date: "Q4" },
        { label: "Terrain Generator integration", date: "Q4" },
        { label: "Runtime Compilation Layer", date: "Q1" },
        { label: "First public playable demo", date: "Q2" },
      ],
    },
    cta: {
      tag: "Join the build",
      titleLead: "Help us forge ",
      titleAccent: "worlds",
      body: "Nexus is experimental and open. Read the docs, run a module locally, open an issue, ship a quest. Every contribution reshapes the loop.",
      primary: "View on GitHub",
      secondary: "Documentation",
      secondaryBadge: "soon",
    },
    footer: {
      marquee: [
        "FORGED FROM CONVERSATION",
        "●",
        "Built with ♥ by the Nexus Team",
        "●",
        "MIT License",
        "●",
        "Forever in beta",
        "●",
      ],
      blurb:
        "An experimental AI-native game platform where worlds are forged from conversation.",
      columns: [
        {
          title: "Project",
          links: ["Vision", "Ecosystem", "Roadmap", "Manifesto"],
        },
        {
          title: "Modules",
          links: ["Nexus Core", "Story Loom", "Auth Portal", "NexusDB", "Terrain · Compile"],
        },
        {
          title: "Community",
          links: ["GitHub", "Discord", "Contributing", "Contact"],
        },
      ],
      builtBy: "Built with ♥ by the Nexus Team",
      license: "MIT License",
      statusOk: "status: all loops operational",
    },
    notFound: {
      label: "signal lost — return to nexus",
      back: "← back home",
    },
  },

  zh: {
    meta: {
      tagline: "AI 原生游戏",
      heroKicker: "用对话锻造世界。",
    },
    nav: {
      brandSubtitle: "AI 原生游戏",
      links: {
        vision: "理念",
        ecosystem: "生态",
        features: "特性",
        roadmap: "路线图",
      },
      trackProgress: "查看进度",
      menuOpen: "打开菜单",
      menuClose: "关闭菜单",
    },
    hero: {
      statusLeft: "系统在线 · 版本 v0.3.0",
      scrollHint: "滚动",
      badge: "实验性 · AI 原生游戏平台 · 自研存储内核",
      headline1: "Beyond",
      headline2Pre: "the ",
      headline2Accent: "play",
      headline2Post: ".",
      body: "用对话锻造世界。Nexus 用一套活的生态系统取代硬编码的游戏逻辑：自研存储内核 NexusDB 承载每个世界的持久化，可视化编辑器编织分支叙事、人物系统让人物活起来，大语言模型实时生成地形、赋予 NPC 运行时编译代码的能力 —— 玩家的每一个选择都在重塑这个世界。",
      ctaPrimary: "探索生态",
      ctaSecondary: "阅读理念",
      marquee: [
        "AI 原生世界",
        "●",
        "NexusDB 存储内核",
        "●",
        "可视化剧情编辑器",
        "●",
        "分支叙事",
        "●",
        "人物系统",
        "●",
        "运行时编译",
        "●",
        "无限可重玩性",
        "●",
      ],
    },
    vision: {
      tag: "理念",
      title: "用系统取代脚本。",
      quote: "游戏不该是「被拍出来的」，而应该是「被养出来的」。当足够多的智能被织进循环，玩家就成了造物主，而每一个世界都不可能被复制。",
      pillars: [
        {
          tag: "01",
          title: "用系统取代脚本。",
          body: "每一个 NPC、任务与生态群落都由语言模型按需生成。游戏不再是数据载荷,而是实时运行体。",
        },
        {
          tag: "02",
          title: "让每一个选择不可逆。",
          body: "玩家对话推动叙事树。世界、阵营、覆写规则在会话之间持久化。",
        },
        {
          tag: "03",
          title: "把代码打开。",
          body: "Nexus 由可组合的微服务构成。任何人都可以接入新模块 —— 地形、音效、NPC。",
        },
      ],
    },
    ecosystem: {
      tag: "生态",
      count: "6 个模块 · 1 个愿景",
      titleLead: "微服务拼成的马赛克,由",
      titleAccent: "AI",
      titleTail: "统一调度。",
      body: "每一个 Nexus 模块都是独立服务。它们共同构成一个有机体:身份、叙事、世界、心智与存储 —— 在运行时由语言模型缝合,并由自研 NexusDB 内核承载持久化。",
      coreChain: "核心 · 叙事 · 鉴权 · 地形 · 编译 · 存储",
      modules: [
        {
          code: "/NEXUS",
          name: "Nexus",
          role: "核心平台",
          description:
            "中央枢纽,协调每一次 LLM 调用、世界 tick 与玩家会话。鉴权、路由、持久化 —— 都跑在同一个运行时。",
          status: { live: "已上线", beta: "Beta", soon: "即将推出" },
          features: [
            ["会话编排", "向量记忆", "工具注册"],
            ["分支树", "任务合成", "触发器图"],
            ["JWT 签发", "密钥轮换", "微服务信任"],
            ["程序化网格", "生态群落 LLM", "光照探针合成"],
            ["沙箱求值", "能力授权", "热重载"],
          ],
        },
        {
          code: "/STORY-LOOM",
          name: "Story Loom",
          role: "叙事引擎",
          description:
            "可视化白板编辑器:拖拽章节与节点卡片、用有向边连接它们,由一个唯一的 begin 章节锚定整个故事。人物绑定剧情节点,像素封面为每个世界赋予面孔。",
          status: { live: "已上线", beta: "Beta", soon: "即将推出" },
          features: [
            ["白板编辑器", "有向边", "begin 章节"],
            ["人物系统", "像素封面", "桥节点"],
            [],
            [],
            [],
          ],
        },
        {
          code: "/PORTAL",
          name: "Portal",
          role: "鉴权网关",
          description:
            "统一的安全入口 —— 处理登录/注册、签发 JWT token,并在所有微服务之间分发公钥。",
          status: { live: "已上线", beta: "Beta", soon: "即将推出" },
          features: [
            ["JWT 签发", "密钥轮换", "微服务信任"],
            [],
            [],
            [],
            [],
          ],
        },
        {
          code: "/TERRAIN",
          name: "Terrain",
          role: "地形生成器",
          description:
            "从自然语言描述动态构建 3D / 2D 世界。先是山,接着是森林,然后是遗迹,然后是天气。",
          status: { live: "已上线", beta: "Beta", soon: "即将推出" },
          features: [
            ["程序化网格", "生态群落 LLM", "光照探针合成"],
            [],
            [],
            [],
            [],
          ],
        },
        {
          code: "/COMPILE",
          name: "Compile",
          role: "运行时编译器",
          description:
            "让 NPC 即时生成、编译并执行代码 —— 新技能、新法术、新工艺 —— 每一场玩家对话都是一次进化的机会。",
          status: { live: "已上线", beta: "Beta", soon: "即将推出" },
          features: [
            ["沙箱求值", "能力授权", "热重载"],
            [],
            [],
            [],
            [],
          ],
        },
        {
          code: "/NEXUSDB",
          name: "NexusDB",
          role: "自研存储内核",
          description:
            "用 Rust 为写密集、低延迟的单一机器场景编写的数据库 —— Share-Nothing 核心、io_uring、自研协程调度器,以及统一的多协议访问(当前兼容 Redis,PG/MySQL/Mongo 在路线图上)。每一个世界的持久化都跑在我们自己的内核上。",
          status: { live: "已上线", beta: "Beta", soon: "即将推出" },
          features: [
            ["io_uring", "零拷贝", "协程调度器"],
            ["五协议", "SQL + 索引", "GC 压缩"],
            [],
            [],
            [],
          ],
        },
      ],
    },
    features: {
      tag: "核心特性",
      titleLead: "八件",
      titleItalic: "其他引擎",
      titleTail: "做不到的事。",
      items: [
        {
          icon: "Database",
          title: "自研存储内核",
          body: "NexusDB —— 面向写密集、低延迟游戏世界打造的 Rust 数据库:io_uring、零拷贝 IO、自研协程调度器与多协议访问。",
        },
        {
          icon: "Brain",
          title: "LLM 驱动生成",
          body: "地形、对话、任务不再是预设剧本 —— 而是根据你的世界按需由语言模型生成。",
        },
        {
          icon: "GitBranch",
          title: "可视化叙事编辑器",
          body: "一块白板画布:章节、节点、人物都是可拖拽的卡片,用有向边连线、互相绑定,几秒内完成叙事编织。",
        },
        {
          icon: "ShieldCheck",
          title: "原生安全设计",
          body: "基于 JWT 的鉴权 + 自动刷新与公钥轮换。令牌静默续期 —— 会话永不中途失效。",
        },
        {
          icon: "Code2",
          title: "运行时编译",
          body: "NPC 可以通过实时编写与执行代码学习新能力 —— 一切都在严格的能力沙箱中进行。",
        },
        {
          icon: "Repeat",
          title: "无限可重玩性",
          body: "没有两次通关是一样的。世界随每个选择演进;结局会衍生出新的开始。",
        },
        {
          icon: "Users",
          title: "人物系统",
          body: "一次描述人物,随时绑定到任何剧情节点。主角、目击者、旁白 —— 角色决定了叙事如何回应。",
        },
        {
          icon: "Sparkles",
          title: "可组合模块",
          body: "直接接入叙事、地形、音效或鉴权服务。无需改动核心即可扩展 Nexus。",
        },
      ],
    },
    manifesto: {
      tag: "宣言",
      line1Lead: "我们不写",
      line1Accent: "故事。",
      line2Lead: "我们写",
      line2Stroke: "会自己写作的",
      line2Accent: "世界",
      line2Tail: "",
      line3: "本身。",
      body: "下一代游戏不再是「被创作出来」的。它们是「被养大」的 —— 由语言模型、玩家对话、运行时无数微小的决定共同培养。这就是我们要建的世界。",
      bgWord: "对话 · 世界",
    },
    roadmap: {
      tag: "路线图",
      titleLead: "我们在",
      titleAccent: "公开",
      body: "每一个里程碑都会被记录,每一次提交都会公开。看着循环随着模块上线而收紧。",
      states: {
        shipped: "已发布",
        inProgress: "进行中",
        planned: "已规划",
      },
      items: [
        { label: "模块规划与架构设计", date: "Q1" },
        { label: "鉴权 Portal —— JWT 签发与自动刷新", date: "Q2" },
        { label: "Story Loom —— 白板叙事编辑器", date: "Q3" },
        { label: "人物系统与节点角色绑定", date: "Q4" },
        { label: "NexusDB —— 自研存储内核", date: "Q4" },
        { label: "地形生成器集成", date: "Q4" },
        { label: "运行时编译层", date: "Q1" },
        { label: "首个公测可玩 Demo", date: "Q2" },
      ],
    },
    cta: {
      tag: "加入共建",
      titleLead: "帮我们一起锻造",
      titleAccent: "世界",
      body: "Nexus 还处于实验阶段,且完全开源。读文档、本地跑一个模块、开个 issue、做一条任务。每一份贡献都在重塑循环。",
      primary: "前往 GitHub",
      secondary: "开发文档",
      secondaryBadge: "即将上线",
    },
    footer: {
      marquee: [
        "从对话中锻造",
        "●",
        "Nexus 团队用 ♥ 构建",
        "●",
        "MIT 开源许可",
        "●",
        "永远在 Beta",
        "●",
      ],
      blurb: "实验性 AI 原生游戏平台,用对话锻造世界。",
      columns: [
        { title: "项目", links: ["理念", "生态", "路线图", "宣言"] },
        { title: "模块", links: ["Nexus 核心", "Story Loom", "Auth Portal", "NexusDB", "地形 · 编译"] },
        { title: "社区", links: ["GitHub", "Discord", "贡献指南", "联系我们"] },
      ],
      builtBy: "Nexus 团队用 ♥ 构建",
      license: "MIT 开源许可",
      statusOk: "状态:所有循环在线",
    },
    notFound: {
      label: "信号丢失 —— 回到 Nexus",
      back: "← 返回首页",
    },
  },
};
