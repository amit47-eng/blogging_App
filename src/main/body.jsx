import React from "react";
import { FaUser } from "react-icons/fa";
import Post from './post';

function Body() {
  return (
    <main className="p-4 overflow-y-auto">
      <section id="about" className="mb-8">
        <div className="flex items-center space-x-2">
          <FaUser className="text-gray-700"/>
          <p className="text-gray-700">examperUserName</p>
        </div>
      </section>

      <section id="services">
        <Post 
          title="Benefits of Morning Exercise" 
          content="Exercising in the morning boosts your metabolism and improves mood throughout the day. It also helps in weight management and increases focus."
        />
        {/* Add more Post components as needed */}
      </section>
    </main>
  );
}

export default Body;
