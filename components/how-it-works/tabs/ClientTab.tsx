import React from 'react';
import Image from 'next/image';
import { 
  ClipboardEdit, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  Star 
} from 'lucide-react';

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

const clientSteps = [
  {
    id: 1,
    title: "Post",
    icon: <ClipboardEdit className="w-5 h-5 text-primary" />,
    desc: "Describe your task or project in detail. Set your budget and timeframe to attract the right experts across Nigeria."
  },
  {
    id: 2,
    title: "Bids",
    icon: <Users className="w-5 h-5 text-primary" />,
    desc: "Review competitive bids from verified professionals. Compare profiles, ratings, and past work history instantly."
  },
  {
    id: 3,
    title: "Negotiate",
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    desc: "Chat securely within the platform. Finalize terms, milestones, and deliverables before starting the project."
  },
  {
    id: 4,
    title: "Pay & Complete",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    desc: "Release funds only when you are 100% satisfied with the work. Our secure escrow system protects your investment."
  },
  {
    id: 5,
    title: "Review",
    icon: <Star className="w-5 h-5 text-primary" />,
    desc: "Share your experience. Your feedback helps maintain our high standards of service and builds the expert's reputation."
  }
];

export const ClientTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      {/* Left Column: Steps */}
      <div className="lg:col-span-5 space-y-12">
        {clientSteps.map((step) => (
          <div key={step.id} className="group flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              {step.id !== 5 && (
                <div className="w-px h-full bg-gray-100 mt-4" />
              )}
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-bold text-primary mb-3">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Visual Mockup */}
      <div className="lg:col-span-7 sticky top-32">
        <div className="relative aspect-4/3 w-full bg-gray-50 rounded-4xl p-4 shadow-inner border border-gray-100">
          {/* Main App Screenshot Mockup */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src={DEFAULT_IMAGE} 
              alt="HelpMe NG Client Dashboard" 
              fill 
              className="object-cover"
              unoptimized
            />
            {/* Dark Overlay to mimic the Dark Mode Dashboard in design */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>

          {/* Floating Escrow Secured Chip (From Design) */}
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4 max-w-xs animate-float">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-primary">Escrow Secured</p>
              <p className="text-[10px] text-gray-500 leading-tight">Payment held safely until delivery</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};