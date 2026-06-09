'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AppStoreButtons } from '../ui/AppStoreButtons';

export const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-end justify-center pt-30 overflow-hidden bg-black">

      {/* Background image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/final.png"
          alt="Nigerian professional at work"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent z-10" />
      </motion.div>

      {/* Floating rating badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-20 right-8 z-30 hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="text-secondary fill-secondary" />
          ))}
        </div>
        <div>
          <p className="text-white text-xs font-bold leading-none mb-0.5">4.8 / 5.0</p>
          <p className="text-white/50 text-[10px]">12,400+ reviews</p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24"
      >

        {/* Eyebrow */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold text-secondary">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 24 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-px bg-secondary"
            />
            Great services are delivered by great professionals
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-white mb-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight max-w-4xl"
        >
          Trusted<br />
          Services.<br />
          <span className="text-white/40">Verified<br />Professionals.</span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20 mt-10 pt-8 border-t border-white/10"
        >

          {/* Left: description + CTAs */}
          <div className="lg:max-w-md">
            <p className="text-white/60 mb-8 text-base md:text-lg leading-relaxed">
              inSmartio connects you with reliable, verified experts for all your service needs — right when you need them.
            </p>

            <div className="flex flex-col gap-5">

              {/* Row 1: Download App + How It Works */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Link href="/download">
                  <Button variant="primary" size="lg" className="px-8 py-4 text-sm font-bold uppercase tracking-widest">
                    Download the App
                  </Button>
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors group border border-white/40 hover:border-white px-6 py-4 rounded-lg"
                >
                  How It Works
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Row 2: Store badges */}
              <AppStoreButtons align="left" size="sm" />

            </div>
          </div>

          {/* Right: stats */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 lg:ml-auto">
            {[
              { value: "5,000+", label: "Verified Experts" },
              { value: "20,000+", label: "Jobs Completed" },
              { value: "99%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
                className="text-left"
              >
                <p className="font-bold text-white text-3xl md:text-4xl font-display leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase text-white/40 font-semibold tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};