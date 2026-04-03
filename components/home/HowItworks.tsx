import React from "react";
import {
  ClipboardEdit,
  Users,
  MessageSquare,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface Step {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: ClipboardEdit,
    title: "Post Your Job",
    description: "Tell us what you need, add photos, set your budget.",
  },
  {
    id: 2,
    icon: Users,
    title: "Receive Bids",
    description: "Verified experts in your area send you quotes.",
  },
  {
    id: 3,
    icon: MessageSquare,
    title: "Choose & Negotiate",
    description: "Compare bids, message experts, agree on price.",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Get It Done",
    description: "Expert completes the work. Pay securely and leave a review.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-28 bg-background transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 md:w-175 md:h-175 bg-primary/10 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-text-main font-display leading-tight">
            Get Help in{" "}
            <span className="text-primary">
              4 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto text-sm md:text-base">
            From posting a job to getting it done — fast, simple and secure.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* CONNECTIVE LINE - Hidden on small mobile, visible as horizontal on MD+ */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-text-muted/10 -translate-y-1/2 z-0" />
          
          {/* CONNECTIVE LINE - Vertical for Mobile */}
          <div className="md:hidden absolute left-7.75 top-0 h-full w-0.5 bg-text-muted/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isUp = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-0 transition-transform duration-500 ${
                    isUp ? "md:-translate-y-10" : "md:translate-y-10"
                  }`}
                >
                  {/* NODE (Icon Container) */}
                  <div className="relative shrink-0 w-16 h-16 rounded-full bg-surface border border-text-muted/10 shadow-lg flex items-center justify-center mb-0 md:mb-8 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                    
                    {/* STEP NUMBER BADGE */}
                    <div className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface">
                      {step.id}
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="flex-1 bg-surface border border-text-muted/10 rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 group text-left md:text-center">
                    <h3 className="font-bold text-base md:text-lg text-text-main mb-2 font-display transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};