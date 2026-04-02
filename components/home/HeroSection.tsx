import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black">
      
      {/* --- Background Image & Dark Overlay --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg"
          alt="Nigerian professional at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40 z-10" />
      </div>

      {/* --- Content: Center Aligned --- */}
      {/* Changed px-6 to px-4 for tighter mobile screens but added max-w to keep it safe */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-8 text-center">
        
        <span className="mb-6 block text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-secondary">
          Great services are delivered by great professionals
        </span>

        {/* Changed text-5xl to text-4xl for mobile */}
        <h1 className="text-white mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          Trusted Services. <br />
          <span className="text-white/70">Verified Professionals.</span>
        </h1>

        {/* Changed text-lg to text-base for mobile */}
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
          HelpMe NG connects you with reliable, verified experts for all your service needs. 
          Find the help you need, right when you need it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
            Download the App
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg text-white border-white hover:bg-white/10">
            How It Works
          </Button>
        </div>

        {/* Stats Section: Responsive stacking */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-t border-white/10 pt-10">
          <div className="text-center">
            <p className="font-bold text-white text-2xl md:text-3xl mb-1">5,000+</p>
            <p className="text-[10px] md:text-xs uppercase text-gray-400 font-semibold tracking-widest">Verified Experts</p>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-white/10" />
          
          <div className="text-center">
            <p className="font-bold text-white text-2xl md:text-3xl mb-1">20,000+</p>
            <p className="text-[10px] md:text-xs uppercase text-gray-400 font-semibold tracking-widest">Jobs Completed</p>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/10" />

          <div className="text-center">
            <p className="font-bold text-white text-2xl md:text-3xl mb-1">4.8/5</p>
            <p className="text-[10px] md:text-xs uppercase text-gray-400 font-semibold tracking-widest">Average Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
};