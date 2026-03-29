"use client";

import React, { useState } from 'react';
import  {ClientTab}  from './tabs/ClientTab';
import { ExpertTab } from './tabs/ExpertTab';
import { TASTab } from './tabs/TASTab';

type TabType = 'client' | 'expert' | 'ta';

export const HowItWorksTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('client');

  return (
    <div className="w-full">
      {/* Segmented Control Switcher */}
      <div className="flex justify-center mb-20">
        <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-2 border border-gray-200 shadow-inner">
          {(['client', 'expert', 'ta'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'text-gray-500 hover:text-primary'
                }
              `}
            >
              For {tab.charAt(0).toUpperCase() + tab.slice(1)}s
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content Rendering */}
      <div className="max-w-7xl mx-auto px-6">
        {activeTab === 'client' && <ClientTab />}
        {activeTab === 'expert' && <ExpertTab />}
        {activeTab === 'ta' && <TASTab />}
      </div>
    </div>
  );
};