import React, { useState } from 'react';
import AssetForm from './components/asset-form';
import AssetList from './components/asset-list';
import AssetDetails from './components/AssetDetails'; // ✅ CORRECT
import './App.css';

export interface Asset {
  id: number;
  name: string;
  extid: string;
  status: string;
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
}

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const handleSave = (asset: Asset) => {
    setAssets((prev) => [...prev, asset]);
    console.log('Asset Saved:', asset);
  };

  const handleDelete = (id: number) => {
    setAssets((prev) => prev.filter((a) => a.id !== id));
    if (selectedAsset?.id === id) setSelectedAsset(null);
  };

  const handleSelect = (asset: Asset) => {
    setSelectedAsset(asset);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Asset Management</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <AssetForm onSave={handleSave} />
        </div>

        <div>
          <AssetList assets={assets} onDelete={handleDelete} onSelect={handleSelect} />
        </div>
      </div>

      <div className="mt-10">
        <AssetDetails asset={selectedAsset} />
      </div>
    </div>
  );
}

export default App;
