import AboutSection from "@/components/Homepage/About";
import HeroSection from "@/components/Homepage/Hero";
import InnovationSection from "@/components/Homepage/Innovation";
import StrategySection from "@/components/Homepage/Strategy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon, CheckIcon, ChevronDownIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
     

  
  
      
   

<HeroSection />
<StrategySection />
<InnovationSection/>
<AboutSection/>

    </div>
  );
}
