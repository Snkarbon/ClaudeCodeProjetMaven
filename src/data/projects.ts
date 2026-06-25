// Auto-ported from the Figma Make export. Content is the source of truth here.
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tags: string[];
  cardImage: string;
  context: string;
  role: string[];
  keyChallenge: string[];
  solution: string[];
  imagePlaceholders: string[];
  impact: string[];
  isExpectedImpact?: boolean;
}

export const projects: Project[] = [
  {
    id: 'design-system',
    title: 'Design system creation and maintenance',
    shortDescription: 'Building and maintaining a scalable design system in a fast-evolving B2B SaaS product.',
    tags: ['design system', 'b2b saas', 'accessibility', 'scalability'],
    cardImage: '/assets/94ce2e08b3ecabfaca27e9d47f6e6e1179d720d0.png',
    context: 'When I joined Bodyguard, there was no existing design system, no shared UI guidelines, and no Figma library. The product was already live and growing fast, which resulted in UI inconsistencies, duplicated components, and ad-hoc design decisions across features. Development teams already relied on their own implementation patterns, so introducing a design system meant working on an existing product rather than starting from a clean slate.',
    role: [
      'Defined design foundations: colors, typography, spacing, layout and core components',
      'Built the first Figma library from scratch and introduced shared patterns',
      'Introduced design tokens and variables to support light and dark modes',
      'Documented component usage, constraints and edge cases directly in Figma',
      'Worked closely with engineers to align design decisions with implementation constraints',
      'Continuously reviewed new features to limit custom components and control design debt over time'
    ],
    keyChallenge: [
      'Creating a design system while the product was already live and evolving, without slowing down feature delivery',
      'Avoiding the multiplication of one-off components under delivery pressure',
      'Maintaining consistency over time, not just at launch',
      'Aligning a Figma-based design system with an existing developer-side system',
      'Managing discrepancies between design and code, especially around color tokens, naming conventions and dark mode handling',
      'Deciding when a pattern should become part of the design system versus remain product-specific',
      'Supporting legacy UI that does not fully comply with the system yet, without triggering large refactors',
      'Keeping documentation up to date while being the sole designer on the product',
      'Bridging the design–development vocabulary gap to align mental models, not just visuals'
    ],
    solution: [
      'Built a structured, semantic color system based on accessibility constraints rather than purely visual palettes',
      'Defined design tokens and variables in Figma to support scalable theming (light and dark modes)',
      'Designed components to be flexible through slots, allowing variation without duplication',
      'Documented when to use and when not to use components to reduce misuse',
      'Adopted a progressive alignment strategy with engineering:',
      'Developers currently rely heavily on Tailwind-based color naming, which does not handle dark mode switching well',
      'As new features are shipped, implementation is progressively aligned with the design tokens defined in Figma',
      'Some discrepancies still exist today (notably in color naming and theme logic) and are handled incrementally rather than through a full refactor.'
    ],
    imagePlaceholders: [
      'Color system overview in Figma',
      'Accessibility testing showing color contrast validation on white and black backgrounds',
      'Figma variables setup for light and dark mode management',
      'Component page example showcasing slot usage',
      'Component page featuring the new glass icon system for features',
      'Modal content example with upsell integrated into slots',
      'Button component variants and states'
    ],
    impact: [
      'Improved UI consistency across the product',
      'Reduced design and development time by reusing shared patterns',
      'Established a common design language between Product, Design and Engineering',
      'Made design debt visible and manageable',
      'Built a scalable foundation that continues to evolve with the product'
    ]
  },
  {
    id: 'analytics-redesign',
    title: 'Analytics pages redesign',
    shortDescription: 'Redesigning underused analytics pages to make data actionable for non-expert users.',
    tags: ['analytics', 'data visualization', 'b2b saas'],
    cardImage: '/assets/15510500243fa299667336fe5c94183bb98f1773.png',
    context: 'This project was the first one I worked on when joining Bodyguard. Early user interviews quickly showed that analytics pages were barely used by customers. The main reason was that the data displayed was not relevant to their needs, hard to interpret, and not actionable. At the time, analytics relied on a single page with only four charts, offering a very limited and surface-level view of moderation performance. There was also no design system nor Figma library in place, which meant that both the analytics structure and all visual components had to be designed from scratch.',
    role: [
      'Conducted discovery with the Product Manager, including user interviews and usability testing',
      'Synthesised insights to identify real user questions and decision-making needs',
      'Led the redesign end-to-end, from problem framing to delivery',
      'Designed analytics structures, layouts, charts and interactions without relying on existing components',
      'Worked closely with Engineering during implementation, refinements and QA'
    ],
    keyChallenge: [
      'Turning an underused analytics page into a meaningful decision-making tool',
      'Designing analytics for non-expert users, without assuming data literacy',
      'Deciding what data should be surfaced, not just displaying what data was available',
      'Creating a scalable analytics structure without an existing design system',
      'Balancing clarity, density and performance constraints in data-heavy interfaces'
    ],
    solution: [
      'Rebuilt analytics around three distinct but connected pages, each answering different user needs:',
      'Overview analytics: a high-level recap bringing together the most important signals, such as message volume, moderation actions, global trends and overall distribution',
      'Message moderation analytics: detailed insights on moderation activity, including:',
      'distribution of messages by action (kept, auto-removed, manually removed)',
      'evolution of moderation actions over time',
      'breakdown of messages by classification (hateful, toxic, positive, neutral, etc.).',
      'Community analytics: insights focused on community behavior, including:',
      'most and least toxic posts or authors',
      'proportion of messages removed per post or per author',
      'recurring patterns and emerging community trends over time.',
      'Expanded analytics from four charts to a comprehensive set of dedicated visualisations per page',
      'Introduced a clear information hierarchy, starting with high-level KPIs and progressively revealing details',
      'Standardised chart behaviors, legends, tooltips and explanations to reduce misinterpretation',
      'Designed data visualisation components that later became the foundation of the design system',
      'Ensured consistency across light and dark modes'
    ],
    imagePlaceholders: [
      'Product team workshop during discovery phase',
      'User interview planning framework',
      'Figma mockup of the redesigned analytics page',
      'Data visualization components integrated into the design system',
      'High fidelity mockup in dark mode',
      'Analytics page before the redesign',
      'Current production view with the new design'
    ],
    impact: [
      'Transformed an unused page into a structured analytics system used for day-to-day decision-making',
      'Increased relevance and adoption of analytics features',
      'Enabled faster understanding of moderation performance and community dynamics',
      'Provided a scalable foundation for future analytics improvements and AI-driven insights'
    ]
  },
  {
    id: 'source-connection-funnel',
    title: 'Source connection funnel redesign',
    shortDescription: 'Simplifying complex social media source connection and reconnection flows.',
    tags: ['onboarding', 'flows', 'b2b saas'],
    cardImage: '/assets/8de8fc7eee6dfdc3f744a20a6d545a24cae72798.png',
    context: 'Connecting social media sources was one of the most complex and error-prone parts of the product. Each social network comes with its own permissions model, authentication flow and constraints, which often led to confusion, failed connections and a strong dependency on customer support. A major source of friction came from Meta platforms (Facebook / Instagram), where connection requirements are particularly strict: accounts must be professional, Instagram accounts must be linked to a Facebook page, and permissions vary depending on account ownership and role. These constraints were often poorly understood by users, resulting in repeated connection failures and frustration. User feedback consistently pointed to onboarding and error handling as the main pain points.',
    role: [
      'Led discovery through flow mapping, audits and workshops',
      'Analysed existing connection and reconnection scenarios across all supported social networks',
      'Designed end-to-end connection and reconnection journeys',
      'Defined copy, states and edge cases',
      'Delivered detailed specifications and collaborated closely with Engineering during implementation'
    ],
    keyChallenge: [
      'Designing a single funnel capable of handling multiple social networks with different rules',
      'Accounting for platform-specific constraints (especially Meta) without overloading the user',
      'Making permissions, prerequisites and ownership requirements understandable for non-expert users',
      'Reducing connection failures while keeping the flow scalable',
      'Handling both first-time connections and reconnections consistently'
    ],
    solution: [
      'Started with a full audit of each supported social network, mapping:',
      'authentication methods',
      'permission requirements',
      'ownership and role constraints',
      'common failure cases.',
      'Designed a source-agnostic, step-by-step funnel, while adapting content and logic dynamically based on the selected platform',
      'Clarified user intent early (new connection vs reconnection) to simplify decision paths',
      'Introduced explicit onboarding guidance for platforms with strong constraints, including:',
      'Meta-specific requirements (professional accounts, Facebook page linkage, permissions)',
      'contextual help and explanations at the right step.',
      'Standardised:',
      'states (loading, success, error, partial connection)',
      'copy and terminology',
      'error messages and recovery paths.',
      'Ensured the funnel worked consistently across light and dark modes'
    ],
    imagePlaceholders: [
      'Existing connection flow mapping three user scenarios to identify pain points and friction in the current funnel',
      'Redesigned user flow with milestone breakdown addressing identified issues from the existing funnel',
      'Low-fidelity interactive mockup built in Axure for user flow testing',
      'Complete screen overview in Figma organized by social network (also used as developer specs)',
      'High-fidelity screen rendered after low-fi validation',
      'Final implementation showing Instagram connection with page selection',
      'Dark mode version of the connection screen'
    ],
    impact: [
      'Significantly reduced dependency on customer support for source connection issues',
      'Clarified onboarding and troubleshooting for complex platforms like Meta',
      'Increased source connection conversion rate by 70%',
      'Improved overall onboarding experience and user confidence'
    ]
  },
  {
    id: 'roles-permissions',
    title: 'Roles and permissions',
    shortDescription: 'Designing a flexible and understandable access control system for growing organizations.',
    tags: ['iam', 'permissions', 'enterprise', 'b2b saas'],
    cardImage: '/assets/09e8081260d3acd8cf24205ac41bda26e4fb5b4e.png',
    context: 'When I joined Bodyguard, there was no roles and permissions system in place. All users were Admins by default, with unrestricted access to the product. As the customer base grew, organizations increasingly requested more control over who could access what, and who could do what. Each organization had very specific needs depending on their size, structure and workflows. In Bodyguard, data is organized around sources (for example: social media accounts such as Instagram, Facebook, TikTok, etc.). Access control therefore could not be limited to actions only (view, moderate, export…), but also had to cover which sources a user could access. This introduced additional complexity, especially when organizations wanted to restrict access to specific sources, manage permissions at a team level, and understand how team permissions and individual user permissions interact.',
    role: [
      'Led the project end to end, from early discovery to final delivery',
      'Collected requirements from multiple customer segments (brands, gaming studios, agencies)',
      'Designed the roles and permissions system from scratch',
      'Defined permission logic, including team-level permissions, user-level overrides and conflict rules',
      'Designed the user interface and interaction patterns',
      'Wrote detailed functional specifications for Engineering',
      'Produced client-facing documentation explaining how roles, teams and permissions work together',
      'Worked closely with Engineering throughout implementation, refinements and QA'
    ],
    keyChallenge: [
      'Moving from an all-admin model to a structured permission system without breaking existing usage',
      'Supporting very diverse organizational needs with a single, coherent system',
      'Managing permissions at multiple levels (organization roles, teams, users and sources)',
      'Handling conflicts between team permissions and user-specific permissions in a predictable way',
      'Making a technically complex system understandable for non-expert users',
      'Translating abstract permission rules into clear, actionable specifications for Engineering',
      'Ensuring every part of the product behaves consistently depending on user rights'
    ],
    solution: [
      'Introduced organization roles to define high-level action permissions',
      'Added teams to manage access at scale:',
      'teams can be granted access to specific sources',
      'teams can define which actions are allowed on those sources.',
      'Allowed user-level permissions to refine or override team access when needed',
      'Defined clear precedence and conflict resolution rules so users always understand which permission applies',
      'From a delivery and specification perspective:',
      'Defined explicit behaviors for each dashboard component depending on permissions',
      'Specified how components should react when access is restricted:',
      'hidden',
      'disabled or greyed out',
      'visible but read-only',
      'blocked with explanatory messaging.',
      'Documented edge cases to avoid ambiguous interpretations during development',
      'To make the system understandable for users:',
      'Designed guardrails, warnings and explanations directly in the interface',
      'Made system behavior explicit through inline helper text, permission summaries and warning messages',
      'Delivered clear, client-facing documentation aligned with the UI.'
    ],
    imagePlaceholders: [
      'Product team workshop during discovery phase',
      'Requirements gathering from different client segments by industry (brands, gaming studios, agencies)',
      'Initial ideation and mapping of roles and permissions structure',
      'Frontend specifications defining which UI elements and components are affected by each permission',
      'High fidelity mockups validated after low fidelity review',
      'Specification mockups documenting edge cases and permission constraints',
      'User interface showing granular source access rights per user',
      'Warning messages displayed to users when permission constraints apply',
      'Client-facing documentation providing transparency on roles and access rights'
    ],
    impact: [
      'Replaced an all-admin setup with a robust, scalable access control system',
      'Enabled organizations to manage access by teams, users, sources and actions',
      'Improved security and reduced risk of misuse',
      'Reduced configuration errors and support requests',
      'Provided Engineering with clear, unambiguous specifications',
      'Made a complex permission model understandable for non-technical users'
    ]
  },
  {
    id: 'audience-intelligence',
    title: 'Audience intelligence - AI integration',
    shortDescription: 'Integrating AI into analytics to turn large datasets into actionable insights.',
    tags: ['ai', 'analytics', 'b2b saas'],
    cardImage: '/assets/b8f618534e4fc08aefcc5d9e05fbbf844d0879c5.png',
    context: 'Users had access to large volumes of data (messages, moderation results, analytics), but struggled to extract meaningful insights efficiently. Recurring analytical questions such as "What are people talking about?", "What is driving toxicity?" or "How is this campaign perceived?" were either unanswered or required time-consuming manual analysis. The goal was to integrate AI directly into the product, in a way that supports real decision-making rather than acting as a generic chatbot.',
    role: [
      'Led discovery through user interviews to understand recurring analytical questions',
      'Designed the end-to-end AI experience, from entry points to outputs',
      'Iterated on interaction models and information hierarchy',
      'Worked closely with Product, Data and Engineering throughout the project',
      'Designed both static and interactive prototypes using Figma Make to validate flows and behaviors'
    ],
    keyChallenge: [
      'Integrating AI in a way that feels useful, trustworthy and grounded in product data',
      'Avoiding a chatbot experience disconnected from existing analytics',
      'Helping non-expert users ask the right questions',
      'Balancing guided experiences with flexibility',
      'Iterating progressively based on usage and feedback'
    ],
    solution: [
      'The project evolved through multiple milestones, with continuous improvements based on real usage:',
      'Embedded Audience Intelligence directly inside analytics, ensuring answers always reflect the selected scope, filters and campaigns',
      'Introduced suggested questions to help users get started and understand AI capabilities',
      'Added custom questions, allowing users to ask their own questions in natural language.',
      'Over time, usage showed that custom questions were underused, mainly because suggested questions were surfaced first. The experience was therefore iterated to:',
      'Give more visibility to custom questions',
      'Reduce friction when asking follow-up questions',
      'Encourage exploration beyond predefined prompts.',
      'To validate these improvements, I designed an interactive side panel prototype using Figma Make, demonstrating how a static design could be translated into a realistic interactive experience: https://wok-queue-78907182.figma.site',
      'This prototype was used to test interaction flow, question hierarchy, feedback and loading states.'
    ],
    imagePlaceholders: [
      'Complete mockup overview organized in Figma',
      'Detailed Figma mockup variations and component states',
      'AI question panel interface for querying analytics data',
      'AI assistant panel showing guided and free-form question options',
      'Example of AI-generated response with structured insights and charts'
    ],
    impact: [
      'Reduced time needed to extract insights from large datasets',
      'Increased engagement with analytics and AI-powered features',
      'Improved adoption of custom questions through better visibility and interaction design',
      'Established a scalable foundation for future AI-driven product capabilities'
    ]
  },
  {
    id: 'navigation-redesign',
    title: 'Navigation redesign',
    shortDescription: 'Restructuring navigation to improve discoverability and scalability.',
    tags: ['information architecture', 'navigation', 'b2b saas', 'in progress'],
    cardImage: '/assets/5b1e2da07c27d1e013ec962a5c5a2bcbe7167a92.png',
    context: 'As the product grew, navigation gradually became fragmented and harder to understand. New features were added over time without a global navigation rethink, which made discoverability and onboarding increasingly difficult, especially for new users. The existing navigation relied heavily on unlabeled icons and a flat structure, limiting scalability and making it harder for users to build a clear mental model of the product. This project was initiated to anticipate future growth rather than only fixing immediate issues.',
    role: [
      'Audited the existing navigation and information architecture',
      'Analysed usage patterns and navigation-related feedback',
      'Explored alternative navigation models aligned with user mental models',
      'Designed early navigation structures and interaction patterns',
      'Worked closely with Product and Engineering to validate feasibility and constraints'
    ],
    keyChallenge: [
      'Rethinking navigation without disrupting existing user habits',
      'Designing a structure that supports both current features and future ones',
      'Balancing simplicity with scalability',
      'Making navigation understandable without relying solely on icons',
      'Ensuring consistency across light and dark modes',
      'Designing navigation while still in a discovery phase, with evolving assumptions'
    ],
    solution: [
      'This project is currently in the discovery and exploration phase.',
      'Conducted a structural audit of the existing navigation and feature grouping',
      'Explored multiple navigation patterns (flat vs multi-level, icon-based vs label-based)',
      'Proposed a clearer hierarchy with reduced nesting and better grouping of core areas',
      'Clarified the separation between main product domains (analytics, moderation, settings, etc.)',
      'Designed a consistent side navigation system applicable across the product',
      'Tested the proposed navigation by applying it to existing screens (analytics, author profile, etc.) to validate scalability and coherence'
    ],
    imagePlaceholders: [
      'Current navigation with unlabeled icons and single-level hierarchy limiting product scalability',
      'Early ideation and exploration of navigation patterns and structures',
      'Proposed navigation redesign with multi-level hierarchy accommodating future features',
      'Navigation system applied across all existing pages and features to validate feasibility',
      'Navigation integration example within the analytics page context',
      'Navigation integration example within the author profile page context'
    ],
    impact: [
      'Improved feature discoverability',
      'Reduced cognitive load, especially for new users',
      'Faster onboarding and better understanding of the product structure',
      'Stronger foundation for future feature expansion'
    ],
    isExpectedImpact: true
  },
  {
    id: 'alerting-management',
    title: 'Alerting management',
    shortDescription: 'Designing a self-service alerting system to replace manual, developer-coded alerts.',
    tags: ['alerts', 'rules', 'b2b saas', 'in progress'],
    cardImage: '/assets/2094ca8acc372c2e2acdc12f430cf514253dd1cf.png',
    context: 'Alerts were a critical feature for customers, but not configurable by users. Each alert had to be manually coded by developers when requested by a client, making the system slow, costly and not scalable. As the product matured, customers increasingly wanted to monitor specific situations, be notified when thresholds were reached, and adapt alerts to their own workflows. However, alert logic was complex and most users were not technical. The main risk was letting users create alerts without understanding what they were actually building.',
    role: [
      'Led discovery in close collaboration with Product and Engineering',
      'Analysed existing alerts, client requests and support feedback',
      'Designed the end-to-end alerting experience (flows, rules, UI)',
      'Defined interaction patterns, edge cases and error states',
      'Wrote detailed functional specifications to prepare the development phase',
      'Worked with Engineering to validate feasibility and performance constraints'
    ],
    keyChallenge: [
      'Enabling non-technical users to create rule-based alerts',
      'Avoiding alert spam and notification fatigue',
      'Helping users understand what an alert rule means in practice',
      'Making complex rule logic understandable without oversimplifying it',
      'Designing a system that scales across alert types and channels',
      'Producing clear specifications so the feature could safely enter development'
    ],
    solution: [
      'Designed a progressive rule creation flow, guiding users step by step',
      'Framed alert creation around user intent rather than technical conditions',
      'Introduced a historical preview showing:',
      'how many alerts would have been triggered in the past',
      'when and how often they would have fired.',
      'Used the preview as a learning and validation tool so users do not configure alerts blindly',
      'Added noise detection and warnings when rules are likely to generate excessive alerts',
      'Provided contextual explanations directly in the interface to clarify thresholds, conditions and outcomes',
      'Designed alert outputs (emails and notifications) with clear context and actionable information',
      'This project is now entering the development phase, with specifications and edge cases fully defined.'
    ],
    imagePlaceholders: [
      'High fidelity mockups overview of the alert creation interface',
      'High fidelity mockups showing empty states and first-time user experience',
      'Detailed specification mockups documenting interaction patterns and edge cases',
      'Warning system preventing alert fatigue when users configure high-frequency notifications',
      'Alert integration within email notifications showing context and actionable information',
      'Email template variations for different alert types and severity levels'
    ],
    impact: [
      'Removed dependency on developers for alert creation',
      'Reduced alert fatigue by helping users build meaningful rules',
      'Increased user confidence by making alert behavior explicit and predictable',
      'Enabled scalable alerting across customers with different needs'
    ],
    isExpectedImpact: true
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
export const projectGalleries: Record<string, string[]> = {
    'design-system': [
      '/assets/3bb53af15c2f962a1774d40d6d0f579ef4ba5d73.png',
      '/assets/12899f31eec6ad95799e138ee2bad04c738fede2.png',
      '/assets/77a92e53d5f4b6158681e50e606ed94d056d64bc.png',
      '/assets/5885a9f0401b5b056e013fba84cd4ccbc441d90e.png',
      '/assets/9f16eb02b6f352031f6040050d87139532ee00b7.png',
      '/assets/368822f72770654f1efce2816e0e8915ec01e134.png',
      '/assets/a31447237113f0ff99f902778a17f6116bd93979.png'
    ],
    'analytics-redesign': [
      '/assets/4b860e6ea0c8742607659d6b02c1f12a37633671.png',
      '/assets/d2286a8eba1fba0cd7b8e5eeea2ffa2cce7c19ba.png',
      '/assets/19a9c243b6f2a161c336b00daf276d30d58d80af.png',
      '/assets/45d056927ad4f78548f40ceff736678781295600.png',
      '/assets/01ffd1eb054b86973736598236715aa0aa176660.png',
      '/assets/46150102bd3aba6699c4089529a1224ff93db73b.png',
      '/assets/cd0338fa5635627e0f6fce37874628134211f882.png'
    ],
    'source-connection-funnel': [
      '/assets/374e64a8231efa792a03f36e836a51c2032dd1d6.png',
      '/assets/7566c84d2bb18939c23c1eb8efe75161f79127c8.png',
      '/assets/1f2f006070b77e5a4145ef9d45aa84a20f2af892.png',
      '/assets/5046449dc6bfb3555b0f8e0977de17ad8d90e6d0.png',
      '/assets/6925f1d14105c82c4460bac7cf30dba2571bfef7.png',
      '/assets/982c5a86b2a33ed6c1742801f7f24ea65e33578a.png',
      '/assets/00901549d201abb832a67f245cc539a826b1e957.png'
    ],
    'alerting-management': [
      '/assets/e2b1ea1d4818026b3341225658f8e2ad14b8a442.png',
      '/assets/426fcf1b64c5bdb4d8b3772310dde6b58d3413d1.png',
      '/assets/b790ef81c62241bb0444d1aab477d38224e974e6.png',
      '/assets/d79169a5c9101dd44cde16d8aac0ff724fcfbc34.png',
      '/assets/ea95a71933286d31baf99c1f5c3ec24988d31c7a.png',
      '/assets/b8d49787dd614f51cb6d999304e9b15376752bb7.png'
    ],
    'roles-permissions': [
      '/assets/5cfed4f4948c567c8ebb2017ecf4ec095feee2e5.png',
      '/assets/e507fa2fc5ed40eb027ca0e5742b631409d227a3.png',
      '/assets/8f5981e9c9c4c102fbc29e76d5c5670b95f72a7c.png',
      '/assets/36c94593e61b3252bd118d06bd1a12a17469c74e.png',
      '/assets/5c7aca361fcbd7ceb04afbde3498337ce883abe2.png',
      '/assets/bea80121c13f4bf32096353a62679697fea601d7.png',
      '/assets/fee0d58ff90b0b97b69bcd912e0a8c0f744fd3a0.png',
      '/assets/1ca1ecac88928db1c7dfecc268078cc8e9ab81c5.png',
      '/assets/414cd281a8a798fa10bbd693d4e8ceccadf762af.png'
    ],
    'audience-intelligence': [
      '/assets/b8e27c1cd9f8300c12be8c3fe4806d802ff8dbaa.png',
      '/assets/d7653de1743c1f4e096ff63603f8dc560419b5dd.png',
      '/assets/b8f618534e4fc08aefcc5d9e05fbbf844d0879c5.png',
      '/assets/9f19384cd4c752321f7e9ba6af3cc23d185147ac.png',
      '/assets/e9c17db9eb0d66741ee01a15458966567a045e17.png'
    ],
    'navigation-redesign': [
      '/assets/cc5fa6212089c718f875cfd4385f3b28cfccd5f7.png',
      '/assets/53db49c94684fcdcf5350bb1a2f700757c01497a.png',
      '/assets/5b1e2da07c27d1e013ec962a5c5a2bcbe7167a92.png',
      '/assets/30648858dc7289894edff9ac66d6b22977b3ab32.png',
      '/assets/0cc0e347d6e97eedeec98a9aa27b0359796cea8d.png',
      '/assets/d8c5a6fceff21141ff63cad5ed0d04bfa592a56c.png'
    ]
  };
