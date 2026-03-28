import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8 items-center">
        
        {/* Left Content: Text from Section 2.1 */}
        <div className="col-span-12 lg:col-span-6 z-10">
          <span className="section-label mb-4 block text-sm uppercase tracking-wider font-semibold">
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
            <p className="text-sm font-medium mb-2">
              Find a plumber, electrician, tutor, cleaner, or any professional you need.
            </p>
            <p className="text-sm text-gray-600">
              All experts are verified through our multi-tier trust system. Get multiple bids, negotiate prices, and pay securely.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">Download the App</Button>
            <Button variant="outline" size="lg">How It Works</Button>
          </div>
          
          {/* Trust Badges from Section 2.1 / 2.2 */}
          <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
            <div>
              <p className="font-bold text-primary text-2xl">5,000+</p>
              <p className="text-xs uppercase text-gray-500">Verified Experts</p>
            </div>
            <div>
              <p className="font-bold text-primary text-2xl">20,000+</p>
              <p className="text-xs uppercase text-gray-500">Jobs Completed</p>
            </div>
            <div>
              <p className="font-bold text-primary text-2xl">4.8/5</p>
              <p className="text-xs uppercase text-gray-500">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content: Visual Implementation */}
        <div className="col-span-12 lg:col-span-6 relative h-125 lg:h-150">
          {/* Visual: Full-bleed image of diverse Nigerian professionals */}
          <div className="absolute right-0 top-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg" 
              alt="Diverse Nigerian professionals: plumber, electrician, tutor" 
              fill 
              className="object-cover"
              priority
            />
            {/* Overlay Gradient as per brief */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating Verification Glass Chip (NIN/BVN from Section 2.2 Table) */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="text-[12px] font-bold">Accountability</p>
                <p className="text-[10px] text-gray-600">NIN, BVN & Background Checked</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}