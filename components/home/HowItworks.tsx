import React from 'react';
import { ClipboardEdit, Users, MessageSquare, CheckCircle2, LucideIcon } from 'lucide-react';
import { Button } from '../ui/Button';

interface Step {
  id: number;
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <ClipboardEdit className="w-8 h-8 text-primary" />,
    title: "Post Your Job",
    description: "Tell us what you need, add photos, set your budget."
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Receive Bids",
    description: "Verified experts in your area send you quotes."
  },
  {
    id: 3,
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Choose & Negotiate",
    description: "Compare bids, message experts, agree on price."
  },
  {
    id: 4,
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    title: "Get It Done",
    description: "Expert completes the work. Pay securely and leave a review."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline from 2.3 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get Help in 4 Simple Steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              {/* Step Icon Container */}
              <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-6 shadow-sm border border-primary/10">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-primary">
                {step.id}. {step.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-100 -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* CTA from 2.4 / 2.3 */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};