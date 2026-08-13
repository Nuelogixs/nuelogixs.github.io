import { AIInsight } from '../types';

export const DEMO_AI_INSIGHTS: AIInsight[] = [
  {
    id: 'ai-1',
    category: 'logistics',
    title: 'Route Bottleneck Detected',
    question: 'Which deliveries need attention?',
    response: 'XXX deliveries along Corridor West may experience slight delay due to weather traffic.',
    recommendedAction: 'Review route conditions and apply auto-rerouting to Zone B dispatchers.',
    impactScore: 'XX% Delay Reduction',
    status: 'critical'
  },
  {
    id: 'ai-2',
    category: 'disbursement',
    title: 'Disbursement Optimization',
    question: 'How to optimize workforce payout speed?',
    response: 'Batch #042 contains XX dispatcher payouts ready for Esik Pay instant settlement.',
    recommendedAction: 'Schedule automated batch transfer at off-peak banking hours.',
    impactScore: 'Instant Settlement',
    status: 'suggestion'
  },
  {
    id: 'ai-3',
    category: 'utility',
    title: 'Hub Power Consumption Alert',
    question: 'Are warehouse power meters topped up?',
    response: 'Warehouse #002 prepaid electricity token is estimated at XX% capacity.',
    recommendedAction: 'Trigger automatic ₦XX,XXX power token reload via Esik Pay.',
    impactScore: 'Zero Downtime',
    status: 'optimal'
  }
];
