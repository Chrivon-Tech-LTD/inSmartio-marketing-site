// src/components/download/AppFeatures.tsx
import React from "react";
import { PlusCircle, Bell, MessageSquare, ShieldCheck, MapPin, Star } from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactElement; 
}

const features: Feature[] = [
  { title: "Post a Job", desc: "Describe what you need, add photos, set budget.", icon: <PlusCircle /> },
  { title: "Get Bids", desc: "Receive quotes from verified experts in real-time.", icon: <Bell /> },
  { title: "Negotiate", desc: "Message experts and agree on price inside our encrypted chat.", icon: <MessageSquare /> },
  { title: "Pay Securely", desc: "Escrow protection ensures your funds are safe until the job is done.", icon: <ShieldCheck /> },
  { title: "Track Progress", desc: "Know exactly when your expert is on the way with live tracking.", icon: <MapPin /> },
  { title: "Leave Reviews", desc: "Share your experience and help others find the best talent.", icon: <Star /> },
];

export function AppFeatures() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="mb-4">Mastering your day is just a tap away</h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          We’ve distilled the entire marketplace experience into a powerful, lightweight mobile companion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="editorial-card p-8 group hover:border-primary! transition-all duration-300">
            <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              {/* FIX: Use React.cloneElement with proper casting */}
              {React.cloneElement(f.icon, { size: 24 } as React.Attributes & { size: number })}
            </div>
            <h4 className="mb-3 text-text-main">{f.title}</h4>
            <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}