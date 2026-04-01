import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-surface">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="col-span-12 lg:col-span-6 z-10">
          <span className="section-label mb-4 block text-sm uppercase tracking-wider font-semibold text-secondary">
            Great services are delivered by great professionals.
          </span>

          <h1 className="text-primary mb-6 text-4xl lg:text-6xl font-bold leading-tight">
            Trusted Services. <br />
            <span className="text-gray-500">Verified Professionals.</span>
          </h1>

          <p className="body-large text-text-muted mb-6 max-w-lg text-lg">
            HelpMe NG connects you with reliable, verified experts for all your service needs.
          </p>

          <p className="body-medium text-text-muted mb-10 max-w-lg italic border-l-4 border-primary pl-4">
            We had the vision to make finding trusted experts as easy and accessible as possible for everyone in Nigeria.
          </p>

          <div className="mb-10">
            <p className="text-sm font-medium mb-2 text-gray-900 dark:text-gray-300">
              Find a plumber, electrician, tutor, cleaner, or any professional you need.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              All experts are verified through our multi-tier trust system. Get multiple bids, negotiate prices, and pay securely.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">Download the App</Button>
            <Button variant="outline" size="lg">How It Works</Button>
          </div>

          {/* Stats Section */}
          <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
            <div className="flex flex-col items-center flex-1">
              <p className="font-bold text-primary text-2xl">5,000+</p>
              <p className="text-xs uppercase text-gray-500 font-medium">Verified Experts</p>
            </div>
            <div className="w-px h-10 bg-gray-200 mx-4" />
            <div className="flex flex-col items-center flex-1">
              <p className="font-bold text-primary text-2xl">20,000+</p>
              <p className="text-xs uppercase text-gray-500 font-medium">Jobs Completed</p>
            </div>
            <div className="w-px h-10 bg-gray-200 mx-4" />
            <div className="flex flex-col items-center flex-1">
              <p className="font-bold text-primary text-2xl">4.8/5</p>
              <p className="text-xs uppercase text-gray-500 font-medium">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content: Double Image Composition */}
        <div className="col-span-12 lg:col-span-6 relative mt-12 lg:mt-0">
          <div className="relative w-full aspect-square max-w-130 ml-auto">
            
            {/* Soft background glow specifically behind images */}
            <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full scale-110" />

            {/* Background Image (Top Left) - Stays slightly behind */}
            <div className="absolute top-0 left-0 w-[72%] h-[72%] rounded-3xl overflow-hidden shadow-xl border-[6px] border-white z-10 animate-[float_5s_ease-in-out_infinite] [animation-delay:1s]">
              <Image
                src="https://i.pinimg.com/736x/d6/ac/6d/d6ac6d5bd234d8676a7fb99d1d02eb42.jpg"
                alt="Nigerian professional at desk"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Foreground Image (Bottom Right) - Primary focus */}
            <div className="absolute bottom-0 right-0 w-[72%] h-[72%] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-20 animate-[float_5s_ease-in-out_infinite]">
              <Image
                src="https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg"
                alt="Nigerian electrician at work"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Verification Chip */}
            <div className="absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-50 z-30 animate-[float_6s_ease-in-out_infinite] [animation-delay:0.5s]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900 leading-tight">Verified Expert</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-tight font-medium uppercase tracking-wide">Accountability & Safety</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      
    </section>
  );
};