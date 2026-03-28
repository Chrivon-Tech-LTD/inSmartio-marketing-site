import React from 'react';
import Image from 'next/image';
import { AppStoreButtons } from '../ui/AppStoreButtons';

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

export const AppDownload: React.FC = () => {
  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Content Side */}
            <div className="p-8 md:p-16 lg:p-20 text-white">
              <span className="section-label text-secondary mb-6 block uppercase tracking-widest text-xs font-bold">
                Get HelpMe NG Today
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Download the app and find trusted professionals in minutes.
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Available on iOS and Android. Start your journey toward reliable services or earn as a verified professional.
              </p>

              <AppStoreButtons align='left'/>
            </div>

            {/* QR Code & Visual Side */}
            <div className="relative h-full min-h-100 bg-white/5 flex items-center justify-center p-12">
              <div className="absolute inset-0 opacity-20">
                <Image 
                  src={DEFAULT_IMAGE}
                  alt="Background pattern"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                {/* QR Code Placeholder (Center) */}
                <div className="bg-white p-4 rounded-2xl shadow-ambient mb-6">
                  <div className="w-48 h-48 bg-gray-100 flex items-center justify-center border-2 border-dashed border-primary/20 rounded-lg">
                    <p className="text-primary text-xs font-bold text-center px-4">
                      QR Code linking to App Store
                    </p>
                  </div>
                </div>
                <p className="text-white/60 text-xs font-medium uppercase tracking-widest">
                  Scan to download
                </p>
              </div>

              {/* Decorative floating phone element (optional aesthetic) */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};