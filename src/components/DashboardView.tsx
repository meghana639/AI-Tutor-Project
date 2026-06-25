import React, { useState, useEffect } from 'react';
import { TutorProfile, NavTab } from '../types';
import { Star, History, Users, ArrowUp, Sparkles, CheckCircle2, TrendingUp, Award, ChevronRight } from 'lucide-react';

interface DashboardViewProps {
  tutor: TutorProfile;
  onNavigateTab: (tab: NavTab) => void;
  searchTerm: string;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ tutor, onNavigateTab, searchTerm }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, text: string) => {
    setActiveTooltip(text);
    setTooltipPos({ x: e.clientX, y: e.clientY - 40 });
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Filter evaluations if searchTerm is provided
  const filteredEvaluations = tutor.evaluations.filter(
    (ev) =>
      ev.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.feedback.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1400px] mx-auto pb-12">
      {/* Floating Tooltip */}
      {activeTooltip && (
        <div
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
          className="fixed pointer-events-none bg-[#111827] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl z-50 transform -translate-x-1/2 transition-opacity duration-150"
        >
          {activeTooltip}
        </div>
      )}

      {/* Top Bento Grid Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-4 bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center border-2 border-[#c1c6d5] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:border-[#005ab4] duration-200 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#005ab4]" />
          
          <div className="relative w-28 h-28 mb-4 mt-2">
            <div className="absolute inset-0 rounded-full border-4 border-[#005ab4] border-dotted animate-[spin_20s_linear_infinite]" />
            <div className="w-full h-full rounded-full bg-[#005ab4]/10 flex items-center justify-center border-4 border-white shadow-md">
              <span className="text-3xl font-black text-[#005ab4]">{tutor.initials}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#181c22]">{tutor.name}</h3>
          <p className="text-[#414753] font-semibold mb-2">{tutor.subject}</p>

          <div className="flex items-center gap-1.5 text-[#964400] mb-6 bg-[#ffdbc9]/40 px-4 py-1.5 rounded-full border border-[#ffdbc9]">
            <Star className="w-5 h-5 fill-[#964400]" />
            <span className="font-black text-2xl">{tutor.rating.toFixed(1)}</span>
            <span className="text-[#717785] font-bold text-base">/ 5.0</span>
          </div>

          <div className="w-full space-y-3">
            <div className="flex justify-between items-center py-3 border-t border-[#e0e2eb]">
              <div className="flex items-center gap-2 text-[#414753]">
                <History className="w-5 h-5 text-[#717785]" />
                <span className="text-sm font-semibold">Experience</span>
              </div>
              <span className="font-bold text-[#181c22]">{tutor.experienceYears} years</span>
            </div>

            <div className="flex justify-between items-center py-3 border-t border-[#e0e2eb]">
              <div className="flex items-center gap-2 text-[#414753]">
                <Users className="w-5 h-5 text-[#717785]" />
                <span className="text-sm font-semibold">Students</span>
              </div>
              <span className="font-bold text-[#181c22]">{tutor.totalStudents} total</span>
            </div>
          </div>
        </div>

        {/* Metrics & Performance Section */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Overall Performance Row */}
          <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] flex flex-col sm:flex-row items-center gap-8 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:border-[#005ab4] duration-200">
            <div className="w-32 h-32 rounded-full flex items-center justify-center relative shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#f3f4f6" strokeWidth="10" fill="transparent" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#005ab4"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * tutor.overallScore) / 100}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute text-center flex flex-col items-center">
                <span className="text-3xl font-black text-[#181c22] leading-none">{tutor.overallScore}</span>
                <span className="text-[10px] font-bold text-[#717785] mt-1">/ 100</span>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs font-black tracking-widest text-[#717785] mb-1">OVERALL PERFORMANCE SCORE</p>
              <h4 className="text-4xl font-black text-[#005ab4] mb-2">{tutor.performanceLabel}</h4>
              <p className="text-base sm:text-lg font-semibold text-[#414753] flex flex-wrap items-center justify-center sm:justify-start gap-1">
                <span>{tutor.rankText} ·</span>
                <span className="text-[#465f88] font-black flex items-center bg-[#d6e3ff] px-2 py-0.5 rounded text-sm">
                  {tutor.trendDelta}
                </span>
              </p>
            </div>
          </div>

          {/* Score Breakdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'SUBJECT KNOWLEDGE', score: tutor.metrics.subjectKnowledge },
              { label: 'COMMUNICATION', score: tutor.metrics.communication },
              { label: 'ENGAGEMENT', score: tutor.metrics.engagement },
              { label: 'CONFIDENCE', score: tutor.metrics.confidence },
            ].map((item, idx) => (
              <div
                key={idx}
                onMouseMove={(e) => handleMouseMove(e, `${item.label}: ${item.score}/100`)}
                onMouseLeave={handleMouseLeave}
                className="bg-white rounded-xl p-5 border-2 border-[#c1c6d5] transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#005ab4] cursor-pointer duration-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-black text-[#717785] uppercase tracking-wider">{item.label}</span>
                  <span className="font-black text-2xl text-[#005ab4]">{item.score}</span>
                </div>
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#005ab4] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts & Evaluations Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Performance Trend */}
        <div className="lg:col-span-8 bg-white rounded-xl p-8 border-2 border-[#c1c6d5] transition-all hover:shadow-xl hover:border-[#005ab4] duration-200 flex flex-col justify-between min-h-[360px]">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-black tracking-wider text-[#717785] uppercase">
              PERFORMANCE TREND — LAST 8 MONTHS
            </h4>
            <span className="text-xs font-semibold text-[#005ab4] bg-[#005ab4]/10 px-3 py-1 rounded-full">
              Cohort Avg: 78
            </span>
          </div>

          <div className="relative h-60 w-full pt-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 220">
              {/* Y Axis Labels */}
              <text x="-10" y="200" fill="#6B7280" fontSize="12" fontWeight="700" textAnchor="end">65</text>
              <text x="-10" y="110" fill="#6B7280" fontSize="12" fontWeight="700" textAnchor="end">80</text>
              <text x="-10" y="20" fill="#6B7280" fontSize="12" fontWeight="700" textAnchor="end">100</text>

              {/* Grid Lines */}
              <line x1="0" y1="200" x2="800" y2="200" stroke="#e5e7eb" strokeDasharray="3 3" />
              <line x1="0" y1="110" x2="800" y2="110" stroke="#e5e7eb" strokeDasharray="3 3" />
              <line x1="0" y1="20" x2="800" y2="20" stroke="#e5e7eb" strokeDasharray="3 3" />

              {/* Path Line generated dynamically from trend data */}
              {(() => {
                const points = tutor.trend.map((pt, i) => {
                  const x = 50 + (i * 700) / (tutor.trend.length - 1);
                  // Map score 65->200, 100->20
                  const y = 200 - ((pt.score - 65) / 35) * 180;
                  return `${x},${y}`;
                });
                return (
                  <path
                    d={`M ${points.join(' L ')}`}
                    fill="none"
                    stroke="#005ab4"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                );
              })()}

              {/* Interactive Circles */}
              {tutor.trend.map((pt, i) => {
                const x = 50 + (i * 700) / (tutor.trend.length - 1);
                const y = 200 - ((pt.score - 65) / 35) * 180;
                return (
                  <g key={i}>
                    <circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="#005ab4"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all hover:r-9"
                      onMouseMove={(e) => handleMouseMove(e, `${pt.month}: Score ${pt.score}`)}
                      onMouseLeave={handleMouseLeave}
                    />
                    {/* Month Label */}
                    <text x={x} y="225" fill="#6B7280" fontSize="12" fontWeight="700" textAnchor="middle">
                      {pt.month}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Recent Evaluations */}
        <div className="lg:col-span-4 bg-white rounded-xl p-8 border-2 border-[#c1c6d5] flex flex-col justify-between transition-all hover:shadow-xl hover:border-[#005ab4] duration-200">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-black tracking-wider text-[#717785] uppercase">RECENT EVALUATIONS</h4>
              <span className="text-xs text-[#717785]">{filteredEvaluations.length} items</span>
            </div>

            <div className="space-y-3">
              {filteredEvaluations.slice(0, 3).map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => onNavigateTab('evaluations')}
                  className="flex items-center gap-4 p-4 bg-[#f9f9ff] rounded-xl border border-[#e0e2eb] hover:border-[#005ab4] hover:bg-[#005ab4]/5 transition-all cursor-pointer group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#005ab4] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    {ev.studentInitials}
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="font-bold text-[#181c22] text-sm truncate">{ev.studentName}</p>
                    <p className="text-xs font-semibold text-[#717785] truncate">
                      {ev.date} · {ev.subject}
                    </p>
                  </div>
                  <div className="px-2.5 py-1 bg-white border-2 border-[#005ab4] text-[#005ab4] rounded-lg font-black text-base shadow-sm">
                    {ev.score}
                  </div>
                </div>
              ))}
              {filteredEvaluations.length === 0 && (
                <p className="text-sm text-gray-400 italic text-center py-4">No matching evaluations found.</p>
              )}
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('evaluations')}
            className="w-full mt-6 py-3 border-2 border-[#005ab4] text-[#005ab4] font-black rounded-xl hover:bg-[#005ab4] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>View All Evaluations</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1: AI Insights */}
        <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] transition-all hover:shadow-xl hover:border-[#005ab4] duration-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#005ab4]">
              <Sparkles className="w-5 h-5 fill-[#005ab4]/20 text-[#005ab4]" />
              <h4 className="text-xs font-black uppercase tracking-widest">AI INSIGHTS</h4>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[#005ab4]/5 rounded-xl border-l-8 border-[#005ab4]">
                <p className="text-[#414753] font-bold leading-relaxed italic text-sm">
                  {tutor.aiInsights.mainQuote}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border-l-8 border-[#465f88]">
                <p className="text-[#414753] font-bold leading-relaxed text-sm">
                  {tutor.aiInsights.retentionStat}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Strengths */}
        <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] transition-all hover:shadow-xl hover:border-[#005ab4] duration-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#465f88]">
              <CheckCircle2 className="w-5 h-5 text-[#465f88]" />
              <h4 className="text-xs font-black uppercase tracking-widest">STRENGTHS</h4>
            </div>
            <div className="space-y-5">
              {tutor.strengths.map((st, i) => (
                <div key={i} className="flex flex-col gap-1 pb-3 border-b border-gray-100 last:border-none last:pb-0">
                  <span className="font-black text-[#465f88] text-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#465f88]" />
                    {st.title}
                  </span>
                  <p className="text-[#414753] text-sm font-semibold pl-6">{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Improvements */}
        <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] transition-all hover:shadow-xl hover:border-[#005ab4] duration-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#ba1a1a]">
              <TrendingUp className="w-5 h-5 text-[#ba1a1a]" />
              <h4 className="text-xs font-black uppercase tracking-widest">IMPROVEMENTS</h4>
            </div>
            <div className="space-y-5">
              {tutor.improvements.map((imp, i) => (
                <div key={i} className="flex flex-col gap-1 pb-3 border-b border-gray-100 last:border-none last:pb-0">
                  <span className="font-black text-[#ba1a1a] text-sm">{imp.title}</span>
                  <p className="text-[#414753] text-sm font-semibold">{imp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
