import React from "react";
export default function Portfolio() {
  return (
    <section className="rounded-xl shadow bg-white p-8 mb-6">
      <h2 className="text-2xl font-bold mb-2">Portfolio Page</h2>
      <p className="mb-4 text-gray-600">Showcase your work, projects, and skills.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="border rounded-xl p-4">
            <img src={`https://source.unsplash.com/300x120/?project,code,portfolio,design&sig=${i}`} alt="Project" className="mb-2 rounded"/>
            <h3 className="font-bold mb-1">Project {i}</h3>
            <p className="text-gray-500 text-sm">Description of your awesome project goes here.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
