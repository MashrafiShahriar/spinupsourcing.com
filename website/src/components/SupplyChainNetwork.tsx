// components/SupplyChainNetwork.tsx
import React from "react";

export default function SupplyChainNetwork() {
  return (
    <svg 
      viewBox="0 0 800 400" 
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="800" height="400" fill="#f8fafc" />
      
      {/* Network lines */}
      <path
        d="M400,200 Q500,100 600,200 Q700,250 700,350"
        stroke="#cbd5e1"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,2"
      />
      <path
        d="M400,200 Q300,100 200,200 Q100,250 100,350"
        stroke="#cbd5e1"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,2"
      />
      <path
        d="M400,200 L400,350"
        stroke="#cbd5e1"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4,2"
      />
      
      {/* Nodes */}
      {/* Central Hub */}
      <circle cx="400" cy="200" r="20" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
      <text x="400" y="240" textAnchor="middle" fill="#1e40af" fontWeight="bold">Digital Hub</text>
      
      {/* Suppliers */}
      <circle cx="200" cy="200" r="15" fill="#10b981" stroke="#065f46" strokeWidth="2" />
      <text x="200" y="230" textAnchor="middle" fill="#065f46">Smart Suppliers</text>
      
      {/* Factories */}
      <rect x="550" y="175" width="30" height="30" rx="2" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
      <text x="565" y="215" textAnchor="middle" fill="#92400e">AI Factories</text>
      
      {/* Distribution */}
      <circle cx="100" cy="350" r="12" fill="#8b5cf6" stroke="#5b21b6" strokeWidth="2" />
      <text x="100" y="375" textAnchor="middle" fill="#5b21b6">Regional DCs</text>
      
      {/* Retail */}
      <rect x="400" y="335" width="24" height="24" rx="2" fill="#ec4899" stroke="#831843" strokeWidth="2" />
      <text x="400" y="375" textAnchor="middle" fill="#831843">Retail Nodes</text>
      
      {/* Last Mile */}
      <circle cx="700" cy="350" r="10" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
      <text x="700" y="375" textAnchor="middle" fill="#991b1b">Last Mile</text>
      
      {/* IoT Pulse Animation */}
      <circle cx="400" cy="200" r="5" fill="#93c5fd">
        <animate
          attributeName="r"
          values="5;20;5"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0;0"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}