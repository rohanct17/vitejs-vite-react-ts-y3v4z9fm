// src/data/assets.ts
import { Asset } from '../types/Asset';

export const mockAssets: Asset[] = [
  {
    id: 1,
    name: 'Recliner Chair 13',
    extid: 'RC-13',
    status: 'active',
    category: 'Furniture',
    group: 'Chairs',
    subgroup: 'Recliner Chairs',
    locationId: 'Terminal A',
    assignedTo: 'John Doe',
    department: 'Operations',
    vendor: 'FurniCraft Ltd.',
    purchaseDate: '2024-01-01',
    purchaseCost: '12000',
    expiryDate: '2028-01-01',
    expiryAlertOn: '2027-12-01',
    warrantyTill: '2026-01-01',
    lastCheckedAt: '2025-08-01T10:00',
    nextMaintenanceAt: '2025-12-01T10:00',
    manufacturer: 'RelaxWell',
    modelNumber: 'RW-X100',
    serialNumber: 'RCX100-0001',
    notes: 'Installed near Gate 4. Slight wear on armrest.',
    meta: {
      customTag: 'Gate4-Chair',
      internalCode: 'CHAIR-R13'
    }
  }
];
