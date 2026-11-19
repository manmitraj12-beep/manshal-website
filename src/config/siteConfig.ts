export type ProjectFilterTag =
  | 'Client Projects'
  | 'Web Development'
  | 'AI & Machine Learning'
  | 'Academic & Technical Projects';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterTags: ProjectFilterTag[];
  projectType: 'client' | 'web' | 'ml_academic' | 'concept';
  typeBadge: string;
  shortDescription: string;
  detailedOverview: string;
  keyDeliverables: string[];
  technologies: string[];
  screenshotUrl: string;
  domainPreviewLabel: string;
  /**
   * Optional live deployment URL. Leave empty ("") until ready.
   */
  liveUrl?: string;
  /**
   * Optional GitHub repository URL.
   */
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Globe' | 'Code2' | 'Smartphone' | 'ShoppingBag' | 'Cpu' | 'RefreshCw';
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillGroup {
  category: string;
  subtitle: string;
  items: string[];
}

export const SITE_CONFIG = {
  brand: {
    name: 'MANSHAL',
    tagline: 'Building Digital Experiences That Grow Businesses.',
    positioning:
      'MANSHAL is a growing technology and digital solutions brand focused on helping businesses, startups, educational institutions and entrepreneurs transform their ideas into professional digital products.',
    markets: 'Serving clients across India and internationally.',
    logos: {
      horizontalDark: '/assets/logo/manshal-logo-dark.png',
      horizontalOriginal: '/assets/logo/manshal-logo-original.jpg',
      iconOnly: '/assets/logo/manshal-icon.png',
    },
    colors: {
      midnightNavy: '#0B1220',
      deepBackground: '#070B14',
      electricBlue: '#2563EB',
      cyan: '#06B6D4',
      white: '#FFFFFF',
      secondaryText: '#A1AAB8',
    },
  },

  /**
   * VERIFIED FOUNDER INFORMATION
   * Managed centrally. Set `photoUrl` (e.g., '/assets/founder/manmit-raj.jpg')
   * when you upload your real founder photograph. While empty, an elegant
   * MANSHAL-branded "MR" portrait placeholder is rendered.
   */
  founder: {
    name: 'Manmit Raj',
    initials: 'MR',
    position: 'Founder & Developer',
    fullTitle: 'Founder & Developer, MANSHAL',
    education: 'B.Tech Computer Science and Engineering (AI & ML)',
    educationBadge: 'B.Tech – Computer Science and Engineering (AI & ML)',
    photoUrl: '', // Add path e.g. '/assets/founder/manmit-raj.jpg' when ready
    shortSummary:
      'B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, passionate about software development, modern web technologies and building practical digital solutions.',
    quote:
      'I believe technology becomes powerful when it solves real problems. My journey combines computer science, software development, machine learning and entrepreneurship. Through MANSHAL, I aim to create meaningful digital products while continuously learning, experimenting and improving.',
    bioParagraphs: [
      "Hello, I'm Manmit Raj, the founder of MANSHAL and a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning.",
      'I am passionate about software development, modern web technologies, artificial intelligence and building practical digital solutions.',
      'Through MANSHAL, I work on transforming business ideas into professional websites, applications and technology-driven solutions.',
      'Alongside my academic journey, I actively develop real-world projects, explore emerging technologies and continuously improve my development skills.',
    ],
    developmentInterests: [
      'Full-Stack Web Development',
      'Modern React & TypeScript Interfaces',
      'Custom Software Architecture',
      'Responsive UI/UX Systems',
    ],
    mlInterests: [
      'Machine Learning Fundamentals',
      'Autoencoder & Neural Architectures',
      'TensorFlow & Keras Experimentation',
      'Data Preprocessing & Representation Learning',
    ],
    socials: {
      linkedin: 'https://www.linkedin.com/in/manmitraj-raj-b859b5396/',
      github: 'https://github.com/manmitraj12-beep',
    },
    leadership: [
      {
        name: 'Shailesh Sir',
        position: 'Partner, MANSHAL',
        additionalDesignation: 'Founder of Sky Group of Education',
        phone: '8873302064',
        contactType: 'Calling only',
      },
      {
        name: 'Manmit Raj',
        position: 'Founder & Developer, MANSHAL',
        additionalDesignation: '',
        phone: '9014792021',
        contactType: 'Calling only',
      },
    ],
    businessRegistration: {
      udyamNumber: 'UDYAM-BR-0090291',
    },
  },

  /**
   * VERIFIED OFFICIAL CONTACT & FORM CONFIGURATION
   */
  contact: {
    founderName: 'Manmit Raj',
    email: 'manmitraj12@gmail.com',
    mobile: '9014792021',
    mobileFormatted: '+91 9014792021',
    whatsappNumber: '919014792021',
    whatsappDisplay: '+91 9014792021',
    whatsappPrefilledText:
      "Hello Manmit, I visited the MANSHAL website and would like to discuss a project.",

    /**
     * Form backend endpoint (e.g., Formspree URL "https://formspree.io/f/your_id" or custom API route).
     * While empty (""), the form never shows a fake submission success alert; instead it validates
     * inputs and lets the visitor dispatch their structured enquiry directly via Email or WhatsApp.
     */
    formEndpoint: '',

    socials: {
      linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/manmitraj-raj-b859b5396/',
        label: 'Connect with Manmit Raj on LinkedIn',
      },
      github: {
        name: 'GitHub',
        url: 'https://github.com/manmitraj12-beep',
        label: 'View Manmit Raj on GitHub',
      },
    },
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'About', href: '#about' },
    { label: 'Founder', href: '#founder' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    heading: 'Building Digital Experiences That Move Businesses Forward.',
    description:
      'From professional websites to intelligent applications, MANSHAL transforms ideas into modern digital solutions designed to help businesses grow.',
    primaryCta: {
      label: 'Explore Our Work',
      href: '#portfolio',
    },
    secondaryCta: {
      label: 'Start a Project',
      href: '#contact',
    },
    floatingLabels: [
      'Web Systems',
      'Custom Applications',
      'AI & Digital Innovation',
    ],
  },

  introduction: {
    heading: 'Technology Meets Creativity. Ideas Become Reality.',
    description:
      'We combine modern design, software development and intelligent technology to build useful digital experiences for businesses and individuals.',
    highlights: [
      {
        title: 'Creative Thinking',
        description:
          'Purposeful interface design, clear visual hierarchy and refined user journeys tailored to your brand identity.',
      },
      {
        title: 'Smart Technology',
        description:
          'Modern, maintainable frontend and backend architectures engineered for speed, usability and cross-device reliability.',
      },
      {
        title: 'Business-Focused Solutions',
        description:
          'Every feature and interaction is built around practical utility—helping organizations communicate clearly and serve their audience.',
      },
    ],
  },

  services: {
    heading: 'Solutions Built Around Your Ambition.',
    items: [
      {
        id: 'website-development',
        title: 'Website Development',
        description:
          'Professional and responsive websites for businesses, brands and institutions.',
        iconName: 'Globe',
        highlights: ['Responsive Architecture', 'SEO-Ready Markup', 'Modern UI Systems'],
      },
      {
        id: 'custom-software-development',
        title: 'Custom Software Development',
        description:
          'Tailored software solutions designed around business requirements.',
        iconName: 'Code2',
        highlights: ['Custom Web Applications', 'Workflow Automation', 'Scalable Foundations'],
      },
      {
        id: 'mobile-application-development',
        title: 'Mobile Application Development',
        description:
          'Modern mobile applications with user-friendly experiences.',
        iconName: 'Smartphone',
        highlights: ['Cross-Device Ready', 'Intuitive UX Flows', 'Smooth Performance'],
      },
      {
        id: 'ecommerce-development',
        title: 'E-commerce Development',
        description:
          'Online shopping platforms and digital commerce solutions.',
        iconName: 'ShoppingBag',
        highlights: ['Product Catalogs', 'Streamlined Checkout', 'Storefront Management'],
      },
      {
        id: 'ai-machine-learning',
        title: 'AI & Machine Learning',
        description:
          'Practical intelligent solutions using machine learning, data and modern AI technologies.',
        iconName: 'Cpu',
        highlights: ['Model Experimentation', 'Intelligent Workflows', 'Data-Driven Tools'],
      },
      {
        id: 'website-redesign-maintenance',
        title: 'Website Redesign & Maintenance',
        description:
          'Modernization, performance improvements and ongoing website support.',
        iconName: 'RefreshCw',
        highlights: ['UI/UX Modernization', 'Speed Optimization', 'Ongoing Technical Support'],
      },
    ] as ServiceItem[],
    additionalDomains: [
      'Custom Web Applications',
      'Educational Technology',
      'IT Solutions & Digital Transformation',
    ],
  },

  /**
   * PORTFOLIO / SELECTED WORK
   * Clearly distinguishes completed client projects, academic ML work, and IoT concepts.
   */
  projects: {
    heading: 'Selected Work. Real Digital Experiences.',
    filterCategories: [
      'All Projects',
      'Client Projects',
      'Web Development',
      'AI & Machine Learning',
      'Academic & Technical Projects',
    ] as const,
    items: [
      {
        id: 'counselling-website',
        title: 'Counselling Website',
        category: 'Completed Client Project',
        filterTags: ['Client Projects', 'Web Development'],
        projectType: 'client',
        typeBadge: 'Completed Client Project',
        shortDescription:
          'A professional counselling website designed to present services and provide visitors with an easy way to enquire.',
        detailedOverview:
          'Developed and delivered as a real client project. The website presents counselling programs clearly, establishes a calm and trustworthy online presence, and provides visitors with a straightforward enquiry workflow across mobile and desktop devices.',
        keyDeliverables: [
          'Responsive multi-section counselling website',
          'Clear presentation of counselling services & guidance pathways',
          'Accessible visitor enquiry and consultation contact flow',
          'Mobile-optimized layout and clean typography',
        ],
        technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
        screenshotUrl: '/assets/projects/counselling-project-preview.svg',
        domainPreviewLabel: 'counselling-website // Completed Client Project',
        liveUrl: '',
      },
      {
        id: 'business-website',
        title: 'Business Website',
        category: 'Client / Business Project',
        filterTags: ['Client Projects', 'Web Development'],
        projectType: 'client',
        typeBadge: 'Client / Business Project',
        shortDescription:
          'A professional business website developed to improve online presence and present business information.',
        detailedOverview:
          'Built to establish a credible digital storefront and corporate profile. Focuses on structured service presentation, fast page loads, responsive layouts, and direct client enquiry channels.',
        keyDeliverables: [
          'Professional brand-aligned landing and overview sections',
          'Structured presentation of core business offerings',
          'Direct email and WhatsApp enquiry integration',
          'Cross-device compatibility across desktop, tablet and mobile',
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
        screenshotUrl: '/assets/projects/business-project-preview.svg',
        domainPreviewLabel: 'business-website // Client Project',
        liveUrl: '',
      },
      {
        id: 'other-web-development-projects',
        title: 'Modern Web Applications & Interfaces',
        category: 'Web Development',
        filterTags: ['Web Development'],
        projectType: 'web',
        typeBadge: 'Web Development',
        shortDescription:
          'Additional completed websites and web application interfaces built with modern frontend frameworks and reusable component systems.',
        detailedOverview:
          'A collection of web development work exploring educational technology interfaces, responsive dashboards, and interactive web applications engineered with clean, maintainable code.',
        keyDeliverables: [
          'Reusable React component architecture',
          'Responsive dashboard and web portal interfaces',
          'Clean state management and interactive UI flows',
          'Modern dark and high-contrast visual systems',
        ],
        technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
        screenshotUrl: '/assets/projects/webapp-project-preview.svg',
        domainPreviewLabel: 'web-development // Applications',
        liveUrl: '',
        githubUrl: 'https://github.com/manmitraj12-beep',
      },
      {
        id: 'autoencoder-bottleneck-analysis',
        title: 'Autoencoder Bottleneck Analysis',
        category: 'Academic / Machine Learning Project',
        filterTags: ['AI & Machine Learning', 'Academic & Technical Projects'],
        projectType: 'ml_academic',
        typeBadge: 'Academic / ML Project',
        shortDescription:
          'An academic machine learning project exploring autoencoder architecture, bottleneck representations and reconstruction using the Fashion-MNIST dataset with TensorFlow and Keras.',
        detailedOverview:
          'Conducted as an academic machine learning study investigating how latent bottleneck dimensions impact feature compression and image reconstruction fidelity on the Fashion-MNIST dataset using deep autoencoder models built in Python with TensorFlow and Keras.',
        keyDeliverables: [
          'Encoder-bottleneck-decoder neural network design in Keras',
          'Latent space compression experiments across bottleneck sizes',
          'Data preprocessing and normalization on Fashion-MNIST',
          'Reconstruction loss evaluation and visual comparison',
        ],
        technologies: ['Python', 'TensorFlow', 'Keras', 'Fashion-MNIST'],
        screenshotUrl: '/assets/projects/autoencoder-project-preview.svg',
        domainPreviewLabel: 'ml-research // autoencoder-fashion-mnist',
        githubUrl: 'https://github.com/manmitraj12-beep',
      },
      {
        id: 'smart-railway-linen-theft-alert',
        title: 'Smart Railway Linen Theft Alert',
        category: 'Technical / IoT Project Concept',
        filterTags: ['Academic & Technical Projects'],
        projectType: 'concept',
        typeBadge: 'Concept / Prototype',
        shortDescription:
          'An IoT-based concept exploring RFID identification and alert mechanisms for railway linen tracking.',
        detailedOverview:
          'Presented transparently as an exploratory technical/IoT concept and prototype design. The architecture explores embedding passive RFID tags in railway coach linen paired with doorway checkpoint readers to detect unauthorized removal and alert coach attendants.',
        keyDeliverables: [
          'RFID tag identification & coach inventory mapping concept',
          'Doorway checkpoint scanning workflow design',
          'Unauthorized exit detection & attendant alert logic',
          'Prototype system architecture for railway asset tracking',
        ],
        technologies: ['IoT Architecture', 'RFID Concept', 'C++ / Embedded Logic', 'System Design'],
        screenshotUrl: '/assets/projects/railway-iot-concept-preview.svg',
        domainPreviewLabel: 'iot-concept // railway-linen-rfid',
      },
    ] as ProjectItem[],
  },

  /**
   * TECHNOLOGIES & TECHNICAL SKILLS
   * Presented honestly as areas of experience and active learning (no fake percentages).
   */
  technologies: {
    heading: 'Technology, Creativity & Continuous Learning.',
    description:
      'A focused stack of programming languages, web frameworks, machine learning libraries and modern development tools used across our projects and academic exploration.',
    groups: [
      {
        category: 'Programming & Web Development',
        subtitle: 'Core languages and frontend technologies used to build responsive websites and applications.',
        items: [
          'C++',
          'Python',
          'JavaScript',
          'HTML',
          'CSS',
          'React',
          'Tailwind CSS',
        ],
      },
      {
        category: 'AI & Machine Learning',
        subtitle: 'Academic specialization and practical experimentation in neural networks and data modeling.',
        items: [
          'Machine Learning fundamentals',
          'TensorFlow',
          'Keras',
          'Fashion-MNIST',
          'Autoencoder architectures',
          'Data preprocessing and model experimentation',
        ],
      },
      {
        category: 'Development Tools & Platforms',
        subtitle: 'Version control, editors, AI-assisted development environments and deployment workflows.',
        items: [
          'Git',
          'GitHub',
          'VS Code',
          'Antigravity',
          'Vercel',
        ],
      },
    ] as SkillGroup[],
  },

  whyChooseUs: {
    heading: 'More Than Development. We Build Digital Value.',
    qualities: [
      {
        title: 'Modern and Responsive Design',
        description:
          'Interfaces crafted to look sharp and function seamlessly across widescreen desktops, tablets and smartphones.',
        iconName: 'Layout',
      },
      {
        title: 'Client-Focused Development',
        description:
          'We listen carefully to your goals and tailor every layout, workflow and technical choice to your actual requirements.',
        iconName: 'Users',
      },
      {
        title: 'Clean Development Practices',
        description:
          'Structured, maintainable code built with modern frameworks, semantic standards and attention to detail.',
        iconName: 'Code',
      },
      {
        title: 'Practical Digital Solutions',
        description:
          'Focused on real-world usability and clear value so your website or application genuinely helps your organization.',
        iconName: 'Layers',
      },
      {
        title: 'Clear Communication',
        description:
          'Direct, transparent updates directly with the founder at every stage of the project.',
        iconName: 'MessageSquare',
      },
      {
        title: 'Ongoing Technical Support',
        description:
          'Dependable post-launch assistance, updates and maintenance to keep your digital presence running smoothly.',
        iconName: 'ShieldCheck',
      },
    ],
  },

  process: {
    heading: 'From First Conversation to Final Launch.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: "Understand the client's goals and requirements.",
        deliverables: ['Requirement Analysis', 'Audience & Scope Alignment', 'Feature Roadmap'],
      },
      {
        number: '02',
        title: 'Strategize',
        description: 'Plan the design, structure and development approach.',
        deliverables: ['UI/UX Direction', 'Information Architecture', 'Technical Stack Selection'],
      },
      {
        number: '03',
        title: 'Develop',
        description: 'Build, test and refine the solution.',
        deliverables: ['Clean Engineering', 'Responsive Testing', 'Iterative Refinement'],
      },
      {
        number: '04',
        title: 'Launch',
        description: 'Deploy the final solution and provide support.',
        deliverables: ['Production Deployment', 'Performance Verification', 'Post-Launch Support'],
      },
    ] as ProcessStep[],
  },

  about: {
    heading: 'Small Beginnings. Ambitious Thinking. Smart Technology.',
    paragraphs: [
      'MANSHAL is a growing digital technology brand built around creativity, practical software development and modern innovation.',
      'Founded by Manmit Raj, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, MANSHAL focuses on building professional websites, software applications and technology-driven solutions.',
      'Our goal is to help businesses, startups and educational institutions turn their ideas into meaningful digital experiences.',
    ],
    focusAreas: [
      'Website & Web Application Development',
      'Custom Software & E-commerce Solutions',
      'Educational Technology & Digital Transformation',
      'AI & Machine Learning Exploration',
    ],
  },

  budgetOptions: [
    'Not sure yet / Let’s discuss',
    'Standard Website / Landing Page',
    'Custom Web Application / E-commerce',
    'AI / Machine Learning or Custom Software',
    'Website Redesign / Ongoing Maintenance',
  ],

  /**
   * ANALYTICS & CONVERSION TRACKING CONFIGURATION
   * Leave empty ('') until your real Google Analytics 4 Measurement ID or
   * Google Ads Conversion ID is ready. No dummy IDs are used.
   */
  analytics: {
    gaMeasurementId: '',
    googleAdsConversionId: '',
  },

  /**
   * PRIVACY POLICY & TERMS OF SERVICE (For Paid Ads & Lead Generation Compliance)
   */
  legal: {
    lastUpdated: 'November 2026',
    privacyPolicy: [
      {
        heading: '1. Information We Collect',
        body: 'When you submit a project enquiry through the MANSHAL website or contact us via Email, Phone, or WhatsApp, we collect only the information you voluntarily provide: your Full Name, Email Address, Mobile Number, Selected Service, Optional Budget Scope, and Project Description.',
      },
      {
        heading: '2. How We Use Your Information',
        body: 'Your contact and project details are used strictly to review your requirements, respond to your enquiry, prepare project proposals, and communicate with you regarding MANSHAL services. We never sell, rent, or trade your personal information to third parties.',
      },
      {
        heading: '3. Data Confidentiality & Security',
        body: 'All project ideas, business requirements, and contact details shared with MANSHAL are treated as confidential. Only authorized leadership (Manmit Raj and Shailesh Sir) access client enquiries.',
      },
      {
        heading: '4. Third-Party Services & Analytics',
        body: 'When you choose to contact us via WhatsApp (+91 9014792021) or your email provider (manmitraj12@gmail.com), your communication is transmitted through those respective platforms. If web analytics or form endpoint services are enabled, they process anonymized traffic or enquiry delivery strictly on our behalf.',
      },
      {
        heading: '5. Contact & Data Requests',
        body: 'You may request access to, correction of, or deletion of your enquiry details at any time by emailing manmitraj12@gmail.com or calling +91 9014792021.',
      },
    ],
    termsOfService: [
      {
        heading: '1. Overview & Services',
        body: 'MANSHAL provides website development, custom software development, mobile application development, e-commerce solutions, AI/ML exploration, and website redesign/maintenance services for clients in India and internationally.',
      },
      {
        heading: '2. Project Proposals & Scope',
        body: 'Submitting an enquiry through this website does not create a binding contract. Every project begins with a discovery discussion followed by a written scope of work, timeline, and milestone agreement mutually approved before development starts.',
      },
      {
        heading: '3. Intellectual Property',
        body: 'All MANSHAL branding, logos, and original website content on this site belong to MANSHAL. Portfolio items clearly distinguish completed client projects from independent academic and technical concept projects.',
      },
      {
        heading: '4. Direct Contact',
        body: 'For official project communications, please contact Founder & Developer Manmit Raj at manmitraj12@gmail.com or +91 9014792021, or Partner Shailesh Sir at +91 8873302064.',
      },
    ],
  },
};

/**
 * Safe conversion tracking helper.
 * Fires GA4 / Google Ads / GTM dataLayer events only when analytics is configured on the page.
 */
export function trackConversionEvent(
  eventName: 'generate_lead' | 'whatsapp_click' | 'phone_call_click' | 'email_click',
  params?: Record<string, string>
) {
  if (typeof window === 'undefined') return;
  const win = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  };
  if (typeof win.gtag === 'function') {
    win.gtag('event', eventName, params || {});
  } else if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({ event: eventName, ...params });
  }
}
