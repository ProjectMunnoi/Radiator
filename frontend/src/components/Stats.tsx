import React from "react";

const Stats = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="p-8 rounded-lg shadow-md">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">Our Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow text-center">
            <h3 className="text-white text-xl font-semibold mb-2">Users</h3>
            <p className="text-yellow-300 text-5xl font-bold">1,234</p>
          </div>
          <div className="p-6 rounded-lg shadow text-center">
            <h3 className="text-white text-xl font-semibold mb-2">Projects</h3>
            <p className="text-yellow-300 text-5xl font-bold">567</p>
          </div>
          <div className="p-6 rounded-lg shadow text-center">
            <h3 className="text-white text-xl font-semibold mb-2">Contributors</h3>
            <p className="text-yellow-300 text-5xl font-bold">89</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
