export type AssetStatus = 'active' | 'inactive' | 'under_maintenance';

export interface Asset {
  id: number;
  name: string;
  extid: string;
  status: AssetStatus; // 👈 use AssetStatus type
  category: string;
  group: string;
  subgroup: string;
  locationId: string;
  assignedTo: string;
  lastCheckedAt: string;
  nextMaintenanceAt: string;
  manufacturer: string;
  modelNumber: string;
  serialNumber: string;
  purchaseDate: string;
  purchaseCost: string;
  expiryDate: string;
  expiryAlertOn: string;
  vendor: string;
  department: string;
  warrantyTill: string;
  notes: string;
  meta?: {
    customTag: string;
    internalCode: string;
  };
 
}