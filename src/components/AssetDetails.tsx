import React, { useState } from 'react';
import { Asset } from '../App';

interface Props {
  asset: Asset | null;
}

export default function AssetDetails({ asset }: Props) {
  const [ticket, setTicket] = useState('');

  const history = [
    { timestamp: '2025-01-01', action: 'Created', user: 'Admin', details: 'Initial creation' },
    { timestamp: '2025-06-10', action: 'Updated', user: 'Tech1', details: 'Scheduled maintenance' },
    { timestamp: '2025-07-15', action: 'Status Change', user: 'Admin', details: 'Marked as Active' },
  ];

  const submitTicket = () => {
    if (!asset) return;
    alert(`Ticket submitted for ${asset.name}: ${ticket}`);
    setTicket('');
  };

  if (!asset) return <p className="text-gray-300">Select an asset from the list to view details.</p>;

  return (
    <div className="p-6 bg-gray-800 text-white rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Asset Details - {asset.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
        <div><strong>Category:</strong> {asset.category}</div>
        <div><strong>Group:</strong> {asset.group}</div>
        <div><strong>Subgroup:</strong> {asset.subgroup}</div>
        <div><strong>Status:</strong> {asset.status}</div>
        <div><strong>Assigned To:</strong> {asset.assignedTo}</div>
        <div><strong>Location:</strong> {asset.locationId}</div>
        <div><strong>Department:</strong> {asset.department}</div>
        <div><strong>Vendor:</strong> {asset.vendor}</div>
        <div><strong>External ID:</strong> {asset.extid}</div>
        <div><strong>Purchase Date:</strong> {asset.purchaseDate}</div>
        <div><strong>Purchase Cost:</strong> ₹{asset.purchaseCost}</div>
        <div><strong>Expiry Date:</strong> {asset.expiryDate}</div>
        <div><strong>Expiry Alert On:</strong> {asset.expiryAlertOn}</div>
        <div><strong>Last Checked:</strong> {asset.lastCheckedAt}</div>
        <div><strong>Next Maintenance:</strong> {asset.nextMaintenanceAt}</div>
        <div><strong>Manufacturer:</strong> {asset.manufacturer}</div>
        <div><strong>Model No:</strong> {asset.modelNumber}</div>
        <div><strong>Serial No:</strong> {asset.serialNumber}</div>
        <div className="col-span-full"><strong>Notes:</strong> {asset.notes}</div>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">Asset History</h3>
      <table className="w-full text-sm mb-4">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-2">Date</th>
            <th className="p-2">Action</th>
            <th className="p-2">User</th>
            <th className="p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, idx) => (
            <tr key={idx} className="border-t border-gray-600">
              <td className="p-2">{entry.timestamp}</td>
              <td className="p-2">{entry.action}</td>
              <td className="p-2">{entry.user}</td>
              <td className="p-2">{entry.details}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-6 mb-2">Raise a Ticket</h3>
      <textarea
        value={ticket}
        onChange={(e) => setTicket(e.target.value)}
        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
        rows={3}
        placeholder="Describe the issue..."
      />
      <button
        onClick={submitTicket}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Submit Ticket
      </button>
    </div>
  );
}
