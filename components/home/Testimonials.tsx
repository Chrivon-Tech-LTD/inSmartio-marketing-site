import React from 'react';
import { Card } from "../ui/Card";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

interface Testimonial {
  role: string;
  text: string;
  name: string;
  location: string; // Used for location or professional title per document
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
    <section className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label uppercase tracking-widest text-sm font-bold text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary">
            Trusted by Thousands of Nigerians
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col h-full bg-white border-none shadow-xl p-8 rounded-2xl">
              <div className="text-primary/20 mb-6">
                <FaQuoteLeft size={32} />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 italic">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <div className="flex flex-col">
                    <p className="text-[10px] uppercase tracking-wider text-primary font-bold">
                      {t.location}
                    </p>
                    {t.subtext && (
                      <p className="text-[9px] text-gray-500 font-medium">{t.subtext}</p>
                    )}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, starIdx) => (
                      <FaStar 
                        key={starIdx} 
                        size={10} 
                        className={starIdx < Math.floor(t.rating) ? "text-yellow-500" : "text-gray-200"} 
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