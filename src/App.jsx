import React from "react";
import Landing from "./templates/Landing";
import Portfolio from "./templates/Portfolio";
import Dashboard from "./templates/Dashboard";
import Login from "./templates/Login";
import Pricing from "./templates/Pricing";
import Blog from "./templates/Blog";
import ErrorPage from "./templates/ErrorPage";
import Contact from "./templates/Contact";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        🚀 Awesome Tailwind Templates
      </h1>
      <div className="space-y-16">
        <Landing />
        <Portfolio />
        <Dashboard />
        <Login />
        <Pricing />
        <Blog />
        <ErrorPage />
        <Contact />
      </div>
      <footer className="mt-12 text-center text-gray-400">
        MIT &copy; {new Date().getFullYear()} Redwan (Redwiat)
      </footer>
    </div>
  );
}

export default App;
