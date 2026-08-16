import {
  ExperienceItem,
  ExpertiseItem,
  ProjectItem,
  CareerMilestone,
  AiUseCase,
  SkillCategory,
  EducationItem,
  CertificationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Sivaram Seela',
  title: 'Senior DCS Architect & RF/Wireless Engineering Expert',
  eyebrow: 'RF • WIRELESS • RAILWAY COMMUNICATIONS • AI',
  heroHeadline: 'Engineering Connected Mobility.',
  heroSubheadline: 'RF & Wireless Architecture for the Future of Railway Communications',
  shortIntro:
    'Sivaram Seela is a Senior DCS Architect and RF/Wireless Engineering Expert with extensive experience in CBTC, train-to-ground communications, wireless system design, RF engineering and complex transportation communication architectures.',
  email: 'sivaramseela@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sivaramseela-94128913',
  linkedinDisplay: 'linkedin.com/in/sivaramseela-94128913',
  experienceYearsTotal: '25+',
  experienceYearsRailway: '11+',
  specializationRole: 'Sr DCS Architect',
  expertDesignation: 'World Class Expert',
};

export const CREDIBILITY_METRICS = [
  {
    value: '25+ Years',
    label: 'RF & Telecom Experience',
    description: 'Foundational microwave to modern digital wireless architectures',
  },
  {
    value: '11+ Years',
    label: 'Railway Communications',
    description: 'Mission-critical metro & mainline transportation networks',
  },
  {
    value: 'CBTC',
    label: 'Train-to-Ground Wireless',
    description: 'Safety-critical signalling & multi-media communication links',
  },
  {
    value: 'World Class Expert',
    label: 'Technical Architecture',
    description: 'System design authority, governance & standard compliance',
  },
];

export const CAREER_EVOLUTION: CareerMilestone[] = [
  {
    year: '2000–2007',
    title: 'RF & Microwave Engineering',
    subtitle: 'ECIL',
    description: 'Foundational microwave hardware, RF circuit design, and transmission analysis.',
    phase: 'Foundation',
  },
  {
    year: '2007–2010',
    title: 'Wireless Systems & WiMAX',
    subtitle: 'CDOT Alcatel',
    description: 'WiMAX CPE development and Wi-Fi / 700 MHz up/down converter technologies.',
    phase: 'Broadband Wireless',
  },
  {
    year: '2010–2015',
    title: 'Telecom & BTS Architecture',
    subtitle: 'Hydea • Ericsson • Wipro',
    description: 'MultiCarrier Power Amplifiers, BTS multi-band I&V, and RF system architecture.',
    phase: 'Telecom Systems',
  },
  {
    year: '2015–2018',
    title: 'Railway Communications',
    subtitle: 'Alstom',
    description: 'Wireless system design specifically engineered for metro train communications.',
    phase: 'Railway Integration',
  },
  {
    year: '2018–2024',
    title: 'CBTC & Train-to-Ground Architecture',
    subtitle: 'Alstom (N&T Project Architect)',
    description: 'CBTC & MM wireless design authority and mission-critical T2G communications.',
    phase: 'DCS Architecture',
  },
  {
    year: '2024–Present',
    title: 'Sr DCS Architect & AI Innovation',
    subtitle: 'Alstom (World Class Expert)',
    description: 'Senior DCS architectural leadership, complex T2G systems, and AI-enabled engineering workflows.',
    phase: 'Current Leadership',
  },
];

export const EXPERTISE_CARDS: ExpertiseItem[] = [
  {
    id: 'railway-comms',
    title: 'Railway Communications',
    description:
      'Mission-critical communications architecture for modern mass transit and rail networks.',
    bullets: [
      'Communication-Based Train Control (CBTC) wireless networks',
      'Train-to-Ground (T2G) communication system design',
      'Metro wireless networks (Wi-Fi, LTE/5G for rail)',
      'Integration with signalling & wayside subsystems',
    ],
    icon: 'TrainTrack',
    tag: 'Mission Critical',
  },
  {
    id: 'rf-engineering',
    title: 'RF Engineering',
    description:
      'Rigorous RF planning, electromagnetic propagation modeling, and performance optimization.',
    bullets: [
      'RF link budget calculations & margin analysis',
      'Tunnel & trackside propagation modeling',
      'Antenna systems, beamforming & leaky feeder design',
      'Interference mitigation & co-existence analysis',
    ],
    icon: 'Radio',
    tag: 'RF Physics',
  },
  {
    id: 'wireless-systems',
    title: 'Wireless Systems',
    description:
      'Broadband and cellular wireless technologies across public and dedicated private rail spectrums.',
    bullets: [
      'Industrial Wi-Fi (802.11a/b/g/n/ac/ax) in high-mobility environments',
      'LTE and private cellular broadband deployments',
      'WCDMA / 3G legacy & multi-carrier systems',
      'Seamless high-speed handover and roaming algorithms',
    ],
    icon: 'Wifi',
    tag: 'Protocols & PHY',
  },
  {
    id: 'network-architecture',
    title: 'Network Architecture',
    description:
      'End-to-end telecom design integrating trainborne networks with core wayside infrastructure.',
    bullets: [
      'Onboard train communication networks (TCMS, CCTV, PIS)',
      'Trackside gigabit fiber backbone infrastructure',
      'Core transport networks & QoS engineering',
      'Operations Control Centre (OCC) & SCADA integration',
    ],
    icon: 'Network',
    tag: 'End-to-End',
  },
  {
    id: 'systems-engineering',
    title: 'Systems Engineering',
    description:
      'Full lifecycle systems engineering, architectural governance, and safety assurance.',
    bullets: [
      'System requirements analysis & traceability (RAMS, CENELEC)',
      'Design authority & technical review board governance',
      'Verification & Validation (V&V) test planning',
      'Multi-subsystem interface definitions and integration',
    ],
    icon: 'Cpu',
    tag: 'Governance',
  },
  {
    id: 'ai-engineering',
    title: 'AI for Engineering',
    description:
      'Augmenting traditional RF and systems engineering with machine learning and intelligent diagnostics.',
    bullets: [
      'AI-assisted RF drive test & log analysis',
      'Automated RSSI / PER anomaly detection',
      'Engineering copilots for technical standards & documentation',
      'Predictive maintenance for trackside radio infrastructure',
    ],
    icon: 'Sparkles',
    tag: 'Emerging / AI',
  },
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    id: 'alstom-sr-dcs',
    company: 'Alstom',
    role: 'Sr DCS Architect',
    period: 'June 2024 – Present',
    focus: 'CBTC & MM wireless design, train-to-ground communication, World Class Expert, N&T Project Architect.',
    highlights: [
      'Serving as Senior DCS Architect and designated World Class Expert for railway communication systems.',
      'Leading architectural definition and technical governance for CBTC and Multi-Media (MM) wireless communications.',
      'Spearheading high-reliability train-to-ground wireless system specifications for global mass transit projects.',
      'Investigating modern AI & analytics workflows to enhance RF diagnostics and architectural engineering efficiency.',
    ],
    skills: ['CBTC Architecture', 'Train-to-Ground', 'World Class Expert', 'N&T Project Architecture', 'RF Governance'],
    isCurrent: true,
  },
  {
    id: 'alstom-nt-arch',
    company: 'Alstom',
    role: 'N&T Project Architect',
    period: 'June 2018 – May 2024',
    focus: 'CBTC & MM wireless system design and train-to-ground communications.',
    highlights: [
      'Engineered end-to-end Data Communication Subsystem (DCS) architectures for automated transit projects.',
      'Designed redundant train-to-ground wireless links with zero packet loss tolerances for signalling data.',
      'Conducted trackside RF surveys, coverage validation, and interface resolution with signalling and rolling stock.',
      'Coordinated technical design authority reviews across multidisciplinary international engineering teams.',
    ],
    skills: ['CBTC DCS', 'MM Wireless', 'Network Architecture', 'Trackside RF Design', 'System Verification'],
  },
  {
    id: 'alstom-wireless-design',
    company: 'Alstom',
    role: 'Wireless System Design',
    period: 'April 2015 – May 2018',
    focus: 'Wireless system design for metro train communications.',
    highlights: [
      'Developed detailed radio frequency coverage plans and link budgets for metro rail corridors.',
      'Selected and specified antenna topologies, trackside access points, and trainborne radio units.',
      'Optimized roaming performance for high-speed metro trainsets traversing tunnel and elevated alignments.',
    ],
    skills: ['Metro Wireless', 'RF Propagation', 'Link Budgets', 'Antenna Systems', 'High-Speed Handover'],
  },
  {
    id: 'wipro-rf-arch',
    company: 'Wipro Technologies',
    role: 'Architect (RF)',
    period: 'July 2011 – March 2015',
    focus: 'RF system architecture and wireless engineering design solutions.',
    highlights: [
      'Architected custom RF solutions for wireless and telecom clients.',
      'Collaborated on advanced transceiver architectures and broadband wireless interface designs.',
      'Provided deep domain expertise on RF performance optimization and interference mitigation.',
    ],
    skills: ['RF System Architecture', 'Telecom Solutions', 'Wireless System Design', 'Interference Analysis'],
  },
  {
    id: 'ericsson-iv',
    company: 'Ericsson',
    role: 'RF Engineer – I&V Team',
    period: 'July 2011 – January 2013',
    focus: 'Testing BTS systems operating in Bands II, IV and V.',
    highlights: [
      'Conducted rigorous Integration and Verification (I&V) on base station (BTS) transceivers.',
      'Validated multi-band RF performance, spectral purity, EVM, and power amplifier linearity.',
      'Executed automated test scripts and hardware-in-the-loop RF test suites.',
    ],
    skills: ['BTS Testing', 'Band II / IV / V', 'RF I&V', 'Spectral Analysis', 'Transceiver Verification'],
  },
  {
    id: 'hydea-rf',
    company: 'Hydea',
    role: 'Architect (RF)',
    period: 'May 2010 – July 2011',
    focus: 'Development of MultiCarrier Power Amplifier for BTS.',
    highlights: [
      'Led the RF development of high-efficiency MultiCarrier Power Amplifiers (MCPA) for BTS applications.',
      'Optimized digital predistortion (DPD) algorithms and RF power efficiency in high-linearity regimes.',
      'Managed component selection, thermal modeling, and intermodulation distortion mitigation.',
    ],
    skills: ['MultiCarrier Power Amplifier', 'BTS Architecture', 'RF Power Design', 'Linearization'],
  },
  {
    id: 'cdot-alcatel',
    company: 'CDOT Alcatel Research Centre',
    role: 'Technical Specialist (RF)',
    period: 'November 2007 – April 2010',
    focus: 'WiMAX CPE development and Wi-Fi/700 MHz up/down converter technology.',
    highlights: [
      'Developed Customer Premises Equipment (CPE) RF modules for WiMAX broadband wireless standards.',
      'Designed frequency conversion systems including Wi-Fi to 700 MHz band up/down converters.',
      'Implemented front-end filtering, low-noise amplification, and local oscillator synthesis.',
    ],
    skills: ['WiMAX CPE', '700 MHz Converter', 'Up/Down Converters', 'Wi-Fi Systems', 'RF Frontend Design'],
  },
  {
    id: 'ecil-rf',
    company: 'Electronics Corporation of India Limited (ECIL)',
    role: 'Technical Officer – RF & Microwave Engineer',
    period: 'June 2000 – November 2007',
    focus: 'RF & microwave circuit engineering, antenna systems and radar/communications hardware.',
    highlights: [
      'Designed and characterized microwave components, transmission lines, passive filters, and couplers.',
      'Participated in field integration, microwave link commissioning, and antenna radiation pattern measurements.',
      'Built a foundational understanding of electromagnetic propagation and high-reliability defense/telecom hardware.',
    ],
    skills: ['Microwave Engineering', 'Antenna Systems', 'Transmission Lines', 'RF Instrumentation', 'Field Commissioning'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'train-to-ground-wireless',
    title: 'Train-to-Ground Wireless Architecture',
    category: 'railway',
    typeLabel: 'Production Architecture',
    problem:
      'High-speed trains navigating tunnels and viaducts require continuous, ultra-low-latency communication links with trackside infrastructure without experiencing packet drops during rapid access point transitions.',
    approach:
      'Engineered redundant dual-radio trainborne systems coupled with staggered trackside directional access points. Utilized optimized antenna spacing, overlapping Fresnel zones, and customized QoS mapping to prioritize safety packets over telemetry streams.',
    technologies: [
      'CBTC Wireless DCS',
      'Industrial Wi-Fi / LTE',
      'Overlapping Fresnel Zones',
      'Fast BSS Transition',
      'QoS Policy Mapping',
    ],
    outcome:
      'Established a resilient, fault-tolerant wireless pipeline delivering uninterrupted telemetry and control signals across extreme railway operating environments.',
    metrics: [
      { label: 'Packet Reliability', value: '99.999%' },
      { label: 'Handover Latency', value: '< 25ms' },
    ],
  },
  {
    id: 'cbtc-wireless-communication',
    title: 'CBTC Wireless Communication System',
    category: 'railway',
    typeLabel: 'Production Architecture',
    problem:
      'Safety-critical Communications-Based Train Control (CBTC) systems demand strict adherence to CENELEC standards, deterministic packet delivery, and robust immunity against external ISM-band RF interference.',
    approach:
      'Architected end-to-end DCS communication channel featuring dual-independent radio paths (Redundant Network A & B), dedicated trackside leaky coaxial or directional antenna arrays, and dynamic RF channel planning to prevent co-channel interference.',
    technologies: [
      'CENELEC EN 50128/50129',
      'Redundant DCS Networks',
      'Leaky Coaxial / Yagi Arrays',
      'Interference Mitigation',
      'DCS Gateway Routers',
    ],
    outcome:
      'Enabled safe headway reductions and continuous automatic train protection (ATP/ATO) with zero single points of failure in the communication layer.',
    metrics: [
      { label: 'Architecture Topology', value: 'Dual 1+1 Redundant' },
      { label: 'Interference Margin', value: '+18 dB Protection' },
    ],
  },
  {
    id: 'rf-performance-analytics',
    title: 'RF Performance Analytics & Optimization',
    category: 'rf',
    typeLabel: 'Production Architecture',
    problem:
      'Identifying subtle RF degradation, packet error rate (PER) anomalies, and localized multipath nulls across tens of kilometers of track before they cause communications timeouts.',
    approach:
      'Developed structured methodology for correlated telemetry analysis: synchronizing train odometry, RSSI, SNR, PER, and retry count telemetry with precise spatial track coordinates.',
    technologies: [
      'Spatial RF Correlation',
      'RSSI / PER Diagnostics',
      'Multipath Profile Modeling',
      'Automated Log Parsing',
      'Spectrum Survey Validation',
    ],
    outcome:
      'Transformed raw test drive and operational radio logs into actionable maintenance alerts, pinpointing antenna misalignment or cable attenuation with meter-level precision.',
    metrics: [
      { label: 'Diagnostic Speedup', value: '4x Faster Triage' },
      { label: 'Spatial Accuracy', value: 'Sub-10m Localization' },
    ],
  },
  {
    id: 'ai-rf-copilot',
    title: 'AI RF Engineering Copilot & Anomaly Diagnostic',
    category: 'ai-simulation',
    typeLabel: 'Concept / Architecture Study',
    problem:
      'Modern railway wireless logs generate gigabytes of time-series RF telemetry daily. Manual review of handover failures and intermittent noise bursts requires days of specialized expert analysis.',
    approach:
      'Architected an intelligent conceptual framework leveraging time-series ML anomaly detectors for telemetry streams, cross-layer correlation engines, and LLM-assisted diagnostic reasoning to generate automated root-cause summaries for engineering teams.',
    technologies: [
      'Machine Learning Anomaly Detection',
      'Cross-Layer RF Correlation',
      'Time-Series Feature Extraction',
      'LLM Engineering Summarization',
      'Knowledge Graph RAG',
    ],
    outcome:
      'Demonstrated how AI workflows can compress multi-hour log diagnostic tasks into seconds while auto-generating compliance-ready technical anomaly reports.',
    metrics: [
      { label: 'Study Status', value: 'Architecture Study' },
      { label: 'Target Scope', value: 'Automated Root-Cause' },
    ],
  },
  {
    id: 'railway-wireless-simulation',
    title: 'Railway Wireless Coverage & AP Spacing Simulation',
    category: 'ai-simulation',
    typeLabel: 'Concept / Architecture Study',
    problem:
      'Planning trackside access point count and exact mounting coordinates across complex alignments (curves, cuttings, tunnels) involves high simulation overhead and complex link margin equations.',
    approach:
      'Formulated an algorithmic model computing required AP spacing based on EIRP, antenna gains, receiver sensitivity, safety fade margins, and specific path-loss exponents for open-air vs tunnel geometries.',
    technologies: [
      'RF Link Budget Modeling',
      'Path Loss Exponent Estimation',
      'Tunnel Waveguide Modes',
      'Antenna Pattern Synthesis',
      'Track Geometry Mapping',
    ],
    outcome:
      'Provided a rapid parametric framework for early-phase railway infrastructure planning, minimizing over-provisioning while guaranteeing strict safety link margins.',
    metrics: [
      { label: 'Study Type', value: 'Simulation Study' },
      { label: 'Parametric Model', value: 'Multi-Environment Path Loss' },
    ],
  },
];

export const AI_USE_CASES: AiUseCase[] = [
  {
    id: 'automated-rf-logs',
    title: 'Automated RF Log Analysis',
    category: 'Telemetry Intelligence',
    description:
      'Ingesting raw trainborne and trackside radio logs to automatically parse framing, identify handover transitions, and flag signal degradation.',
    impact: 'Replaces manual CSV/Wireshark timeline matching with automated event reconstruction.',
  },
  {
    id: 'rssi-per-anomaly',
    title: 'RSSI / PER Anomaly Detection',
    category: 'ML Signal Analytics',
    description:
      'Training unsupervised anomaly detectors on baseline RF profiles to catch localized fading, antenna degradation, or intermittent coax faults.',
    impact: 'Detects component wear before communication dropouts trigger train emergency braking.',
  },
  {
    id: 'cross-layer-correlation',
    title: 'RF vs. Network-Layer Correlation',
    category: 'Cross-Layer Diagnostics',
    description:
      'Correlating Layer 1/2 RF metrics (RSSI, SNR, MCS rate) with Layer 3/4 packet loss, jitter, and CBTC application-layer heartbeat timeouts.',
    impact: 'Instantly disambiguates whether a train delay was caused by RF loss, switch routing, or application delay.',
  },
  {
    id: 'predictive-fault',
    title: 'Predictive Fault Identification',
    category: 'Predictive Maintenance',
    description:
      'Analyzing seasonal and temperature-dependent drift in trackside antenna parameters to forecast failures before they cause operational halts.',
    impact: 'Enables proactive trackside maintenance during non-revenue night maintenance windows.',
  },
  {
    id: 'automated-engineering-reports',
    title: 'Automated Engineering Reports',
    category: 'Generative Automation',
    description:
      'Leveraging LLMs trained on engineering domain schemas to summarize multi-site drive test campaigns into structured, client-ready compliance reports.',
    impact: 'Reduces report generation time from days to minutes while maintaining strict technical rigor.',
  },
  {
    id: 'knowledge-assistants',
    title: 'Engineering Knowledge Assistants',
    category: 'Domain Copilots',
    description:
      'Retrieval-Augmented Generation (RAG) over railway standards (IEEE 1474, CENELEC EN 50159, AREMA) and system design documentation.',
    impact: 'Accelerates requirements decomposition and ensures rapid compliance verification across project phases.',
  },
  {
    id: 'rf-design-optimization',
    title: 'RF Design & AP Spacing Optimization',
    category: 'Optimization Algorithms',
    description:
      'Using genetic algorithms and surrogate ML models to optimize antenna beam angles, power levels, and trackside AP locations along complex track topography.',
    impact: 'Minimizes equipment counts and civil works costs while preserving required +15dB link fade margins.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'RF & Wireless Engineering',
    subtitle: 'Physical layer, propagation & wireless protocols',
    skills: [
      { name: 'RF Engineering' },
      { name: 'RF Propagation & Link Budgets' },
      { name: 'Antenna Systems & Radiation Patterns' },
      { name: 'Interference Analysis & Co-existence' },
      { name: 'Wi-Fi (802.11 a/b/g/n/ac/ax)' },
      { name: 'LTE & Dedicated Rail Spectrum' },
      { name: 'WCDMA / 3G Multi-Band' },
      { name: 'WiMAX / Broadband Fixed Wireless' },
      { name: 'MultiCarrier Power Amplifiers (MCPA)' },
      { name: 'RF Integration & Verification (I&V)' },
    ],
  },
  {
    title: 'Railway Communications',
    subtitle: 'Signalling integration & transit wireless architectures',
    skills: [
      { name: 'CBTC Wireless DCS Architecture' },
      { name: 'Train-to-Ground (T2G) Systems' },
      { name: 'Metro Wireless Networks' },
      { name: 'High-Speed Handover Optimization' },
      { name: 'Redundant Network A/B Topologies' },
      { name: 'Trackside & Onboard Radio Units' },
      { name: 'Leaky Coaxial Cable / Tunnel RF' },
      { name: 'Signalling (ATP / ATO) DCS Interface' },
    ],
  },
  {
    title: 'Architecture & Systems Engineering',
    subtitle: 'End-to-end system design & technical governance',
    skills: [
      { name: 'System Architecture Definition' },
      { name: 'Network Architecture & QoS Engineering' },
      { name: 'Technical Design Authority' },
      { name: 'Systems Engineering & Requirements' },
      { name: 'End-to-End System Integration' },
      { name: 'Operations Control Centre (OCC) Integration' },
      { name: 'CENELEC / Transit Standards Compliance' },
      { name: 'World Class Expert Governance' },
    ],
  },
  {
    title: 'AI & Digital Engineering',
    subtitle: 'Innovation & technical exploration',
    skills: [
      { name: 'AI-Assisted RF Analytics', isEmerging: true },
      { name: 'Machine Learning Anomaly Detection', isEmerging: true },
      { name: 'LLM Applications for Engineering', isEmerging: true },
      { name: 'Automated Log Triage & Root Cause', isEmerging: true },
      { name: 'Engineering Copilot Workflows', isEmerging: true },
      { name: 'Parametric RF Simulation', isEmerging: true },
      { name: 'Knowledge Synthesis & RAG', isEmerging: true },
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'ME – Digital Electronics and Communications',
    institution: 'Osmania University',
    period: '2002 – 2005',
    details: 'Advanced studies in digital signal processing, modern communication systems, and high-frequency electronics.',
  },
  {
    degree: 'BE – Electronics & Communication Engineering',
    institution: 'Andhra University',
    period: '1994 – 1999',
    details: 'Comprehensive foundational curriculum in electromagnetic theory, analog/digital circuits, microwave engineering, and telecommunications.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'AI Tools Workshop',
    category: 'AI & Digital Engineering',
  },
  {
    title: 'Ethics & Compliance: Working With External Third Parties',
    category: 'Professional & Corporate Governance',
  },
];
