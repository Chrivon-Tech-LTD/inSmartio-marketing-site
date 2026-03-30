import React from 'react';
import { 
  UserPlus, 
  GraduationCap, 
  Share2, 
  Users, 
  BadgeCheck, 
  TrendingUp, 
  LucideIcon 
} from 'lucide-react';
import { Card } from '../ui/Card';

// Defining a type for our steps ensures TypeScript knows exactly what's inside
interface Step {
  title: string;
  icon: LucideIcon;
  desc: string;
}

const steps: Step[] = [
  { title: "Create Profile", icon: UserPlus, desc: "Sign up for a free TAS account and complete your agent verification." },
  { title: "Quick Training", icon: GraduationCap, desc: "Watch the 10-minute induction video on identifying top-tier experts." },
  { title: "Share Your Link", icon: Share2, desc: "Use our tools to invite high-quality professionals to the platform." },
  { title: "Expert Onboarding", icon: Users, desc: "Support your referrals as they complete their profile and verification." },
  { title: "First Match", icon: BadgeCheck, desc: "Receive your ₦7,000 bonus when they land their first paid project." },
  { title: "Scale Earnings", icon: TrendingUp, desc: "Monitor your recurring commissions and withdraw weekly to your bank." }
];

export const TASSteps: React.FC = () => {
  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">How to Become a TAS</h2>
        <p className="text-gray-500 mb-16">Six simple steps to start your recruitment journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            // Assign the icon component to a Capitalized variable so it can be used as a tag
            const IconComponent = step.icon;
            
            return (
              <Card key={i} className="p-8 border-none bg-white text-left hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};