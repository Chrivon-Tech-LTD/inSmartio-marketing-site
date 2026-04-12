'use client';

import React from 'react';
import { Card } from "../ui/Card";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  role: string;
  text: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  subtext?: string;
}

const testimonials: Testimonial[] = [
  {
    role: "Client",
    text: "I needed a plumber urgently on a Sunday. Within 30 minutes, I had 4 bids. The plumber I hired was professional, on time, and the price was fair. Payment protection gave me peace of mind.",
    name: "Chiamaka O.",
    location: "Lekki",
    rating: 5.0,
    image: "https://i.pinimg.com/1200x/1d/d1/7d/1dd17d3fd13e4f719c0ae4db99b470aa.jpg"
  },
  {
    role: "Expert",
    text: "Since joining HelpMe NG, I've gotten consistent work and I always get paid on time. The verification badge helps clients trust me. I've doubled my income.",
    name: "Adebayo S.",
    location: "Plumber",
    rating: 4.9,
    image: "https://i.pinimg.com/736x/fc/e6/93/fce693e4be192e6943e4a0fc3957a005.jpg"
  },
  {
    role: "TAS Agent",
    text: "I recruit plumbers and electricians from my community. Each one earns me ₦7,000 upfront plus ongoing commissions. I'm helping my people get work while earning a good income.",
    name: "Chidi E.",
    location: "TAS Agent",
    subtext: "🏆 Tier 3 Master TAS",
    rating: 5.0,
    image: "https://i.pinimg.com/736x/a1/3f/e5/a13fe593cd044397afc8ce5d47598333.jpg"
  }
];

export const Testimonials: React.FC = () => {
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
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-4 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-main font-display leading-tight">
            Trusted by Thousands <br className="md:hidden" /> of Nigerians
          </h2>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", duration: 0.8 } }
              }}
              className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <Card 
                className="group flex flex-col h-full bg-surface border border-text-muted/10 shadow-ambient p-6 md:p-8 rounded-2xl hover:border-secondary/30 transition-all duration-500"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="text-secondary/40 mb-4 md:mb-6 transition-colors group-hover:text-secondary"
                >
                  <FaQuoteLeft size={28} className="md:w-8 md:h-8" />
                </motion.div>
                
                <p className="text-text-muted text-sm leading-relaxed mb-8 flex-1 italic font-sans">
                  &quot;{t.text}&quot;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-text-muted/10 mt-auto">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-secondary/50 transition-colors"
                  >
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      fill 
                      className="object-cover"
                      sizes="48px"
                      unoptimized
                    />
                  </motion.div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-text-main truncate">{t.name}</h4>
                    <div className="flex flex-col">
                      <p className="text-[10px] uppercase tracking-wider text-primary font-bold truncate">
                        {t.location}
                      </p>
                      {t.subtext && (
                        <p className="text-[9px] text-text-muted font-medium mt-0.5 truncate">{t.subtext}</p>
                      )}
                    </div>
                    <div className="flex gap-0.5 mt-1.5">
                      {[...Array(5)].map((_, starIdx) => (
                        <motion.div
                          key={starIdx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + (starIdx * 0.1) }}
                        >
                          <FaStar 
                            size={10} 
                            className={starIdx < Math.floor(t.rating) ? "text-secondary" : "text-text-muted/20"} 
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};