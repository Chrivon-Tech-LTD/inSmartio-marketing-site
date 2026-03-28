import React from 'react';

const partners = [
  "Lagos Chamber of Commerce",
  "Nigerian Women Entrepreneurs",
  "Trade Union Congress",
  "Small Business Association"
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-8">
          In Partnership With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner} className="text-sm md:text-lg font-bold text-primary text-center">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};