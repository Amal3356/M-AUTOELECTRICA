import React, { useState } from 'react';
import './styles.css';
import ElectronicCard from './components/ElectronicCard';

const electronicsData = [
  {
    title: "Engine Control Unit (ECU)",
    description: "Manages engine parameters to ensure optimal performance.",
    image: "/images/ecu.jpg",
  },
  {
    title: "Anti-lock Braking System (ABS)",
    description: "Prevents wheel lock-up during emergency braking.",
    image: "/images/abs.jpg",
  },
  {
    title: "Airbag Control Module",
    description: "Deploys airbags during collision based on sensors.",
    image: "/images/airbags.jpg",
  },
];

function App() {
  const [filter, setFilter] = useState("");

  const filteredData = electronicsData.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Automotive Electronics</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="card-grid">
        {filteredData.map((item, index) => (
          <ElectronicCard key={index} {...item} />
        ))}
      </div>
      <button onClick={() => alert('More content coming soon!')}>Learn More</button>
    </div>
  );
}

export default App;