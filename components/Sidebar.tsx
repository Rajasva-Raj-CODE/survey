"use client";

import { useState } from "react";
import { Layers, Activity, BarChart3, Users, Settings, Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  activeSubTab: string;
  onTabChange: (tab: string) => void;
  onSubTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, activeSubTab, onTabChange, onSubTabChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainTabs = [
    { value: "kwash", label: "K-WaSH Framework", icon: Layers },
    { value: "state", label: "State of WaSH Services", icon: Activity },
  ];

  const subTabs = [
    { value: "infrastructure", label: "Infrastructure & Technology", icon: BarChart3 },
    { value: "access", label: "Equitable Access", icon: Users },
    { value: "operations", label: "Operations & Management", icon: Settings },
    { value: "psychosocial", label: "Psychosocial Factors", icon: Brain },
  ];

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-border/40 bg-card/95 backdrop-blur transition-all duration-300",
          isCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-border/40 px-4">
            {!isCollapsed && (
              <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                K-WaSH Dashboard
              </h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="ml-auto"
            >
              {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
            </Button>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto p-4">
            <div className="space-y-1">
              {mainTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => onTabChange(tab.value)}
                    className={cn(
                      "flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-all",
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className={cn("h-5 w-5", isCollapsed ? "" : "mr-3")} />
                    {!isCollapsed && <span>{tab.label}</span>}
                  </button>
                );
              })}
            </div>

            {activeTab === "state" && (
              <>
                {!isCollapsed && (
                  <div className="pt-4 pb-2">
                    <h3 className="px-3 text-xs font-semibold uppercase text-muted-foreground">
                      Categories
                    </h3>
                  </div>
                )}
                <div className="space-y-1">
                  {subTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeSubTab === tab.value;
                    return (
                      <button
                        key={tab.value}
                        onClick={() => onSubTabChange(tab.value)}
                        className={cn(
                          "flex w-full items-center rounded-lg px-3 py-2 text-sm transition-all",
                          isActive
                            ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-sm"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                          !isCollapsed && "pl-6"
                        )}
                      >
                        <Icon className={cn("h-4 w-4", isCollapsed ? "" : "mr-3")} />
                        {!isCollapsed && <span className="text-xs">{tab.label}</span>}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </nav>
        </div>
      </aside>

      <div
        className={cn(
          "transition-all duration-300",
          isCollapsed ? "ml-16" : "ml-64"
        )}
      />
    </>
  );
}
