import React, { useState } from 'react';
import AssetForm from './components/asset-form';
import AssetList from './components/asset-list';
import AssetViewer from './components/AssetViewer1'; // Laravel-style model viewer
import './App.css';
import { Asset } from './types/Asset'; // ✅ Type-safe import from shared types

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  // Handle asset save
  const handleSave = (asset: Asset) => {
    setAssets((prev) => [...prev, asset]);
    console.log('✅ Asset Saved:', asset);
  };

  // Handle asset delete
  const handleDelete = (id: number) => {
    setAssets((prev) => prev.filter((a) => a.id !== id));
    if (selectedAsset?.id === id) setSelectedAsset(null);
  };

  // Handle asset selection
  const handleSelect = (asset: Asset) => {
    setSelectedAsset(asset);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Asset Management</h1>

      {/* Form + Asset List */}
      <div className="grid md:grid-cols-2 gap-8">
        <AssetForm onSave={handleSave} />
        <AssetList
          assets={assets}
          onDelete={handleDelete}
          onSelect={handleSelect}
        />
      </div>

      {/* Viewer Section */}
      <div className="mt-10">
        {selectedAsset ? (
          <AssetViewer asset={selectedAsset} />
        ) : (
          <p className="text-gray-400 text-center">Select an asset to view details.</p>
        )}
      </div>
    </div>
  );
}

export default App;
