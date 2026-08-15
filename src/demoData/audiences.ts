import { TargetAudience, EcosystemStep } from '../types';

export const DEMO_AUDIENCES: TargetAudience[] = [
  {
    id: 'aud-1',
    title: 'Individuals',
    subtitle: 'Everyday Logistics & Utility Payments',
    iconName: 'User',
    badge: 'On-Demand',
    capabilities: [
      'Book nearby dispatchers in seconds',
      'Pay electricity, airtime & data instantly',
      'Track package movement live on map',
      'Digital receipts & expenditure history'
    ],
    ctaLabel: 'Explore Personal Tools'
  },
  {
    id: 'aud-2',
    title: 'Dispatchers & Fleet',
    subtitle: 'Rider & Driver Operational Hub',
    iconName: 'Bike',
    badge: 'Driver App',
    capabilities: [
      'Receive instant high-yield delivery requests',
      'Instant Esik Pay daily stipend withdrawal',
      'Turn-by-turn route optimization',
      'Performance rating & fleet safety rewards'
    ],
    ctaLabel: 'Join Dispatch Fleet'
  },
  {
    id: 'aud-3',
    title: 'Businesses & SMEs',
    subtitle: 'Commerce, Dispatch & Bills',
    iconName: 'Building2',
    badge: 'SME Suite',
    capabilities: [
      'Batch order dispatching & customer notifications',
      'Bulk worker & contractor disbursements',
      'Centralized utility bill management',
      'Role-based staff access permissions'
    ],
    ctaLabel: 'Explore Business Tools'
  },
  {
    id: 'aud-4',
    title: 'Warehouses & Hubs',
    subtitle: 'Inventory & Sorting Logistics',
    iconName: 'Warehouse',
    badge: 'Logistics Hub',
    capabilities: [
      'QR Manifest intake & automated inventory logging',
      'Automated dispatch driver allocation',
      'Cold-chain & high-value package telemetry',
      'Seamless multi-hub transfers'
    ],
    ctaLabel: 'Connect Your Warehouse'
  },
  {
    id: 'aud-5',
    title: 'Logistics Operators',
    subtitle: 'Fleet & Fleet Partner Management',
    iconName: 'Truck',
    badge: 'Fleet Ops',
    capabilities: [
      'Cross-country freight and dispatch tracking',
      'Fuel card & toll automated disbursements',
      'Real-time vehicle health diagnostics',
      'Custom API integrations'
    ],
    ctaLabel: 'Scale Fleet Operations'
  },
  {
    id: 'aud-6',
    title: 'Enterprises & Franchises',
    subtitle: 'Complete Infrastructure Ecosystem',
    iconName: 'Globe',
    badge: 'Enterprise',
    capabilities: [
      'Custom ERP & CRM workflow integration',
      'Dedicated account manager & SLA support',
      'Automated treasury & multi-tier approval flows',
      'Custom AI route & cost models'
    ],
    ctaLabel: 'Contact Enterprise Team'
  }
];

export const DEMO_ECOSYSTEM_STEPS: EcosystemStep[] = [
  {
    id: 'eco-1',
    title: 'Consumer Request',
    entity: 'CUSTOMER',
    role: 'Places goods delivery or bill payment request',
    type: 'logistics',
    icon: 'User'
  },
  {
    id: 'eco-2',
    title: 'Digital Order Creation',
    entity: 'ORDER',
    role: 'Generates secure tracking ID & transaction hash',
    type: 'logistics',
    icon: 'FileText'
  },
  {
    id: 'eco-3',
    title: 'Nuelogixs Brain',
    entity: 'NUELOGIXS',
    role: 'AI calculates route, driver match & fee',
    type: 'unified',
    icon: 'Brain'
  },
  {
    id: 'eco-4',
    title: 'Hub Warehouse Sorting',
    entity: 'WAREHOUSE',
    role: 'Package scanned & staged for pickup',
    type: 'logistics',
    icon: 'Warehouse'
  },
  {
    id: 'eco-5',
    title: 'Dispatcher Assignment',
    entity: 'DISPATCH',
    role: 'Vehicle dispatched with live GPS tracking',
    type: 'logistics',
    icon: 'Navigation'
  },
  {
    id: 'eco-6',
    title: 'Verified Delivery',
    entity: 'DELIVERY',
    role: 'Customer QR sign-off upon arrival',
    type: 'logistics',
    icon: 'CheckCircle'
  },
  {
    id: 'eco-7',
    title: 'Instant Settlement Trigger',
    entity: 'PAYMENT',
    role: 'Funds unlocked for driver payout',
    type: 'financial',
    icon: 'Key'
  },
  {
    id: 'eco-8',
    title: 'Esik Pay Settlement',
    entity: 'ESIK PAY',
    role: 'Funds routed to wallet, utility or bank',
    type: 'financial',
    icon: 'Wallet'
  },
  {
    id: 'eco-9',
    title: 'Business Command Center',
    entity: 'BUSINESS',
    role: 'Audit log, analytics & tax records updated',
    type: 'unified',
    icon: 'BarChart3'
  }
];
