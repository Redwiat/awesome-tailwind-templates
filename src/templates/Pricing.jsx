import React from "react";
export default function Pricing() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6">
      <h2 className="text-2xl font-bold mb-2">Pricing Page</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { plan: "Starter", price: "$0", features: ["1 Project", "Community Support"] },
          { plan: "Pro", price: "$19/mo", features: ["Unlimited Projects", "Email Support"] },
          { plan: "Enterprise", price: "$99/mo", features: ["Dedicated Manager", "24/7 Support"] }
        ].map((item, idx) => (
          <div key={item.plan} className="border rounded-xl p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">{item.plan}</h3>
            <span className="text-2xl font-bold text-blue-600 mb-4">{item.price}</span>
            <ul className="mb-6 space-y-1 text-gray-600">
              {item.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded font-semibold hover:bg-blue-700 transition">Choose</button>
          </div>
        ))}
      </div>
    </section>
  );
}
