export type ServiceCategory = 'logistics' | 'payments' | 'business' | 'ai' | 'company';

export interface MapNode {
  id: string;
  name: string;
  type: 'dispatcher' | 'warehouse' | 'customer' | 'payment_node';
  lat: number; // relative percentage 0 - 100 for SVG canvas
  lng: number; // relative percentage 0 - 100
  status: 'active' | 'in_transit' | 'idle' | 'processing';
  rating?: number;
  distanceKm?: string;
  etaMin?: string;
  details?: string;
  assignedRouteId?: string;
}

export interface RouteLine {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  status: 'moving' | 'completed' | 'queued';
  label: string;
  type: 'goods' | 'payment' | 'unified';
}

export interface LogisticsWorkflowStage {
  step: number;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  uiPreviewLabel: string;
  metrics: { label: string; value: string }[];
}

export interface AIInsight {
  id: string;
  category: 'logistics' | 'disbursement' | 'route' | 'utility';
  title: string;
  question: string;
  response: string;
  recommendedAction: string;
  impactScore: string;
  status: 'critical' | 'suggestion' | 'optimal';
}

export interface UtilityService {
  id: string;
  name: string;
  code: string;
  category: 'electricity' | 'airtime' | 'data' | 'cable' | 'autopay' | 'disbursement' | 'business';
  icon: string;
  description: string;
  placeholderAmount: string;
  availableProviders: string[];
}

export interface TransactionRecord {
  id: string;
  reference: string;
  title: string;
  category: string;
  amount: string;
  status: 'Successful' | 'Pending' | 'Processing' | 'Scheduled';
  timestamp: string;
  recipient: string;
  provider: string;
}

export interface DisbursementEmployee {
  id: string;
  code: string;
  name: string;
  role: string;
  department: string;
  amount: string;
  bankAccount: string;
  status: 'Ready' | 'Scheduled' | 'Processing';
}

export interface BusinessMetric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  subtext: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  capabilities: string[];
  ctaLabel: string;
}

export interface EcosystemStep {
  id: string;
  title: string;
  entity: 'CUSTOMER' | 'ORDER' | 'NUELOGIXS' | 'WAREHOUSE' | 'DISPATCH' | 'DELIVERY' | 'PAYMENT' | 'ESIK PAY' | 'BUSINESS';
  role: string;
  type: 'logistics' | 'financial' | 'unified';
  icon: string;
}
