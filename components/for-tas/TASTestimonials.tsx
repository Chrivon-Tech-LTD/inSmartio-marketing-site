import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The TAS program changed how I view networking. I've recruited over 40 graphic designers and developers, and the recurring commission covers my monthly rent. It's truly passive income.",
    author: "Adelayo Tunde",
    role: "Senior TAS Agent, Lagos",
    image: "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg"
  },
  {
    quote: "HelpMe NG provides the best support for agents. The training is straightforward, and the dashboard tools make it so easy to track who has completed their verification.",
    author: "Emeka Okafor",
    role: "Master TAS Agent, Abuja",
    image: "https://i.pinimg.com/1200x/41/df/1d/41df1d25cd9d6b931b40af70c6f863b3.jpg"
  }
];

export const TASTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-16">Voices of Our Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] relative">
              <Quote className="text-secondary opacity-20 absolute top-8 right-8" size={48} />
              <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                   <Image src={t.image} alt={t.author} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{t.author}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};