"use client";

import React, { useState, useRef } from 'react';
import { 
  Download, UserCheck, FileEdit, ShieldCheck, Clock, Coins,
  ArrowRight, UserRoundCheck, Briefcase, LucideIcon, Check
} from 'lucide-react';
import { motion, useInView, Variants, AnimatePresence } from 'framer-motion';
interface Step {
  title: string;
  icon: LucideIcon;
  desc: string;
}

const steps: Step[] = [
  { title: "Download the App", icon: Download, desc: "Get the inSmartio app on your iOS or Android device to begin your journey." },
  { title: "Select TAS Role", icon: UserCheck, desc: "Choose 'TAS' during registration or apply via 'Expert Mode' in your profile settings." },
  { title: "Application Form", icon: FileEdit, desc: "Complete the detailed application form with your professional recruitment background." },
  { title: "Submit Documents", icon: ShieldCheck, desc: "Upload your mandatory NIN and a valid ID for our trust-based verification process." },
  { title: "Wait for Approval", icon: Clock, desc: "Our verification team will review your application and documents within 24–48 hours." },
  { title: "Start Recruiting", icon: Coins, desc: "Once approved, access your dashboard tools and start earning recruitment commissions." }
];

/* ── Animation Variants ────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

export const TASSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const onboardingRef = useRef(null);
  const stepperRef = useRef(null);
  const isOnboardingInView = useInView(onboardingRef, { once: true, margin: "-100px" });
  const isStepperInView = useInView(stepperRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── ONBOARDING PATHS ── */}
        <div className="mb-24" ref={onboardingRef}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isOnboardingInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="block mb-3 font-bold text-secondary uppercase tracking-[0.2em] text-[10px]">
              Onboarding Paths
            </span>
            <h2 className="text-text-main font-display text-4xl font-bold">
              How to Become a TAS
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { type: 'expert', icon: UserRoundCheck, title: "Existing Expert", color: 'primary', desc: " Apply in-app. Your expert history helps your application." },
              { type: 'dedicated', icon: Briefcase, title: "Dedicated TAS", color: 'secondary', desc: "Register as TAS directly. Focus solely on recruitment." }
            ].map((path, i) => (
              <motion.div
                key={path.type}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                animate={isOnboardingInView ? "visible" : "hidden"}
                whileHover={{ y: -5 }}
                className="group p-6 md:p-10 bg-surface rounded-3xl border border-border hover:shadow-ambient transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-${path.color}/10 rounded-2xl text-${path.color}`}>
                    <path.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-main">{path.title}</h3>
                </div>
                <p className="text-text-muted leading-relaxed mb-8 text-sm">
                  {path.desc}
                </p>
               
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── STEPPER ── */}
        <motion.div 
          ref={stepperRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isStepperInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-surface rounded-[3rem] px-6 py-10 md:p-16 shadow-sm relative overflow-hidden"
        >
          <div className="mb-12 relative z-10">
            <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-secondary mb-2">
              Standard 6-Step Verification
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-main">
              The Enrollment Process
            </h3>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden md:block relative z-10">
            <div className="relative flex items-start justify-between mb-10">
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-border z-0" />
              <motion.div
                className="absolute top-7 left-0 h-0.5 bg-primary z-0"
                initial={{ width: 0 }}
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />

              {steps.map((step, i) => {
                const Icon = step.icon;
                const done = i < activeStep;
                const active = i === activeStep;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="relative z-10 flex flex-col items-center gap-3 group/step cursor-pointer"
                    style={{ width: `${100 / steps.length}%` }}
                  >
                    <motion.div
                      layout
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm
                        ${done ? 'bg-primary border-primary text-white' : active ? 'bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/25' : 'bg-background border-border text-text-muted group-hover/step:border-primary/40'}
                      `}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={done ? 'check' : 'icon'}
                          initial={{ opacity: 0, rotate: -20 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 20 }}
                        >
                          {done ? <Check size={20} /> : <Icon size={20} />}
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                    <span className={`text-xs font-bold text-center leading-tight transition-colors px-1 ${active ? 'text-primary' : done ? 'text-text-main' : 'text-text-muted'}`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail Panel */}
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-4 p-8 rounded-2xl bg-background border border-border flex items-start gap-6"
            >
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg"
              >
                {React.createElement(steps[activeStep].icon, { size: 24 })}
              </motion.div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-secondary block mb-2">Step {activeStep + 1} of {steps.length}</span>
                <h4 className="font-display text-xl font-bold text-text-main mb-2">{steps[activeStep].title}</h4>
                <p className="text-text-muted text-sm leading-relaxed max-w-xl">{steps[activeStep].desc}</p>
              </div>
              <div className="ml-auto flex gap-3 shrink-0">
                <button onClick={() => setActiveStep(s => Math.max(0, s - 1))} disabled={activeStep === 0} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-primary disabled:opacity-30 transition-all cursor-pointer">
                  <ArrowRight size={16} className="rotate-180" />
                </button>
                <button onClick={() => setActiveStep(s => Math.min(steps.length - 1, s + 1))} disabled={activeStep === steps.length - 1} className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:brightness-110 disabled:opacity-30 transition-all cursor-pointer">
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Mobile Stepper */}
          <div className="md:hidden relative z-10 space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const active = i === activeStep;
              return (
                <div key={i} onClick={() => setActiveStep(i)} className="flex gap-5 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${i <= activeStep ? 'bg-primary border-primary text-white' : 'bg-background border-border text-text-muted'}`}>
                      {i < activeStep ? <Check size={16} /> : <Icon size={16} />}
                    </div>
                    {i !== steps.length - 1 && <div className={`w-0.5 flex-1 my-1 min-h-8 ${i < activeStep ? 'bg-primary' : 'bg-border'}`} />}
                  </div>
                  <div className="pb-4">
                    <h4 className={`font-display font-bold text-base ${active ? 'text-primary' : 'text-text-main'}`}>{step.title}</h4>
                    <AnimatePresence>
                      {active && (
                        <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-sm text-text-muted mt-1 overflow-hidden">
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};