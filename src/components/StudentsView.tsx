import React, { useState, useEffect } from 'react';
import { Search, Mail, BookOpen, CheckCircle, Clock, AlertCircle, ExternalLink, UserPlus } from 'lucide-react';

interface StudentsViewProps {
  searchTerm: string;
}

export const StudentsView: React.FC<StudentsViewProps> = ({ searchTerm }) => {
  const [filterSubject, setFilterSubject] = useState<string>('All');
  const [students, setStudents] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => {
        console.error("Students API Error:", err);
      });
  }, []);

  const filteredStudents = students.filter((st) => {
    const matchesSearch =
      st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      st.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === 'All' || st.subject === filterSubject;
    return matchesSearch && matchesSubject;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return (
          <span className="flex items-center gap-1 bg-[#d6e3ff] text-[#00458d] px-2.5 py-1 rounded-full text-xs font-bold">
            <CheckCircle className="w-3 h-3" /> Active
          </span>
        );
      case 'On Leave':
        return (
          <span className="flex items-center gap-1 bg-[#e0e2eb] text-[#414753] px-2.5 py-1 rounded-full text-xs font-bold">
            <Clock className="w-3 h-3" /> On Leave
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 bg-[#ffdad6] text-[#93000a] px-2.5 py-1 rounded-full text-xs font-bold">
            <AlertCircle className="w-3 h-3" /> Needs Followup
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[1400px] mx-auto pb-12">
      <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-[#181c22]">Assigned Students</h3>
          <p className="text-sm font-semibold text-[#717785]">
            Manage current tutoring cohort, review grade trajectories, and track attendance.
          </p>
        </div>
        <button
          onClick={() => alert('Add student dialog opened.')}
          className="px-5 py-2.5 bg-[#005ab4] text-white rounded-xl font-bold text-sm hover:bg-[#003d7a] transition-all flex items-center gap-2 shadow-sm shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Enroll New Student</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border-2 border-[#c1c6d5] overflow-hidden shadow-sm">
        <div className="p-4 bg-[#f9f9ff] border-b border-[#e0e2eb] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#717785]">Subject:</span>
            {['All', 'Calculus', 'Algebra II', 'Statistics', 'Physics', 'Algorithms'].map((sub) => (
              <button
                key={sub}
                onClick={() => setFilterSubject(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  filterSubject === sub ? 'bg-[#005ab4] text-white' : 'text-[#414753] hover:bg-[#ebedf7]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
          <span className="text-xs font-bold text-[#717785]">{filteredStudents.length} students enrolled</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f1f3fc] border-b border-[#c1c6d5] text-[11px] font-black uppercase text-[#717785] tracking-wider">
                <th className="py-4 px-6">Student Name</th>
                <th className="py-4 px-6">Primary Subject</th>
                <th className="py-4 px-6">Current Grade</th>
                <th className="py-4 px-6">Total Sessions</th>
                <th className="py-4 px-6">Last Active</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e0e2eb] text-sm">
              {filteredStudents.map((st) => (
                <tr key={st.id} className="hover:bg-[#005ab4]/5 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#ebedf7] text-[#005ab4] font-black flex items-center justify-center border border-[#c1c6d5]">
                        {st.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#181c22]">{st.name}</p>
                        <p className="text-xs text-[#717785] font-medium">{st.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-[#005ab4]">{st.subject}</td>
                  <td className="py-4 px-6">
                    <span className="font-black px-2.5 py-1 rounded bg-gray-100 border border-gray-200 text-[#181c22]">
                      {st.grade}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-[#414753]">{st.sessions} sessions</td>
                  <td className="py-4 px-6 text-xs font-semibold text-[#717785]">{st.lastActive}</td>
                  <td className="py-4 px-6">{getStatusBadge(st.status)}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={`mailto:${st.email}`}
                        className="p-2 text-[#717785] hover:text-[#005ab4] hover:bg-white rounded-lg border border-transparent hover:border-[#c1c6d5] transition-all"
                        title="Send Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => alert(`Viewing full progress profile for ${st.name}`)}
                        className="p-2 text-[#717785] hover:text-[#005ab4] hover:bg-white rounded-lg border border-transparent hover:border-[#c1c6d5] transition-all"
                        title="View Records"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
