import React from 'react';

export const HowItWorksHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Breadcrumb / Label */}
        <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6 block">
          How It Works
        </span>

        {/* Main Headline from 3.1 */}
        <h1 className="text-primary text-4xl md:text-6xl font-bold leading-tight mb-6">
          How HelpMe NG Works <br />
          <span className="text-secondary">— Simple, Safe, and Fair.</span>
        </h1>

        {/* Subheadline from 3.1 */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Whether you need a service or offer one, we make it simple, safe, and fair. 
          We&apos;ve designed a seamless path for you to get things done, grow your business, 
          or earn through recruitment.
        </p>
      </div>
    </section>
  );
};