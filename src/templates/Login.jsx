import React from "react";
export default function Login() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Login / Signup Form</h2>
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Email" type="email" required />
        <input className="border p-2 rounded" placeholder="Password" type="password" required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition">Login</button>
        <a href="#" className="text-blue-600 text-sm hover:underline text-right">Forgot Password?</a>
      </form>
      <p className="mt-2 text-sm text-gray-500">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a></p>
    </section>
  );
}
