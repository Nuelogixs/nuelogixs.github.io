import { MapNode, RouteLine, LogisticsWorkflowStage } from '../types';

export const DEMO_MAP_NODES: MapNode[] = [
  {
    id: 'node-disp-1',
    name: 'Dispatcher #001',
    type: 'dispatcher',
    lat: 25,
    lng: 20,
    status: 'in_transit',
    rating: 4.9,
    distanceKm: '1.8 km away',
    etaMin: '12 min',
    details: 'Vehicle: Cargo Van #04 | Fleet Zone A',
    assignedRouteId: 'route-1'
  },
  {
    id: 'node-disp-2',
    name: 'Dispatcher #002',
    type: 'dispatcher',
    lat: 45,
    lng: 65,
    status: 'active',
    rating: 4.8,
    distanceKm: '3.4 km away',
    etaMin: '18 min',
    details: 'Vehicle: Express Motor #12 | Fleet Zone B',
    assignedRouteId: 'route-2'
  },
  {
    id: 'node-wh-1',
    name: 'Warehouse #001',
    type: 'warehouse',
    lat: 35,
    lng: 40,
    status: 'active',
    rating: 5.0,
    distanceKm: 'Hub Central',
    etaMin: '24/7 Ops',
    details: 'Capacity: XX% | Sort Facility West'
  },
  {
    id: 'node-wh-2',
    name: 'Warehouse #002',
    type: 'warehouse',
    lat: 70,
    lng: 30,
    status: 'active',
    rating: 4.9,
    distanceKm: 'Hub East',
    etaMin: '24/7 Ops',
    details: 'Capacity: XX% | Cold-chain Facility'
  },
  {
    id: 'node-cust-1',
    name: 'Customer Node #101',
    type: 'customer',
    lat: 60,
    lng: 85,
    status: 'processing',
    rating: 4.7,
    distanceKm: 'Destination Alpha',
    etaMin: 'ETA: XX min',
    details: 'Shipment ID: #NLGX-9081'
  },
  {
    id: 'node-pay-1',
    name: 'Payment Node #001',
    type: 'payment_node',
    lat: 80,
    lng: 70,
    status: 'active',
    rating: 5.0,
    distanceKm: 'Esik Pay Settlement',
    etaMin: 'Instant',
    details: 'Automated Wallet Escrow & Settlement'
  }
];

export const DEMO_ROUTES: RouteLine[] = [
  {
    id: 'route-1',
    fromNodeId: 'node-disp-1',
    toNodeId: 'node-wh-1',
    status: 'moving',
    label: 'Pickup Route #01',
    type: 'goods'
  },
  {
    id: 'route-2',
    fromNodeId: 'node-wh-1',
    toNodeId: 'node-cust-1',
    status: 'moving',
    label: 'Dispatch Delivery Route #02',
    type: 'goods'
  },
  {
    id: 'route-3',
    fromNodeId: 'node-cust-1',
    toNodeId: 'node-pay-1',
    status: 'completed',
    label: 'Instant Settlement Connection',
    type: 'payment'
  }
];

export const DEMO_LOGISTICS_STAGES: LogisticsWorkflowStage[] = [
  {
    step: 1,
    id: 'book',
    title: 'BOOK',
    subtitle: 'Smart Dispatch Matching',
    description: 'Algorithmically match cargo with verified nearby fleet drivers and dispatchers in real-time.',
    status: 'completed',
    uiPreviewLabel: 'Dispatcher Request #000',
    metrics: [
      { label: 'Match Time', value: '< XX sec' },
      { label: 'Radius', value: 'X.X km' }
    ]
  },
  {
    step: 2,
    id: 'match',
    title: 'MATCH',
    subtitle: 'Capacity & Route Selection',
    description: 'System assigns optimal vehicle class (Motorcycle, Van, Truck) based on cargo volume and urgency.',
    status: 'completed',
    uiPreviewLabel: 'Fleet Assignment #000',
    metrics: [
      { label: 'Optimized Path', value: 'XX% Faster' },
      { label: 'Vehicle Type', value: 'Zone Fleet' }
    ]
  },
  {
    step: 3,
    id: 'pickup',
    title: 'PICK UP',
    subtitle: 'Warehouse & QR Verification',
    description: 'Digital manifest scanning at warehouse origin ensures zero-loss pickup handovers.',
    status: 'current',
    uiPreviewLabel: 'Scan Manifest #000',
    metrics: [
      { label: 'Verification', value: 'QR Secured' },
      { label: 'Weight Check', value: 'Automated' }
    ]
  },
  {
    step: 4,
    id: 'track',
    title: 'TRACK',
    subtitle: 'Live Telemetry & Geofencing',
    description: 'Real-time GPS tracking with temperature sensors and automated delay prevention alerts.',
    status: 'pending',
    uiPreviewLabel: 'Live Telemetry #000',
    metrics: [
      { label: 'Signal Ping', value: 'Every X sec' },
      { label: 'Accuracy', value: 'Sub-meter' }
    ]
  },
  {
    step: 5,
    id: 'deliver',
    title: 'DELIVER',
    subtitle: 'Proof of Delivery & Esik Settlement',
    description: 'Instant customer sign-off triggers automated payment release through Esik Pay.',
    status: 'pending',
    uiPreviewLabel: 'Instant Payout #000',
    metrics: [
      { label: 'Settlement', value: 'Instant ₦' },
      { label: 'Audit Trail', value: 'Encrypted' }
    ]
  }
];
