/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavTab, TermOption, TutorProfile } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { EvaluationsView } from './components/EvaluationsView';
import { StudentsView } from './components/StudentsView';
import { ResourcesView } from './components/ResourcesView';
import { SettingsView } from './components/SettingsView';

export default function App() {
  const [tutors, setTutors] = useState<TutorProfile[]>([]);
  const [selectedTutorId, setSelectedTutorId] = useState<string>('1');
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTerm, setSelectedTerm] =
    useState<TermOption>('Spring 2025');

  useEffect(() => {
    fetch('http://localhost:5000/api/dashboard')
      .then((res) => res.json())
      .then((data) => {
        setTutors([data]);
      })
      .catch((err) => {
        console.error('API Error:', err);
      });
  }, []);

  const currentTutor =
    tutors.find((t) => t.id === selectedTutorId) || tutors[0];

  if (!currentTutor) {
    return <div className="p-10">Loading...</div>;
  }

  const handleUpdateTutor = (updated: TutorProfile) => {
    setTutors((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
  };

  const getPageTitle = (tab: NavTab) => {
    switch (tab) {
      case 'dashboard':
        return 'Performance dashboard';
      case 'evaluations':
        return 'Student evaluations';
      case 'students':
        return 'Enrolled student roster';
      case 'resources':
        return 'Instructional resources';
      case 'settings':
        return 'Account & platform preferences';
      default:
        return 'Performance dashboard';
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f9f9ff] text-[#181c22] font-sans antialiased selection:bg-[#005ab4] selection:text-white">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setSearchTerm('');
        }}
      />

      <div className="flex-grow md:ml-64 flex flex-col min-h-screen w-full">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedTerm={selectedTerm}
          onTermChange={setSelectedTerm}
          tutors={tutors}
          selectedTutorId={selectedTutorId}
          onSelectTutor={(id) => {
            setSelectedTutorId(id);
          }}
          title={getPageTitle(activeTab)}
        />

        <main className="p-6 md:p-10 flex flex-col gap-6 flex-grow overflow-x-hidden">
          {activeTab === 'dashboard' && (
            <DashboardView
              tutor={currentTutor}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                setSearchTerm('');
              }}
              searchTerm={searchTerm}
            />
          )}

          {activeTab === 'evaluations' && (
            <EvaluationsView
              tutor={currentTutor}
              searchTerm={searchTerm}
            />
          )}

          {activeTab === 'students' && (
            <StudentsView searchTerm={searchTerm} />
          )}

          {activeTab === 'resources' && (
            <ResourcesView searchTerm={searchTerm} />
          )}

          {activeTab === 'settings' && (
            <SettingsView
              tutor={currentTutor}
              onUpdateTutor={handleUpdateTutor}
            />
          )}
        </main>
      </div>
    </div>
  );
}