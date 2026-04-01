import React from 'react';

const partners = [
  "Lagos Chamber of Commerce",
  "Nigerian Women Entrepreneurs",
  "Trade Union Congress",
  "Small Business Association"
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-background border-y border-text-muted/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sub-label using theme-muted text */}
        <p className="text-center text-[10px] uppercase tracking-[0.3em] font-black text-text-muted mb-10">
          In Partnership With
        </p>

        {/* Partners Container */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 
                        opacity-50 grayscale hover:grayscale-0 hover:opacity-100 
                        transition-all duration-500 cursor-default">
          {partners.map((partner) => (
            <div 
              key={partner} 
              className="text-sm md:text-lg font-black text-primary text-center font-display tracking-tight"
            >
              {partner}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};