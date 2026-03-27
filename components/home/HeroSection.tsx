import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero =() =>{
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 items-center">
        
        {/* Left Content: The Scale of Authority */}
        <div className="col-span-12 lg:col-span-6 z-10">
          <span className="section-label mb-4 block">Verified Professionals Only</span>
          <h1 className="text-primary mb-6">
            Trusted Services. <br />
            <span className="text-(--on-surface-variant)">Verified Professionals.</span>
          </h1>
          <p className="body-large text-text-muted mb-10 max-w-lg">
            HelpMe NG connects you with reliable, verified experts for all your service needs—from plumbers to tutors[cite: 41, 44]. 
            Every professional is vetted through our multi-tier trust system[cite: 45].
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">Find an Expert</Button>
            <Button variant="outline" size="lg">How It Works</Button>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex items-center gap-8 border-t border-(--text-secondary)/10 pt-8">
            <div>
              <p className="font-bold text-primary text-xl">5,000+</p>
              <p className="small-text">Verified Experts [cite: 58]</p>
            </div>
            <div>
              <p className="font-bold text-primary text-xl">20,000+</p>
              <p className="small-text">Jobs Completed [cite: 59]</p>
            </div>
          </div>
        </div>

        {/* Right Content: Intentional Asymmetry */}
        <div className="col-span-12 lg:col-span-6 relative h-125 lg:h-150">
          {/* Main Editorial Image */}
          <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-ambient">
            <Image 
              src="/images/hero-bg.jpg" 
              alt="Nigerian Professional" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          {/* Overlapping Secondary Image */}
          <div className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-ambient border-8 border-surface">
            <Image 
              src="/images/hero-secondary.jpg" 
              alt="Expert at Work" 
              fill 
              className="object-cover"
            />
          </div>
          {/* Floating Verification Glass Chip */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 glass-panel p-4 rounded-xl shadow-ambient animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">✔</div>
              <div>
                <p className="text-[12px] font-bold">Identity Verified</p>
                <p className="text-[10px] text-gray-500">NIN & BVN Checked [cite: 48]</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}