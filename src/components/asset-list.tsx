import React from 'react';
import  {Asset}  from '../App';

interface Props {
  assets: Asset[];
  onDelete: (id: number) => void;
  onSelect: (asset: Asset) => void;
}

export default function AssetList({ assets, onDelete, onSelect }: Props) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Asset List</h2>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Group</th>
            <th className="p-2">Subgroup</th>
            <th className="p-2">Status</th>
            <th className="p-2">Assigned To</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} className="border-t border-gray-600 hover:bg-gray-800">
              <td className="p-2 text-blue-400 cursor-pointer" onClick={() => onSelect(asset)}>
                {asset.name}
              </td>
              <td className="p-2">{asset.category}</td>
              <td className="p-2">{asset.group}</td>
              <td className="p-2">{asset.subgroup}</td>
              <td className="p-2">{asset.status}</td>
              <td className="p-2">{asset.assignedTo}</td>
              <td className="p-2">
                <button onClick={() => onDelete(asset.id)} className="text-red-500 hover:underline">🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
