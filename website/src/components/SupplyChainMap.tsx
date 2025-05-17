// components/SupplyChainMap.tsx
import React from 'react';

const SupplyChainMap = () => {
  // Normalized coordinates (0-100% of SVG space)
  const locations = {
    headquarters: { x: 50, y: 50, type: 'hq' },
    suppliers: [
      { x: 30, y: 30, name: 'Berlin', type: 'supplier' },
      { x: 15, y: 50, name: 'New York', type: 'supplier' },
      { x: 70, y: 60, name: 'Shanghai', type: 'supplier' },
      { x: 65, y: 30, name: 'Mumbai', type: 'supplier' }
    ],
    materials: [
      { x: 25, y: 70, name: 'Chile', type: 'material' },
      { x: 75, y: 20, name: 'Indonesia', type: 'material' },
      { x: 80, y: 65, name: 'South Africa', type: 'material' }
    ]
  };

  return (
    <svg 
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-full"
    >
      {/* Background */}
      <rect width="100" height="100" fill="#f8fafc" />
      
      {/* Connection lines (from HQ to nodes) */}
      {[...locations.suppliers, ...locations.materials].map((node, i) => (
        <line
          key={`line-${i}`}
          x1={locations.headquarters.x}
          y1={locations.headquarters.y}
          x2={node.x}
          y2={node.y}
          stroke="#cbd5e1"
          strokeWidth="0.5"
          strokeDasharray="1,1"
        />
      ))}
      
      {/* Material nodes (squares) */}
      {locations.materials.map((node, i) => (
        <g key={`material-${i}`} transform={`translate(${node.x},${node.y})`}>
          <rect 
            x="-2.5" y="-2.5" 
            width="5" height="5" 
            fill="#f59e0b" 
            stroke="#92400e" 
            strokeWidth="0.3"
            rx="0.5"
          />
          <text
            x="0" y="7"
            textAnchor="middle"
            fontSize="3"
            fill="#92400e"
            fontWeight="bold"
          >
            {node.name}
          </text>
        </g>
      ))}
      
      {/* Supplier nodes (circles) */}
      {locations.suppliers.map((node, i) => (
        <g key={`supplier-${i}`} transform={`translate(${node.x},${node.y})`}>
          <circle 
            r="2.5" 
            fill="#10b981" 
            stroke="#065f46" 
            strokeWidth="0.3"
          />
          <text
            x="0" y="7"
            textAnchor="middle"
            fontSize="3"
            fill="#065f46"
            fontWeight="bold"
          >
            {node.name}
          </text>
        </g>
      ))}
      
      {/* Headquarters (star) */}
      <g transform={`translate(${locations.headquarters.x},${locations.headquarters.y})`}>
        <path
          d="M0,-3L1.2,1.2L3,0L1.2,1.2L0,3L-1.2,1.2L-3,0L-1.2,1.2Z"
          fill="#3b82f6"
          stroke="#1d4ed8"
          strokeWidth="0.3"
        />
        <text
          x="0" y="7"
          textAnchor="middle"
          fontSize="3"
          fill="#1d4ed8"
          fontWeight="bold"
        >
          HQ
        </text>
      </g>
      
      {/* World outline (simplified) */}
      <path
        d="M20,30 Q30,20 40,30 Q50,25 60,30 Q70,35 80,30 L85,40 L80,50 Q70,55 60,50 Q50,60 40,50 Q30,55 20,50 L15,40 Z"
        fill="#e2e8f0"
        stroke="#cbd5e1"
        strokeWidth="0.3"
      />
    </svg>
  );
};

export default SupplyChainMap;