"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Check } from 'lucide-react';

interface PricingTier {
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  category?: string;
}

const clientPlan: PricingTier = {
  plan: "Free Client",
  price: "₦0",
  category: "For Clients",
  features: ["Post jobs", "Receive bids", "Negotiate", "Hire", "Review"]
};

const expertPlans: PricingTier[] = [
  {
    plan: "Starter Expert",
    price: "₦0/month",
    category: "For Experts",
    features: ["Model 2: 10% commission", "Unlimited bids", "Digital payments only"]
  },
  {
    plan: "Pro Expert",
    price: "₦10,000/month",
    category: "For Experts",
    isPopular: true,
    features: ["Model 1: 0% commission", "10 bids/month", "Cash allowed", "Max ₦50,000/job"]
  }
];

const tasPlans: PricingTier[] = [
  { plan: "Associate TAS", price: "Free", features: ["Base commission rates", "0-9 experts"] },
  { plan: "Senior TAS", price: "Free", features: ["+5% bonus", "10-24 experts"] },
  { plan: "Master TAS", price: "Free", features: ["+10% bonus", "Recruit sub-TAS", "25-49 experts"] },
  { plan: "Regional Lead", price: "Free", features: ["+15% bonus", "Higher overrides", "50+ experts"] }
];

export const Pricing: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight font-display">
            Choose Your Perfect Plan
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-sm md:text-base">
            Flexible options for clients, experts, and businesses. Start with what you need and scale as you grow.
          </p>
        </motion.div>

        {/* ══ CLIENT & EXPERT ROW ══ */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 items-stretch">
            
            {/* Client Card */}
            <motion.div variants={cardSlideUp} className="flex flex-col">
              <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 md:mb-6 text-center lg:text-left">
                Free Always
              </h3>
              <PricingCard tier={clientPlan} />
            </motion.div>

            {/* Expert Cards */}
            {expertPlans.map((tier, index) => (
              <motion.div key={tier.plan} variants={cardSlideUp} className="flex flex-col">
                <h3 className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 md:mb-6 text-center lg:text-left">
                  {index === 0 ? "For Experts" : "\u00A0"}
                </h3>
                <PricingCard tier={tier} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ TAS SECTION ══ */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 md:pt-16 border-t border-text-muted/10"
        >
          <h3 className="text-xl font-bold mb-8 md:mb-10 text-center text-primary font-display">
            TAS Growth Tiers
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {tasPlans.map((tier) => (
              <motion.div key={tier.plan} variants={cardSlideUp}>
                <PricingCard tier={tier} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

// Animation variants for the cards
const cardSlideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => {
  const isPopular = tier.isPopular;

  return (
    <Card className={`
      p-6 md:p-8 flex flex-col h-full border-2 transition-all duration-500 hover:shadow-ambient relative
      ${isPopular 
        ? 'border-primary bg-primary shadow-2xl lg:scale-105 z-10' 
        : 'border-text-muted/10 bg-surface shadow-sm'}
    `}>
      {isPopular && (
        <motion.span 
          initial={{ y: 10, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -top-4 left-1/2 bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg z-20 whitespace-nowrap"
        >
          Recommended
        </motion.span>
      )}
      
      <div className="mb-6 md:mb-8">
        <h4 className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 ${isPopular ? 'text-white/60' : 'text-text-muted'}`}>
          {tier.plan}
        </h4>
        <div className={`text-3xl md:text-4xl font-black font-display ${isPopular ? 'text-white' : 'text-primary'}`}>
          {tier.price}
        </div>
      </div>

      <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
        {tier.features.map((feature, idx) => (
          <motion.li 
            key={feature}
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="flex gap-3 text-sm items-start"
          >
            <Check 
              size={18} 
              className={`shrink-0 mt-0.5 ${isPopular ? 'text-secondary' : 'text-primary'}`} 
            />
            <span className={`leading-tight font-medium ${isPopular ? 'text-white/90' : 'text-text-muted'}`}>
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      <Button 
        variant={isPopular ? "secondary" : "primary"} 
        className={`w-full py-5 md:py-6 font-bold uppercase tracking-widest text-[10px] md:text-[11px] ${isPopular ? 'hover:brightness-110 shadow-xl' : ''}`}
      >
        Get Started
      </Button>
    </Card>
  );
};