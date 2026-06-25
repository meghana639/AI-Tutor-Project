import React, { useState, useEffect } from 'react';
import { TutorProfile } from '../types';
import { Star, MessageSquareQuote, Filter, Search, ThumbsUp, Calendar } from 'lucide-react';

interface EvaluationsViewProps {
  tutor: TutorProfile;
  searchTerm: string;
}

export const EvaluationsView: React.FC<EvaluationsViewProps> = ({ tutor, searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Calculus', 'Algebra II', 'Statistics', 'Linear Algebra', 'Physics'];

  const filteredEvaluations = tutor.evaluations.filter((ev) => {
    const matchesSearch =
      ev.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.feedback.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || ev.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1400px] mx-auto pb-12">
      <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-[#181c22]">Student Evaluations</h3>
          <p className="text-sm font-semibold text-[#717785]">
            Detailed qualitative feedback and scores submitted by students for {tutor.name}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-[#717785] mr-1" />
          <span className="text-xs font-bold text-[#717785] mr-2">Filter Topic:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#005ab4] text-white shadow-sm'
                  : 'bg-[#ebedf7] text-[#414753] hover:bg-[#d6e3ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvaluations.map((ev) => (
          <div
            key={ev.id}
            className="bg-white rounded-xl p-6 border-2 border-[#c1c6d5] hover:border-[#005ab4] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#005ab4] text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
                    {ev.studentInitials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#181c22] text-base">{ev.studentName}</h4>
                    <p className="text-xs font-semibold text-[#717785] flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3 h-3 text-[#717785]" />
                      {ev.date} · <span className="text-[#005ab4] font-bold">{ev.subject}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#ffdbc9]/40 border border-[#ffdbc9] px-3 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-[#964400] text-[#964400]" />
                  <span className="font-black text-base text-[#964400]">{ev.score}/100</span>
                </div>
              </div>

              <div className="p-4 bg-[#f9f9ff] rounded-xl border border-[#e0e2eb] my-3 relative">
                <MessageSquareQuote className="w-6 h-6 text-[#005ab4]/15 absolute top-3 right-3 pointer-events-none" />
                <p className="text-[#414753] font-medium text-sm leading-relaxed italic">"{ev.feedback}"</p>
              </div>
            </div>

            <div className="flex justify-end items-center pt-3 mt-2 border-t border-gray-100">
              <button className="flex items-center gap-1.5 text-xs font-bold text-[#717785] hover:text-[#005ab4] transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Helpful evaluation</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredEvaluations.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center border-2 border-[#c1c6d5]">
          <p className="text-lg font-bold text-[#717785]">No evaluations match your search criteria.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-4 px-4 py-2 bg-[#005ab4] text-white rounded-lg text-sm font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
