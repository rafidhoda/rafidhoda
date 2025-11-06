"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabNavigation, { TabType } from "@/components/TabNavigation";
import Recommendations from "@/components/Recommendations";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";

interface CompanyPageClientProps {
  companyData: { name: string; slug: string; headline: string; description: string };
}

export default function CompanyPageClient({ companyData }: CompanyPageClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>("recommendations");

  const renderTabContent = () => {
    switch (activeTab) {
      case "recommendations":
        return <Recommendations />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "achievements":
        return <Achievements />;
      default:
        return <Recommendations />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111] text-[#f1f1f1]">
      {/* Hero Section */}
      <section className="bg-[#111] py-20 px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {companyData.headline}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                {companyData.description}
              </p>
            </div>

            {/* Right Column - Video */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/rsk2Md1yOx4"
                title="Rafid Hoda Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

