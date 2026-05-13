"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ClientTab } from './tabs/ClientTab';
import { ExpertTab } from './tabs/ExpertTab';
import { TASTab } from './tabs/TASTab';

type TabType = 'client' | 'expert' | 'ta';

export const HowItWorksTabs: React.FC = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('client');

  useEffect(() => {
    const tab = searchParams.get('tab') as TabType;
    if (tab && ['client', 'expert', 'ta'].includes(tab)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab(tab);
    }
  }, [searchParams]);

  const tabs = [
    { id: 'client', label: 'For Clients' },
    { id: 'expert', label: 'For Experts' },
    { id: 'ta',     label: 'For TAS'     },
  ] as const;

  return (
    <div className="w-full bg-background transition-colors duration-300">
      {/* Segmented Control Switcher */}
      <div className="flex justify-center mb-16 md:mb-20 px-6">
        <div className="w-full max-w-2xl bg-surface p-1.5 rounded-2xl grid grid-cols-1 sm:flex sm:flex-row gap-2 border border-text-muted/10 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 md:px-8 py-3.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer w-full
                ${activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg scale-[1.02] sm:scale-105'
                  : 'text-text-muted hover:text-primary hover:bg-primary/5'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <div
          key={activeTab}
          className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-2"
        >
          {activeTab === 'client' && <ClientTab />}
          {activeTab === 'expert' && <ExpertTab />}
          {activeTab === 'ta'     && <TASTab />}
        </div>
      </div>
    </div>
  );
};