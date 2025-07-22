import React from "react";
export default function Blog() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6">
      <h2 className="text-2xl font-bold mb-2">Blog/Article Page</h2>
      <article>
        <h3 className="text-xl font-semibold mb-2">How to Build With Tailwind CSS</h3>
        <p className="mb-4 text-gray-700">
          Learn how to use open-source Tailwind templates to launch your projects in minutes.  
          This is a great starting point for SaaS, portfolio, or startup sites!
        </p>
        <a href="#" className="text-blue-600 hover:underline">Read more...</a>
      </article>
    </section>
  );
}
