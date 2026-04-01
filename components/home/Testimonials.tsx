import React from 'react';
import { Card } from "../ui/Card";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

interface Testimonial {
  role: string;
  text: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  subtext?: string;
}

const DEFAULT_IMAGE = "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg";

const testimonials: Testimonial[] = [
  {
    role: "Client",
    text: "I needed a plumber urgently on a Sunday. Within 30 minutes, I had 4 bids. The plumber I hired was professional, on time, and the price was fair. Payment protection gave me peace of mind.",
    name: "Chinedu O.",
    location: "Lekki",
    rating: 5.0,
    image: DEFAULT_IMAGE
  },
  {
    role: "Expert",
    text: "Since joining HelpMe NG, I've gotten consistent work and I always get paid on time. The verification badge helps clients trust me. I've doubled my income.",
    name: "Adebayo S.",
    location: "Plumber",
    rating: 4.9,
    image: DEFAULT_IMAGE
  },
  {
    role: "TAS Agent",
    text: "I recruit plumbers and electricians from my community. Each one earns me ₦7,000 upfront plus ongoing commissions. I'm helping my people get work while earning a good income.",
    name: "Chidi E.",
    location: "TAS Agent",
    subtext: "🏆 Tier 3 Master TAS",
    rating: 5.0,
    image: DEFAULT_IMAGE
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-4 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-text-main font-display">
            Trusted by Thousands of Nigerians
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col h-full bg-surface border border-text-muted/10 shadow-ambient p-8 rounded-2xl transition-all duration-300">
              <div className="text-secondary/40 mb-6">
                <FaQuoteLeft size={32} />
              </div>
              
              <p className="text-text-muted text-sm leading-relaxed mb-8 flex-1 italic font-sans">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-text-muted/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main">{t.name}</h4>
                  <div className="flex flex-col">
                    <p className="text-[10px] uppercase tracking-wider text-primary font-bold">
                      {t.location}
                    </p>
                    {t.subtext && (
                      <p className="text-[9px] text-text-muted font-medium mt-0.5">{t.subtext}</p>
                    )}
                  </div>
                  <div className="flex gap-0.5 mt-1.5">
                    {[...Array(5)].map((_, starIdx) => (
                      <FaStar 
                        key={starIdx} 
                        size={10} 
                        className={starIdx < Math.floor(t.rating) ? "text-secondary" : "text-text-muted/20"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};