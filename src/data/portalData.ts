export type ProductModule = 'ats' | 'workforce' | 'procurewise';

export interface DataRegion {
  id: string;
  label: string;
  endpoint: string;
}

export interface ProductShowcase {
  id: ProductModule;
  name: string;
  shortLabel: string;
  portalSubtitle: string;
  headline: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface PipelineRecord {
  id: string;
  code: string;
  title: string;
  clientOrDept: string;
  owner: string;
  stage: 'Active' | 'Review' | 'Pending' | 'Closed';
  countMetric: number;
  countLabel: string;
  rateOrValue: string;
  updatedAt: string;
  location: string;
  notes: string;
}

export const HERO_WORKSPACE_IMAGE =
  '/src/assets/images/ceipal_hero_workspace_1795520930530.jpg';
export const RECRUITER_AVATAR_IMAGE =
  '/src/assets/images/avatar_recruiter_lead_1795520627236.jpg';
export const TESTIMONIAL_AVATAR_IMAGE =
  '/src/assets/images/avatar_testimonial_vp_1795520618604.jpg';

export const DEMO_CREDENTIALS = {
  email: 'priya.nair@meridianstaffing.com',
  password: 'CeipalDemo2026!',
  otp: '482910',
  displayName: 'Priya Nair',
  role: 'Director of Talent Delivery',
  org: 'Meridian Technical Staffing',
};

export const DATA_REGIONS: DataRegion[] = [
  { id: 'us-east', label: 'US East (Virginia)', endpoint: 'us1.ceipal.com' },
  { id: 'us-west', label: 'US West (Oregon)', endpoint: 'us2.ceipal.com' },
  { id: 'eu-central', label: 'EU Central (Frankfurt)', endpoint: 'eu1.ceipal.com' },
  { id: 'uk-london', label: 'UK (London)', endpoint: 'uk1.ceipal.com' },
  { id: 'ap-south', label: 'APAC (Mumbai)', endpoint: 'in1.ceipal.com' },
];

export const PRODUCT_SHOWCASES: Record<ProductModule, ProductShowcase> = {
  ats: {
    id: 'ats',
    name: 'Ceipal ATS',
    shortLabel: 'ATS',
    portalSubtitle: 'Sign in to Ceipal ATS to manage requisitions, sourcing, and placements.',
    headline: 'Total talent acquisition built for high-velocity recruiting teams.',
    description:
      'Unify job board sourcing, VMS distribution, automated candidate matching, and two-way recruiter communications in one secure workspace.',
    metrics: [
      { value: '42%', label: 'Faster time-to-submit across 1,800+ staffing teams in 6 months' },
      { value: '50+', label: 'Native job board, VMS, and enterprise email integrations' },
    ],
    testimonial: {
      quote:
        'Consolidating our VMS intake and recruiter submissions into Ceipal ATS cut average submittal turnaround from 14 hours to under 3 hours within one quarter.',
      author: 'Catherine Hale',
      role: 'VP of Staffing Operations',
      company: 'Northbridge Enterprise Solutions',
    },
  },
  workforce: {
    id: 'workforce',
    name: 'Ceipal Workforce',
    shortLabel: 'Workforce',
    portalSubtitle: 'Sign in to Ceipal Workforce for onboarding, I-9 compliance, and timesheets.',
    headline: 'Streamlined onboarding, compliance, and billing for every placement.',
    description:
      'Automate offer packets, E-Verify and I-9 workflows, consultant time tracking, and invoice approvals without switching systems.',
    metrics: [
      { value: '99.4%', label: 'On-time payroll and invoice accuracy across audited cycles' },
      { value: '68%', label: 'Reduction in manual onboarding packet follow-up per hire' },
    ],
    testimonial: {
      quote:
        'Moving contractor onboarding and weekly timesheets into Ceipal Workforce eliminated 18 hours of weekly back-office reconciliation for our finance desk.',
      author: 'Catherine Hale',
      role: 'VP of Staffing Operations',
      company: 'Northbridge Enterprise Solutions',
    },
  },
  procurewise: {
    id: 'procurewise',
    name: 'Ceipal Procurewise',
    shortLabel: 'Procurewise',
    portalSubtitle: 'Sign in to Ceipal Procurewise to oversee contingent spend and vendor tiers.',
    headline: 'Direct sourcing and vendor visibility for enterprise contingent programs.',
    description:
      'Coordinate multi-tier staffing suppliers, enforce rate cards, track SOW milestones, and monitor real-time contingent labor spend.',
    metrics: [
      { value: '19%', label: 'Average annual contingent spend savings via rate-card enforcement' },
      { value: '3.2x', label: 'Higher direct-sourced candidate fill rate over 12 months' },
    ],
    testimonial: {
      quote:
        'Procurewise gave our procurement leadership clean visibility across 34 staffing suppliers and brought rate-card compliance above 97% in two quarters.',
      author: 'Catherine Hale',
      role: 'VP of Staffing Operations',
      company: 'Northbridge Enterprise Solutions',
    },
  },
};

export const WORKSPACE_RECORDS: Record<ProductModule, PipelineRecord[]> = {
  ats: [
    {
      id: 'req-1',
      code: 'REQ-4821',
      title: 'Senior Cloud Infrastructure Engineer',
      clientOrDept: 'Vanguard Financial Systems',
      owner: 'Priya Nair',
      stage: 'Active',
      countMetric: 14,
      countLabel: 'Submittals',
      rateOrValue: '$112/hr',
      updatedAt: '18 min ago',
      location: 'Charlotte, NC (Hybrid)',
      notes: 'Hiring manager requested 3 final panel slots by Thursday afternoon. AWS & Terraform required.',
    },
    {
      id: 'req-2',
      code: 'REQ-4817',
      title: 'SAP S/4HANA Finance Functional Lead',
      clientOrDept: 'Helios Medical Devices',
      owner: 'Daniel Brooks',
      stage: 'Review',
      countMetric: 8,
      countLabel: 'Submittals',
      rateOrValue: '$128/hr',
      updatedAt: '1 hr ago',
      location: 'Boston, MA (Remote)',
      notes: 'Client reviewing shortlisted profiles via VMS portal. Background check pre-screen cleared.',
    },
    {
      id: 'req-3',
      code: 'REQ-4809',
      title: 'Principal Data Platform Architect',
      clientOrDept: 'Alder Logistics Group',
      owner: 'Priya Nair',
      stage: 'Active',
      countMetric: 19,
      countLabel: 'Submittals',
      rateOrValue: '$135/hr',
      updatedAt: '2 hrs ago',
      location: 'Austin, TX (Hybrid)',
      notes: 'Strong match pipeline from Ceipal AI ranker; two candidates scheduled for technical deep-dive.',
    },
    {
      id: 'req-4',
      code: 'REQ-4794',
      title: 'Clinical Trial Biostatistician',
      clientOrDept: 'Kestrel BioLabs',
      owner: 'Meera Patel',
      stage: 'Pending',
      countMetric: 5,
      countLabel: 'Submittals',
      rateOrValue: '$104/hr',
      updatedAt: 'Yesterday',
      location: 'Raleigh, NC (Onsite)',
      notes: 'Awaiting updated bill-rate confirmation from MSP program office before final release.',
    },
    {
      id: 'req-5',
      code: 'REQ-4782',
      title: 'Enterprise Cybersecurity Analyst (IAM)',
      clientOrDept: 'Vanguard Financial Systems',
      owner: 'Lucas Chen',
      stage: 'Closed',
      countMetric: 11,
      countLabel: 'Submittals',
      rateOrValue: '$98/hr',
      updatedAt: '2 days ago',
      location: 'Chicago, IL (Hybrid)',
      notes: 'Offer accepted. Onboarding handoff pushed automatically to Ceipal Workforce.',
    },
  ],
  workforce: [
    {
      id: 'wf-1',
      code: 'ONB-904',
      title: 'Rohan Deshmukh — Cloud Engineer',
      clientOrDept: 'Vanguard Financial Systems',
      owner: 'Priya Nair',
      stage: 'Active',
      countMetric: 40,
      countLabel: 'Hrs Logged',
      rateOrValue: '$4,480',
      updatedAt: '22 min ago',
      location: 'Charlotte, NC',
      notes: 'I-9 Section 2 verified via E-Verify. Weekly timesheet approved by client manager.',
    },
    {
      id: 'wf-2',
      code: 'ONB-899',
      title: 'Elena Alvarez — SAP Finance Lead',
      clientOrDept: 'Helios Medical Devices',
      owner: 'Hannah Kim',
      stage: 'Review',
      countMetric: 38,
      countLabel: 'Hrs Logged',
      rateOrValue: '$4,864',
      updatedAt: '45 min ago',
      location: 'Boston, MA',
      notes: 'Client expense addendum pending electronic counter-signature.',
    },
    {
      id: 'wf-3',
      code: 'ONB-892',
      title: 'Marcus Vance — IAM Security Analyst',
      clientOrDept: 'Vanguard Financial Systems',
      owner: 'Priya Nair',
      stage: 'Pending',
      countMetric: 0,
      countLabel: 'Hrs Logged',
      rateOrValue: '$3,920',
      updatedAt: '3 hrs ago',
      location: 'Chicago, IL',
      notes: 'Start date Monday. Background clearance complete; direct deposit form submitted.',
    },
    {
      id: 'wf-4',
      code: 'ONB-881',
      title: 'Sonia Lindqvist — QA Automation Lead',
      clientOrDept: 'Alder Logistics Group',
      owner: 'Daniel Brooks',
      stage: 'Closed',
      countMetric: 40,
      countLabel: 'Hrs Logged',
      rateOrValue: '$3,680',
      updatedAt: 'Yesterday',
      location: 'Austin, TX',
      notes: 'Billing cycle #46 invoiced and reconciled in NetSuite integration.',
    },
  ],
  procurewise: [
    {
      id: 'pw-1',
      code: 'SOW-312',
      title: 'Tier-1 Cloud Modernization Pod',
      clientOrDept: 'Northbridge Enterprise IT',
      owner: 'Priya Nair',
      stage: 'Active',
      countMetric: 6,
      countLabel: 'Suppliers',
      rateOrValue: '$245,000',
      updatedAt: '14 min ago',
      location: 'North America',
      notes: 'All 6 participating vendors compliant with Q4 rate card ceiling.',
    },
    {
      id: 'pw-2',
      code: 'SOW-309',
      title: 'ERP Migration Staffing Program',
      clientOrDept: 'Global Finance Systems',
      owner: 'Lucas Chen',
      stage: 'Review',
      countMetric: 4,
      countLabel: 'Suppliers',
      rateOrValue: '$182,500',
      updatedAt: '1 hr ago',
      location: 'EMEA & US',
      notes: 'Milestone #2 deliverables submitted for procurement audit sign-off.',
    },
    {
      id: 'pw-3',
      code: 'SOW-304',
      title: 'Clinical Operations Contingent Pool',
      clientOrDept: 'Life Sciences Division',
      owner: 'Meera Patel',
      stage: 'Pending',
      countMetric: 9,
      countLabel: 'Suppliers',
      rateOrValue: '$310,000',
      updatedAt: 'Yesterday',
      location: 'US East',
      notes: 'Quarterly supplier scorecard review scheduled with category manager.',
    },
    {
      id: 'pw-4',
      code: 'SOW-298',
      title: 'Direct Sourcing Alumni Talent Pool',
      clientOrDept: 'Corporate Talent Office',
      owner: 'Priya Nair',
      stage: 'Closed',
      countMetric: 3,
      countLabel: 'Suppliers',
      rateOrValue: '$94,200',
      updatedAt: '3 days ago',
      location: 'Remote US',
      notes: 'Program closed 14% under budget with 11 direct-sourced hires completed.',
    },
  ],
};

export const WORKSPACE_KPIS: Record<
  ProductModule,
  { label: string; value: string; note: string }[]
> = {
  ats: [
    { label: 'Open Requisitions', value: '48', note: '12 high-priority VMS' },
    { label: 'Active Submittals', value: '164', note: 'Across 19 client accounts' },
    { label: 'Interviews This Week', value: '29', note: '7 final-round panels' },
    { label: 'Avg. Time to Submit', value: '2.8h', note: 'Down 31% vs last quarter' },
  ],
  workforce: [
    { label: 'Active Consultants', value: '312', note: 'Across 14 states' },
    { label: 'Pending Onboarding', value: '9', note: '6 awaiting I-9 E-Verify' },
    { label: 'Timesheets Approved', value: '96.4%', note: 'Cycle ending Nov 24' },
    { label: 'Weekly Billable Total', value: '$418,920', note: '12,480 verified hours' },
  ],
  procurewise: [
    { label: 'Active Vendors', value: '34', note: 'Tier 1 & Tier 2 suppliers' },
    { label: 'Rate-Card Compliance', value: '97.8%', note: 'Q4 audited spend' },
    { label: 'Direct Fill Share', value: '41.2%', note: 'Up 8.4% year over year' },
    { label: 'Committed SOW Value', value: '$831,700', note: '4 active program lines' },
  ],
};
