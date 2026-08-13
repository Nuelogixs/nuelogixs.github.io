import { DisbursementEmployee } from '../types';

export const DEMO_DISBURSEMENT_ROSTER: DisbursementEmployee[] = [
  {
    id: 'emp-101',
    code: 'WORKER #001',
    name: 'Dispatcher Lead Alpha',
    role: 'Senior Dispatcher',
    department: 'Fleet Zone A',
    amount: '₦XX,XXX',
    bankAccount: 'Account #XXXXXX492',
    status: 'Ready'
  },
  {
    id: 'emp-102',
    code: 'WORKER #002',
    name: 'Warehouse Manager Beta',
    role: 'Inventory Specialist',
    department: 'Hub Central',
    amount: '₦XX,XXX',
    bankAccount: 'Account #XXXXXX812',
    status: 'Ready'
  },
  {
    id: 'emp-103',
    code: 'WORKER #003',
    name: 'Logistics Driver Gamma',
    role: 'Long-haul Driver',
    department: 'Fleet Zone B',
    amount: '₦XX,XXX',
    bankAccount: 'Account #XXXXXX119',
    status: 'Scheduled'
  },
  {
    id: 'emp-104',
    code: 'WORKER #004',
    name: 'Route Inspector Delta',
    role: 'Quality Assurance',
    department: 'Ops Control',
    amount: '₦XX,XXX',
    bankAccount: 'Account #XXXXXX304',
    status: 'Ready'
  },
  {
    id: 'emp-105',
    code: 'WORKER #005',
    name: 'Express Courier Epsilon',
    role: 'Last-mile Rider',
    department: 'Zone C Express',
    amount: '₦XX,XXX',
    bankAccount: 'Account #XXXXXX922',
    status: 'Processing'
  }
];
