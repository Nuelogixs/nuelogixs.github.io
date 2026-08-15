import { UtilityService, TransactionRecord } from '../types';

export const DEMO_UTILITY_SERVICES: UtilityService[] = [
  {
    id: 'util-1',
    name: 'Electricity Bills',
    code: 'POWER',
    category: 'electricity',
    icon: 'Zap',
    description: 'Instant prepaid/postpaid electricity token generation across all DISCO providers.',
    placeholderAmount: '₦XX,XXX',
    availableProviders: ['Ikeja Electric (IE)', 'Eko Electric (EKEDC)', 'Abuja Electric (AEDC)', 'Kano Electric (KEDCO)']
  },
  {
    id: 'util-2',
    name: 'Airtime & Data',
    code: 'AIRDATA',
    category: 'airtime',
    icon: 'PhoneCall',
    description: 'Automated airtime top-up and high-speed data bundles delivered in milliseconds.',
    placeholderAmount: '₦X,XXX',
    availableProviders: ['MTN Nigeria', 'Airtel', 'Glo Mobile', '9mobile']
  },
  {
    id: 'util-3',
    name: 'Cable TV Tokens',
    code: 'CABLE',
    category: 'cable',
    icon: 'Tv',
    description: 'Direct decoder re-activation tokens and subscription plan renewals.',
    placeholderAmount: '₦XX,XXX',
    availableProviders: ['DStv Nigeria', 'GOtv', 'Startimes', 'Showmax']
  },
  {
    id: 'util-4',
    name: 'Auto Pay Rules & Recurring',
    code: 'AUTOPAY',
    category: 'autopay',
    icon: 'Repeat',
    description: 'Automated scheduled bill payments, wallet threshold triggers & auto-debit rules.',
    placeholderAmount: 'Automated',
    availableProviders: ['Scheduled Rule Engine', 'Direct Wallet Debit', 'Standing Order']
  },
  {
    id: 'util-5',
    name: 'Business Payments',
    code: 'BIZPAY',
    category: 'business',
    icon: 'Building2',
    description: 'Automated supplier invoice settlement, corporate transfers & vendor disbursements.',
    placeholderAmount: '₦X,XXX,XXX',
    availableProviders: ['Corporate Wallet', 'Reserve Account', 'Commercial Wire']
  },
  {
    id: 'util-6',
    name: 'Bulk Workforce Disbursement',
    code: 'DISBURSE',
    category: 'disbursement',
    icon: 'Users',
    description: 'Batch payroll and daily dispatcher stipend payout engine with instant settlement.',
    placeholderAmount: '₦XXX,XXX',
    availableProviders: ['NIBSS Direct', 'Monnify Settlement', 'Interbank Express']
  }
];

export const DEMO_TRANSACTIONS: TransactionRecord[] = [
  {
    id: 'tx-101',
    reference: 'ESK-PWR-00918',
    title: 'Electricity Token Purchase',
    category: 'Electricity',
    amount: '₦XX,XXX',
    status: 'Pending',
    timestamp: 'Today, 14:22',
    recipient: 'Meter #XXXX-XXXX',
    provider: 'Ikeja Electric'
  },
  {
    id: 'tx-102',
    reference: 'ESK-ATM-00917',
    title: 'Airtime Reload',
    category: 'Airtime',
    amount: '₦X,XXX',
    status: 'Successful',
    timestamp: 'Today, 13:45',
    recipient: '+234 80X XXX XXXX',
    provider: 'MTN Nigeria'
  },
  {
    id: 'tx-103',
    reference: 'ESK-DTA-00916',
    title: 'Corporate Data Bundle',
    category: 'Data',
    amount: '₦X,XXX',
    status: 'Successful',
    timestamp: 'Today, 12:10',
    recipient: '+234 70X XXX XXXX',
    provider: 'Airtel SME'
  },
  {
    id: 'tx-104',
    reference: 'ESK-CBL-00915',
    title: 'Cable TV Renewal',
    category: 'Cable TV',
    amount: '₦XX,XXX',
    status: 'Pending',
    timestamp: 'Yesterday, 18:30',
    recipient: 'SmartCard #XXXXXX',
    provider: 'DStv Premium'
  },
  {
    id: 'tx-105',
    reference: 'ESK-DISB-00914',
    title: 'Worker Salary & Stipend Batch',
    category: 'Worker Disbursement',
    amount: '₦XXX,XXX',
    status: 'Processing',
    timestamp: 'Yesterday, 09:15',
    recipient: 'Batch #041 (XX Workers)',
    provider: 'NIBSS FastPay'
  }
];
