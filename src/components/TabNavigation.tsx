"use client";

export type TabType = "recommendations" | "experience" | "skills" | "achievements";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string; color: string }[] = [
  { id: "recommendations", label: "Recommendations", color: "amber" },
  { id: "experience", label: "Experience", color: "slate" },
  { id: "skills", label: "Skills", color: "purple" },
  { id: "achievements", label: "Achievements", color: "yellow" },
];

const colorClasses = {
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    activeBg: "bg-amber-500/20",
  },
  slate: {
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    text: "text-slate-300",
    activeBg: "bg-slate-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    activeBg: "bg-purple-500/20",
  },
  yellow: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    text: "text-yellow-400",
    activeBg: "bg-yellow-500/20",
  },
};

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const activeColor = tabs.find((tab) => tab.id === activeTab)?.color || "amber";
  const colors = colorClasses[activeColor as keyof typeof colorClasses];

  return (
    <div className={`${colors.bg} ${colors.border} border rounded-lg p-1 mb-8`}>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const tabColors = colorClasses[tab.color as keyof typeof colorClasses];
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-6 py-3 rounded-md font-medium text-sm transition-all duration-300
                ${isActive 
                  ? `${tabColors.activeBg} ${tabColors.text} shadow-lg` 
                  : `${tabColors.bg} text-gray-400 hover:text-gray-300`
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

