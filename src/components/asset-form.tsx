import React, { useState } from 'react';
import { Asset, AssetStatus } from '../types/Asset';

interface Props {
  onSave: (asset: Asset) => void;
}

const AssetForm: React.FC<Props> = ({ onSave }) => {
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
    status: 'active',
    manufacturer: '',
    modelNumber: '',
    serialNumber: '',
    vendor: '',
    lastCheckedAt: '',
    nextMaintenanceAt: '',
    warrantyTill: '',
    notes: '',
  });

  const statuses: AssetStatus[] = ['active', 'inactive', 'under_maintenance'];
  const categories = ['Furniture', 'Electronics', 'Vehicles'];
  const groups = ['Chairs', 'Tables', 'Displays'];
  const subgroups = ['Recliner Chairs', 'Office Chairs', 'Wall-Mount Displays'];
  const locations = ['Terminal A', 'Warehouse', 'Office'];
  const users = ['John Doe', 'Jane Smith', 'Admin'];

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const newAsset: Asset = { id: Date.now(), ...formData };
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
      status: 'active',
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

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Asset Registration</h2>

      {/* Identification Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Identification</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input className="input" placeholder="Asset Name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
        <input className="input" placeholder="External ID" value={formData.extid} onChange={(e) => handleChange('extid', e.target.value)} />
        <input className="input" placeholder="Serial Number" value={formData.serialNumber} onChange={(e) => handleChange('serialNumber', e.target.value)} />
      </div>

      {/* Classification */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Classification</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <select className="input" value={formData.category} onChange={(e) => handleChange('category', e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select className="input" value={formData.group} onChange={(e) => handleChange('group', e.target.value)}>
          <option value="">Select Group</option>
          {groups.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
        <select className="input" value={formData.subgroup} onChange={(e) => handleChange('subgroup', e.target.value)}>
          <option value="">Select Subgroup</option>
          {subgroups.map((sg) => <option key={sg} value={sg}>{sg}</option>)}
        </select>
      </div>

      {/* Location and Assignment */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Location & Assignment</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <select className="input" value={formData.locationId} onChange={(e) => handleChange('locationId', e.target.value)}>
          <option value="">Select Location</option>
          {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
        </select>
        <select className="input" value={formData.assignedTo} onChange={(e) => handleChange('assignedTo', e.target.value)}>
          <option value="">Select Assigned To</option>
          {users.map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
        <input className="input" placeholder="Department" value={formData.department} onChange={(e) => handleChange('department', e.target.value)} />
      </div>

      {/* Lifecycle and Dates */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Lifecycle & Dates</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input type="date" className="input" value={formData.purchaseDate} onChange={(e) => handleChange('purchaseDate', e.target.value)} placeholder="Purchase Date" />
        <input className="input" placeholder="Purchase Cost" value={formData.purchaseCost} onChange={(e) => handleChange('purchaseCost', e.target.value)} />
        <input type="date" className="input" value={formData.expiryDate} onChange={(e) => handleChange('expiryDate', e.target.value)} placeholder="Expiry Date" />
        <input type="date" className="input" value={formData.expiryAlertOn} onChange={(e) => handleChange('expiryAlertOn', e.target.value)} placeholder="Expiry Alert" />
        <input type="datetime-local" className="input" value={formData.lastCheckedAt} onChange={(e) => handleChange('lastCheckedAt', e.target.value)} />
        <input type="datetime-local" className="input" value={formData.nextMaintenanceAt} onChange={(e) => handleChange('nextMaintenanceAt', e.target.value)} />
        <input type="date" className="input" value={formData.warrantyTill} onChange={(e) => handleChange('warrantyTill', e.target.value)} placeholder="Warranty Till" />
      </div>

      {/* Manufacturer & Vendor */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Manufacturer & Vendor</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <input className="input" placeholder="Manufacturer" value={formData.manufacturer} onChange={(e) => handleChange('manufacturer', e.target.value)} />
        <input className="input" placeholder="Model Number" value={formData.modelNumber} onChange={(e) => handleChange('modelNumber', e.target.value)} />
        <input className="input" placeholder="Vendor" value={formData.vendor} onChange={(e) => handleChange('vendor', e.target.value)} />
      </div>

      {/* Status & Notes */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Status & Notes</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <select className="input" value={formData.status} onChange={(e) => handleChange('status', e.target.value as AssetStatus)}>
          {statuses.map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
        </select>
        <textarea className="input col-span-3" placeholder="Notes" value={formData.notes} onChange={(e) => handleChange('notes', e.target.value)} />
      </div>

      <div className="flex gap-4 mt-6">
        <button className="bg-green-600 px-4 py-2 rounded" onClick={handleSubmit}>Save Asset</button>
        <button className="bg-blue-800 px-4 py-2 rounded" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default AssetForm;
