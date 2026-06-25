import React, { useState, useEffect } from 'react';
import { Search, Download, BookOpen, FileSpreadsheet, FileCode, FileText, ExternalLink, PlusCircle } from 'lucide-react';

interface ResourcesViewProps {
  searchTerm: string;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ searchTerm }) => {
  const [filterType, setFilterType] = useState<string>('All');
  const [resources, setResources] = useState<any[]>([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/resources")
    .then((res) => res.json())
    .then((data) => {
      setResources(data);
    })
    .catch((err) => {
      console.error("Resources API Error:", err);
    });
}, []);

  const types = ['All', 'Interactive Canvas', 'PDF Cheat Sheet', 'Excel Spreadsheet', 'Web Tool', 'Problem Bank'];

  const filteredResources = resources.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || item.type === filterType;
    return matchesSearch && matchesType;
  });

  const getIconForType = (type: string) => {
    if (type.includes('Canvas')) return <FileCode className="w-6 h-6 text-[#005ab4]" />;
    if (type.includes('PDF')) return <FileText className="w-6 h-6 text-[#ba1a1a]" />;
    if (type.includes('Spreadsheet')) return <FileSpreadsheet className="w-6 h-6 text-[#003d7a]" />;
    return <BookOpen className="w-6 h-6 text-[#964400]" />;
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1400px] mx-auto pb-12">
      <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-[#181c22]">Instructional Resources & Tools</h3>
          <p className="text-sm font-semibold text-[#717785]">
            Curated visual tools, interactive canvas sandboxes, and practice problems for live tutoring.
          </p>
        </div>
        <button
          onClick={() => alert('Upload resource dialog opened.')}
          className="px-5 py-2.5 bg-[#005ab4] text-white rounded-xl font-bold text-sm hover:bg-[#003d7a] transition-all flex items-center gap-2 shadow-sm shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Upload Resource</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 bg-white p-4 rounded-xl border-2 border-[#c1c6d5]">
        <span className="text-xs font-bold text-[#717785] px-2">Filter Format:</span>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilterType(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === t ? 'bg-[#005ab4] text-white shadow-sm' : 'bg-[#ebedf7] text-[#414753] hover:bg-[#d6e3ff]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-xl p-6 border-2 border-[#c1c6d5] hover:border-[#005ab4] transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#f1f3fc] rounded-xl border border-[#e0e2eb] group-hover:bg-[#d6e3ff] transition-colors">
                  {getIconForType(res.type)}
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#005ab4] bg-[#005ab4]/10 px-2.5 py-1 rounded-full">
                  {res.category}
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#181c22] group-hover:text-[#005ab4] transition-colors mb-2">
                {res.title}
              </h4>
              <p className="text-xs font-semibold text-[#717785]">{res.type}</p>
            </div>

            <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#717785]">{res.downloads} student downloads</span>
              <button
                onClick={() => alert(`Launching ${res.title}...`)}
                className="px-3.5 py-2 rounded-lg bg-[#ebedf7] text-[#005ab4] font-bold text-xs hover:bg-[#005ab4] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open Tool</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
