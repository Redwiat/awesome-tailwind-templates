import React from "react";
export default function Landing() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6">
      <h2 className="text-2xl font-bold mb-2">Landing Page</h2>
      <p className="mb-4 text-gray-600">A modern SaaS/product landing page.</p>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Grow Your Business</h3>
          <p className="mb-4">Instantly launch your SaaS, app, or website with this open-source Tailwind landing page template.</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition">Get Started</button>
        </div>
        <img src="https://source.unsplash.com/400x200/?startup,website" alt="Landing" className="rounded-xl w-full md:w-80"/>
      </div>
    </section>
  );
}
