"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import KWashFramework from "@/components/survey/KWashFramework";
import InfrastructureTech from "@/components/survey/InfrastructureTech";
import EquitableAccess from "@/components/survey/EquitableAccess";
import OperationsManagement from "@/components/survey/OperationsManagement";
import PsychosocialFactors from "@/components/survey/PsychosocialFactors";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("kwash");
  const [activeSubTab, setActiveSubTab] = useState("infrastructure");

  const renderContent = () => {
    if (activeTab === "kwash") {
      return <KWashFramework />;
    }

    if (activeTab === "state") {
      switch (activeSubTab) {
        case "infrastructure":
          return <InfrastructureTech />;
        case "access":
          return <EquitableAccess />;
        case "operations":
          return <OperationsManagement />;
        case "psychosocial":
          return <PsychosocialFactors />;
        default:
          return <InfrastructureTech />;
      }
    }

    return null;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-[999px] bg-blue-200/30 blur-3xl" />
      </div>

      <Sidebar
        activeTab={activeTab}
        activeSubTab={activeSubTab}
        onTabChange={setActiveTab}
        onSubTabChange={setActiveSubTab}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="h-full py-8 px-6 md:px-10">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">
              Water Sanitation & Hygiene at Kumbh Mela 2025
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive dashboard for monitoring WaSH services
            </p>
          </div>

          <div className="rounded-lg border border-border/40 bg-card/80 backdrop-blur shadow-lg p-6">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
