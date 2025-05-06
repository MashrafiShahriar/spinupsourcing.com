// Protecting our planet Page
import { Metadata } from 'next';
import  ProtectingOurPlanet  from '@/components/Strategy/Protecting-Our-Planet/Description';
import HeroSection  from '@/components/Strategy/Protecting-Our-Planet/Hero';

export const metadata: Metadata = {
  title: 'Protecting Our Planet | Supply Chain Solutions',
  description: 'Discover our commitment to sustainability and eco-friendly practices in supply chain management.',
};
export default function ProtectingOurPlanetPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <HeroSection />
      <ProtectingOurPlanet />
    </div>
  );
}
//   return (