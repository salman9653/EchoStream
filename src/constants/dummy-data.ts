export type CampaignIconType = 
  | 'rocket' 
  | 'palette' 
  | 'sparkles' 
  | 'trending' 
  | 'zap' 
  | 'megaphone' 
  | 'target' 
  | 'lightbulb' 
  | 'code' 
  | 'pen'
  | 'emerald';

export type CampaignColorType = 
  | 'primary' 
  | 'teal' 
  | 'orange' 
  | 'purple' 
  | 'rose' 
  | 'amber' 
  | 'emerald' 
  | 'cyan' 
  | 'indigo' 
  | 'fuchsia';

export interface DummyCampaign {
  id: string;
  title: string;
  createdAt: string;
  iconType: CampaignIconType;
  iconColor: CampaignColorType;
  outputs: {
    label: string;
    highlight?: boolean;
  }[];
}

export const DUMMY_CAMPAIGNS: DummyCampaign[] = [
  {
    id: "cmp_01",
    title: "The Future of AI\nArchitecture",
    createdAt: "2 HOURS AGO",
    iconType: "rocket",
    iconColor: "primary",
    outputs: [
      { label: "5 LinkedIn", highlight: true },
      { label: "3 Threads" }
    ]
  },
  {
    id: "cmp_02",
    title: "Design Systems in\n2024",
    createdAt: "YESTERDAY",
    iconType: "palette",
    iconColor: "teal",
    outputs: [
      { label: "12 LinkedIn" },
      { label: "8 Threads" }
    ]
  },
  {
    id: "cmp_03",
    title: "Product Launch\nQ3 Strategy",
    createdAt: "2 DAYS AGO",
    iconType: "target",
    iconColor: "rose",
    outputs: [
      { label: "1 Blog Post", highlight: true },
      { label: "10 Tweets" },
      { label: "2 LinkedIn" }
    ]
  },
  {
    id: "cmp_04",
    title: "React Server\nComponents Guide",
    createdAt: "MAR 22, 2024",
    iconType: "code",
    iconColor: "purple",
    outputs: [
      { label: "2 Dev.to Posts", highlight: true },
      { label: "5 Twitter" }
    ]
  },
  {
    id: "cmp_05",
    title: "Startup Funding\nAnnouncements",
    createdAt: "MAR 18, 2024",
    iconType: "megaphone",
    iconColor: "amber",
    outputs: [
      { label: "1 Press Release", highlight: true },
      { label: "4 LinkedIn" }
    ]
  },
  {
    id: "cmp_06",
    title: "Sustainable Tech\nInnovations",
    createdAt: "MAR 15, 2024",
    iconType: "emerald",
    iconColor: "emerald",
    outputs: [
      { label: "1 Blog Post" },
      { label: "6 Threads" }
    ]
  },
  {
    id: "cmp_07",
    title: "Understanding\nWeb3 Economics",
    createdAt: "MAR 10, 2024",
    iconType: "trending",
    iconColor: "cyan",
    outputs: [
      { label: "3 LinkedIn", highlight: true },
      { label: "15 Tweets" }
    ]
  },
  {
    id: "cmp_08",
    title: "Creative Writing\nMasterclass",
    createdAt: "MAR 05, 2024",
    iconType: "pen",
    iconColor: "indigo",
    outputs: [
      { label: "5 Blog Posts" },
      { label: "10 Threads" }
    ]
  },
  {
    id: "cmp_09",
    title: "Next.js Performance\nOptimization",
    createdAt: "FEB 28, 2024",
    iconType: "zap",
    iconColor: "fuchsia",
    outputs: [
      { label: "1 Technical Guide", highlight: true },
      { label: "3 LinkedIn" }
    ]
  },
  {
    id: "cmp_10",
    title: "Marketing Hacks\nFor Founders",
    createdAt: "FEB 20, 2024",
    iconType: "lightbulb",
    iconColor: "orange",
    outputs: [
      { label: "2 LinkedIn" },
      { label: "12 Tweets", highlight: true }
    ]
  }
];
