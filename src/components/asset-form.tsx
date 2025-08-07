import React, { useState } from 'react';

interface Asset {
  id: number;
  name: string;
  extid: string;
  category: string;
  group: string;
  subgroup: string;
  department: string;
  locationId: string;
  assignedTo: string;
  purchaseDate: string;
  purchaseCost: string;
  expiryDate: string;
  expiryAlertOn: string;
  status: string;
  manufacturer: string;
  modelNumber: string;
  serialNumber: string;
  vendor: string;
  lastCheckedAt: string;
  nextMaintenanceAt: string;
  warrantyTill: string;
  notes: string;
}

interface Props {
  onSave: (asset: Asset) => void;
}

export default function AssetForm({ onSave }: Props) {
  const [formData, setFormData] = useState<Omit<Asset, 'id'>>({
    name: '',
    extid: '',
    category: '',
    group: '',
    subgroup: '',
    department: '',
    locationId: '',
    assignedTo: '',
    purchaseDate: '',
    purchaseCost: '',
    expiryDate: '',
    expiryAlertOn: '',
    status: '',
    manufacturer: '',
    modelNumber: '',
    serialNumber: '',
    vendor: '',
    lastCheckedAt: '',
    nextMaintenanceAt: '',
    warrantyTill: '',
    notes: '',
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const newAsset: Asset = {
      id: Date.now(),
      ...formData,
    };
    onSave(newAsset);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      extid: '',
      category: '',
      group: '',
      subgroup: '',
      department: '',
      locationId: '',
      assignedTo: '',
      purchaseDate: '',
      purchaseCost: '',
      expiryDate: '',
      expiryAlertOn: '',
      status: '',
      manufacturer: '',
      modelNumber: '',
      serialNumber: '',
      vendor: '',
      lastCheckedAt: '',
      nextMaintenanceAt: '',
      warrantyTill: '',
      notes: '',
    });
  };

  const statuses = ['Active', 'Inactive', 'Under Maintenance'];
  const categories = ['Furniture', 'Electronics', 'Vehicles'];
  const groups = ['Chairs', 'Tables', 'Displays'];
  const subgroups = ['Recliner Chairs', 'Office Chairs', 'Wall-Mount Displays'];
  const locations = ['Terminal A', 'Warehouse', 'Office'];
  const users = ['John Doe', 'Jane Smith', 'Admin'];

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Asset Registration Form</h2>

      {/* Identification Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Identification</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input placeholder="Asset Name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className="input" />
        <input placeholder="External ID" value={formData.extid} onChange={(e) => handleChange('extid', e.target.value)} className="input" />
        <input placeholder="Serial Number" value={formData.serialNumber} onChange={(e) => handleChange('serialNumber', e.target.value)} className="input" />
      </div>

      {/* Classification Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Classification</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select value={formData.category} onChange={(e) => handleChange('category', e.target.value)} className="input">
          <option value="">Select Category</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={formData.group} onChange={(e) => handleChange('group', e.target.value)} className="input">
          <option value="">Select Group</option>
          {groups.map((g) => <option key={g}>{g}</option>)}
        </select>
        <select value={formData.subgroup} onChange={(e) => handleChange('subgroup', e.target.value)} className="input">
          <option value="">Select Sub Group</option>
          {subgroups.map((sg) => <option key={sg}>{sg}</option>)}
        </select>
      </div>

      {/* Location & Assignment */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Location & Assignment</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select value={formData.locationId} onChange={(e) => handleChange('locationId', e.target.value)} className="input">
          <option value="">Select Location</option>
          {locations.map((loc) => <option key={loc}>{loc}</option>)}
        </select>
        <select value={formData.assignedTo} onChange={(e) => handleChange('assignedTo', e.target.value)} className="input">
          <option value="">Assigned To</option>
          {users.map((u) => <option key={u}>{u}</option>)}
        </select>
        <input placeholder="Department" value={formData.department} onChange={(e) => handleChange('department', e.target.value)} className="input" />
      </div>

      {/* Dates & Lifecycle */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Lifecycle & Dates</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="date" value={formData.purchaseDate} onChange={(e) => handleChange('purchaseDate', e.target.value)} className="input" placeholder="Purchase Date" />
        <input placeholder="Purchase Cost" value={formData.purchaseCost} onChange={(e) => handleChange('purchaseCost', e.target.value)} className="input" />
        <input type="date" value={formData.expiryDate} onChange={(e) => handleChange('expiryDate', e.target.value)} className="input" placeholder="Expiry Date" />
        <input type="date" value={formData.expiryAlertOn} onChange={(e) => handleChange('expiryAlertOn', e.target.value)} className="input" placeholder="Expiry Alert On" />
        <input type="datetime-local" value={formData.lastCheckedAt} onChange={(e) => handleChange('lastCheckedAt', e.target.value)} className="input" placeholder="Last Checked At" />
        <input type="datetime-local" value={formData.nextMaintenanceAt} onChange={(e) => handleChange('nextMaintenanceAt', e.target.value)} className="input" placeholder="Next Maintenance" />
        <input type="date" value={formData.warrantyTill} onChange={(e) => handleChange('warrantyTill', e.target.value)} className="input" placeholder="Warranty Till" />
      </div>

      {/* Manufacturer Details */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Manufacturer & Vendor</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input placeholder="Manufacturer" value={formData.manufacturer} onChange={(e) => handleChange('manufacturer', e.target.value)} className="input" />
        <input placeholder="Model Number" value={formData.modelNumber} onChange={(e) => handleChange('modelNumber', e.target.value)} className="input" />
        <input placeholder="Vendor" value={formData.vendor} onChange={(e) => handleChange('vendor', e.target.value)} className="input" />
      </div>

      {/* Status and Notes */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Additional</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select value={formData.status} onChange={(e) => handleChange('status', e.target.value)} className="input">
          <option value="">Select Status</option>
          {statuses.map((status) => <option key={status}>{status}</option>)}
        </select>
        <textarea placeholder="Notes" value={formData.notes} onChange={(e) => handleChange('notes', e.target.value)} className="input col-span-full" />
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <button onClick={handleSubmit} className="bg-green-600 px-4 py-2 rounded text-white">Save Asset</button>
        <button onClick={handleReset} className="bg-blue-800 px-4 py-2 rounded text-white">Reset</button>
      </div>
    </div>
  );
}
