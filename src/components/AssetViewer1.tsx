// src/components/AssetViewer.tsx
import React from 'react';
import { Asset } from '../types/Asset';

interface Props {
  asset: Asset;
}

export default function AssetViewer({ asset }: Props) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">{asset.name}</h2>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div><strong>Status:</strong> {asset.status}</div>
        <div><strong>Category:</strong> {asset.category}</div>
        <div><strong>Group:</strong> {asset.group} → {asset.subgroup}</div>
        <div><strong>Location:</strong> {asset.locationId}</div>
        <div><strong>Assigned To:</strong> {asset.assignedTo}</div>
        <div><strong>Department:</strong> {asset.department}</div>
        <div><strong>Vendor:</strong> {asset.vendor}</div>
        <div><strong>Model:</strong> {asset.modelNumber}</div>
        <div><strong>Serial No:</strong> {asset.serialNumber}</div>
        <div><strong>Manufacturer:</strong> {asset.manufacturer}</div>
        <div><strong>Purchase:</strong> {asset.purchaseDate} @ ₹{asset.purchaseCost}</div>
        <div><strong>Warranty:</strong> till {asset.warrantyTill}</div>
        <div><strong>Expiry:</strong> {asset.expiryDate} (Alert on {asset.expiryAlertOn})</div>
        <div><strong>Checked:</strong> {asset.lastCheckedAt}</div>
        <div><strong>Next Maintenance:</strong> {asset.nextMaintenanceAt}</div>
        <div className="col-span-3"><strong>Notes:</strong> {asset.notes}</div>
        {asset.meta && (
          <div className="col-span-3 mt-4">
            <strong>Meta:</strong>
            <pre className="bg-black p-2 text-xs rounded mt-1">
              {JSON.stringify(asset.meta, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
