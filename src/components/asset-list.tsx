import React from 'react';
import { Asset } from '../types/Asset';

interface Props {
  assets: Asset[];
  onDelete: (id: number) => void;
  onSelect: (asset: Asset) => void;
}

export default function AssetList({ assets, onDelete, onSelect }: Props) {
  // Group assets by group name
  const groupedAssets = assets.reduce((acc, asset) => {
    const group = asset.group || 'Ungrouped';
    if (!acc[group]) acc[group] = [];
    acc[group].push(asset);
    return acc;
  }, {} as Record<string, Asset[]>);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-2">Asset List by Group</h2>

      {Object.entries(groupedAssets).map(([groupName, groupAssets]) => (
        <div key={groupName} className="border p-4 rounded bg-gray-800">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">Group: {groupName}</h3>

          <table className="w-full text-sm bg-gray-900 text-white border border-gray-700">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-2 py-1 text-left">Name</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {groupAssets.map((asset) => (
                <tr key={asset.id} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="px-2 py-1 cursor-pointer text-blue-400" onClick={() => onSelect(asset)}>
                    {asset.name}
                  </td>
                  <td>{asset.status}</td>
                  <td>{asset.assignedTo}</td>
                  <td>
                    <button onClick={() => onDelete(asset.id)} className="text-red-500 hover:text-red-700">🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
