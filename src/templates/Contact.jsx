import React from "react";
export default function Contact() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Contact Page</h2>
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Your Name" required />
        <input className="border p-2 rounded" placeholder="Your Email" required />
        <textarea className="border p-2 rounded" placeholder="Your Message" required />
        <button className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition">Send</button>
      </form>
    </section>
  );
}
