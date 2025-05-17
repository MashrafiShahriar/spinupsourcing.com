// components/CommunityImpactCard.tsx
import { ReactNode } from "react";

interface CommunityImpactCardProps {
  title: string;
  metric: string;
  description: string;
  icon: ReactNode;
}

export default function CommunityImpactCard({ 
  title, 
  metric, 
  description, 
  icon 
}: CommunityImpactCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-emerald-600 font-medium mb-3">{metric}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}