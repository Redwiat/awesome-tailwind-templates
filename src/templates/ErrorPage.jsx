import React from "react";
export default function ErrorPage() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6 text-center">
      <h2 className="text-2xl font-bold mb-2">404 Error Page</h2>
      <p className="text-gray-600 mb-4">Oops! Page not found.</p>
      <a href="/" className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition">Go Home</a>
    </section>
  );
}
