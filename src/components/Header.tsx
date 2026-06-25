import React from 'react';
import { TutorProfile, TermOption } from '../types';
import { Search, ChevronDown, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  selectedTerm: TermOption;
  onTermChange: (term: TermOption) => void;
  tutors: TutorProfile[];
  selectedTutorId: string;
  onSelectTutor: (id: string) => void;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  selectedTerm,
  onTermChange,
  tutors,
  selectedTutorId,
  onSelectTutor,
  title,
}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center min-h-20 py-4 px-6 md:px-10 w-full sticky top-0 bg-white border-b border-[#c1c6d5] z-30 gap-4">
      <div className="flex flex-col">
        <span className="text-[11px] font-bold tracking-widest text-[#717785] uppercase">
          Tutor Performance Platform
        </span>
        <div className="flex items-center gap-3 mt-0.5">
          <h2 className="text-2xl font-bold text-[#181c22] capitalize">{title}</h2>
          <div className="relative inline-block">
            <select
              value={selectedTutorId}
              onChange={(e) => onSelectTutor(e.target.value)}
              className="bg-[#ebedf7] text-[#005ab4] font-bold text-xs py-1 pl-3 pr-8 rounded-full border border-[#c1c6d5] appearance-none focus:outline-none focus:ring-2 focus:ring-[#005ab4] cursor-pointer"
              title="Switch Tutor Profile"
            >
              {tutors.map((t) => (
                <option key={t.id} value={t.id}>
                  Viewing: {t.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#005ab4] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 border border-[#c1c6d5] w-full sm:w-64 focus-within:border-[#005ab4] focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-[#717785] mr-2 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent border-none outline-none text-sm w-full text-[#181c22] placeholder:text-[#717785]"
            placeholder="Search metrics or evaluations..."
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#f1f3fc] px-3 py-1.5 rounded-full border border-[#e0e2eb]">
            <span className="text-[#414753] font-bold text-xs shrink-0">Term:</span>
            <select
              value={selectedTerm}
              onChange={(e) => onTermChange(e.target.value as TermOption)}
              className="bg-transparent text-[#181c22] font-bold text-xs border-none outline-none cursor-pointer pr-1"
            >
              <option value="Spring 2025">Spring 2025</option>
              <option value="Fall 2024">Fall 2024</option>
              <option value="Summer 2024">Summer 2024</option>
            </select>
          </div>
          <span className="px-2.5 py-1 bg-[#005ab4] text-white rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm">
            Active
          </span>
        </div>
      </div>
    </header>
  );
};
