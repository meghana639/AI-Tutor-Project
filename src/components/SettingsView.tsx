import React, { useState, useEffect } from 'react';
import { TutorProfile } from '../types';
import { Save, Bell, Lock, User, Palette, ShieldCheck, Check } from 'lucide-react';

interface SettingsViewProps {
  tutor: TutorProfile;
  onUpdateTutor: (updated: TutorProfile) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ tutor, onUpdateTutor }) => {
  const [name, setName] = useState(tutor.name);
  const [subject, setSubject] = useState(tutor.subject);
  const [email, setEmail] = useState(tutor.email);
  const [bio, setBio] = useState(tutor.bio);
  const [saved, setSaved] = useState(false);

  // Notification toggles
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [studentFlags, setStudentFlags] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateTutor({
      ...tutor,
      name,
      subject,
      email,
      bio,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1000px] mx-auto pb-12">
      <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5]">
        <h3 className="text-2xl font-bold text-[#181c22]">Platform Settings</h3>
        <p className="text-sm font-semibold text-[#717785]">
          Configure instructor preferences, notification triggers, and profile visibility.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Profile Details Card */}
        <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-gray-100 text-[#005ab4]">
            <User className="w-5 h-5" />
            <h4 className="font-black uppercase tracking-wider text-xs">Instructor Profile</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#414753] uppercase mb-2">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#c1c6d5] font-bold text-sm text-[#181c22] focus:outline-none focus:border-[#005ab4] bg-[#f9f9ff]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#414753] uppercase mb-2">Primary Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#c1c6d5] font-bold text-sm text-[#181c22] focus:outline-none focus:border-[#005ab4] bg-[#f9f9ff]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#414753] uppercase mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#c1c6d5] font-bold text-sm text-[#181c22] focus:outline-none focus:border-[#005ab4] bg-[#f9f9ff]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#414753] uppercase mb-2">Professional Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg border border-[#c1c6d5] font-medium text-sm text-[#181c22] focus:outline-none focus:border-[#005ab4] bg-[#f9f9ff]"
            />
          </div>
        </div>

        {/* Notifications & Triggers Card */}
        <div className="bg-white rounded-xl p-8 border-2 border-[#c1c6d5] space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-gray-100 text-[#005ab4]">
            <Bell className="w-5 h-5" />
            <h4 className="font-black uppercase tracking-wider text-xs">Notification Triggers</h4>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Real-time Evaluation Alerts',
                desc: 'Receive immediate notifications when a student submits new feedback.',
                state: emailAlerts,
                setter: setEmailAlerts,
              },
              {
                title: 'Weekly Performance Digest',
                desc: 'Automated Monday morning PDF report of trend analytics and rankings.',
                state: weeklyDigest,
                setter: setWeeklyDigest,
              },
              {
                title: 'Adaptive Pacing Flags',
                desc: 'Alert when AI identifies student pacing concerns during live sessions.',
                state: studentFlags,
                setter: setStudentFlags,
              },
            ].map((pref, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-none">
                <div>
                  <p className="font-bold text-[#181c22] text-sm">{pref.title}</p>
                  <p className="text-xs text-[#717785] font-medium mt-0.5">{pref.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => pref.setter(!pref.state)}
                  className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                    pref.state ? 'bg-[#005ab4]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-md ${
                      pref.state ? 'left-[26px]' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          {saved && (
            <span className="flex items-center gap-1.5 text-xs font-bold text-[#005ab4] bg-[#005ab4]/10 px-3 py-1.5 rounded-lg">
              <Check className="w-4 h-4" /> Preferences Updated Successfully
            </span>
          )}
          <button
            type="submit"
            className="px-8 py-3 bg-[#005ab4] text-white rounded-xl font-bold text-sm hover:bg-[#003d7a] transition-all flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save All Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
