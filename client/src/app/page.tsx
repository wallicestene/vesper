"use client";

import FeaturesContainer from "@/components/FeaturesContainer";
import HeroSection from "@/components/HeroSection";
import MetricsContainer from "@/components/MetricsContainer";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <MetricsContainer/>
      <FeaturesContainer/>
    </div>
  );
}
