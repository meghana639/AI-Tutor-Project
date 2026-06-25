import React from 'react';
import { NavTab } from '../types';
import { LayoutDashboard, FileText, Users, BookOpen, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  const navItems = [
    { id: 'dashboard' as NavTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'evaluations' as NavTab, label: 'Evaluations', icon: FileText },
    { id: 'students' as NavTab, label: 'Students', icon: Users },
    { id: 'resources' as NavTab, label: 'Resources', icon: BookOpen },
    { id: 'settings' as NavTab, label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="bg-white border-r border-[#c1c6d5] h-screen w-64 flex flex-col fixed left-0 top-0 z-40 overflow-y-auto py-6 px-4 select-none shadow-sm md:shadow-none">
      <div className="mb-6 px-2 flex items-center justify-between">
        <h1 className="text-2xl font-black text-[#005ab4] tracking-tight">TutorMetrics</h1>
        <span className="text-[10px] bg-[#005ab4]/10 text-[#005ab4] font-extrabold px-1.5 py-0.5 rounded uppercase">Pro</span>
      </div>

      <nav className="flex-grow flex flex-col gap-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-150 ${
                isActive
                  ? 'text-[#005ab4] bg-[#005ab4]/10 font-bold border-r-4 border-[#005ab4]'
                  : 'text-[#414753] font-semibold hover:bg-gray-100 hover:text-[#181c22]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#005ab4]' : 'text-[#717785]'}`} />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 space-y-4 border-t border-[#c1c6d5]">
        <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-xl border border-gray-200">
          <img
            alt="Profile of Alex Rivers"
            className="w-10 h-10 rounded-full border-2 border-[#005ab4] object-cover bg-gray-200"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="overflow-hidden">
            <p className="font-bold text-[#181c22] text-sm truncate">Alex Rivers</p>
            <p className="text-xs text-[#717785] font-medium">Senior Tutor</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
