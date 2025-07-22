import React from "react";
export default function Dashboard() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6">
      <h2 className="text-2xl font-bold mb-2">SaaS Dashboard</h2>
      <p className="mb-4 text-gray-600">A free Tailwind admin panel/dashboard UI.</p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="mb-4 flex gap-4">
            <div className="bg-blue-100 text-blue-800 rounded-lg p-4 flex-1">
              <span className="block text-lg font-bold">1,209</span>
              <span className="block text-xs text-gray-500">Active Users</span>
            </div>
            <div className="bg-green-100 text-green-800 rounded-lg p-4 flex-1">
              <span className="block text-lg font-bold">$9,230</span>
              <span className="block text-xs text-gray-500">MRR</span>
            </div>
            <div className="bg-yellow-100 text-yellow-800 rounded-lg p-4 flex-1">
              <span className="block text-lg font-bold">99.9%</span>
              <span className="block text-xs text-gray-500">Uptime</span>
            </div>
          </div>
          <button className="bg-gray-800 text-white py-2 px-4 rounded font-semibold hover:bg-gray-900 transition">View Analytics</button>
        </div>
      </div>
    </section>
  );
}
