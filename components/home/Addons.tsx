import React from 'react';
import { Card } from '../ui/Card';
import { TrendingUp, BadgeCheck, Building2, Headset, Code2, ArrowRight } from 'lucide-react';

interface AddOn {
  title: string;
  price: string;
  priceNote: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const addOns: AddOn[] = [
  {
    title: "Featured Listing",
    price: "₦5,000",
    priceNote: "per month",
    description: "Your profile appears at the top of search results — maximum visibility to clients actively hiring.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    title: "Verified Badge Upgrade",
    price: "₦5,000",
    priceNote: "one-time",
    description: "Upgrade from Tier 2 to Tier 3 Expert+. Unlock unlimited job values and priority trust signals.",
    icon: <BadgeCheck className="w-5 h-5" />,
    highlight: true,
  },
  {
    title: "Business Account",
    price: "₦15,000",
    priceNote: "per month",
    description: "Multi-user access, invoicing tools, and a full analytics dashboard for your team.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Priority Support",
    price: "₦2,500",
    priceNote: "per month",
    description: "24/7 dedicated support with a named account manager. Skip the queue, every time.",
    icon: <Headset className="w-5 h-5" />,
  },
  {
    title: "API Access",
    price: "Custom",
    priceNote: "enterprise",
    description: "Integrate HelpMe NG directly into your platform. Built for large-scale operations.",
    icon: <Code2 className="w-5 h-5" />,
  },
];

export const AddOns: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-secondary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Add-ons
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight leading-tight">
              Enhance Your<br className="hidden md:block" /> Experience
            </h2>
          </div>
          <p className="text-text-muted text-sm md:text-base max-w-xs leading-relaxed">
            Powerful extras for experts and businesses ready to grow faster on the platform.
          </p>
        </div>

        {/* 
          Layout: 
          - Row 1: 3 cards 
          - Row 2: 2 cards centered 
          Using a CSS trick: max-w on the bottom row wrapper 
        */}
        <div className="space-y-5">

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOns.slice(0, 3).map((item, index) => (
              <AddOnCard key={index} item={item} />
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto">
            {addOns.slice(3).map((item, index) => (
              <AddOnCard key={index + 3} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

function AddOnCard({ item }: { item: AddOn }) {
  return (
    <Card
      className={`
        group relative flex flex-col p-6 md:p-7 rounded-2xl border transition-all duration-300
        hover:-translate-y-1 hover:shadow-ambient
        ${item.highlight
          ? 'bg-primary border-primary'
          : 'bg-surface border-border hover:border-primary/30'
        }
      `}
    >
      {/* Top row: icon + price */}
      <div className="flex items-start justify-between mb-5">
        {/* Icon */}
        <div
          className={`
            p-2.5 rounded-xl
            ${item.highlight
              ? 'bg-white/15 text-white'
              : 'bg-secondary/10 text-secondary'
            }
          `}
        >
          {item.icon}
        </div>

        {/* Price pill */}
        <div className="text-right">
          <div
            className={`text-lg font-black font-display leading-none
              ${item.highlight ? 'text-secondary' : 'text-primary'}
            `}
          >
            {item.price}
          </div>
          <div
            className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5
              ${item.highlight ? 'text-white/60' : 'text-text-muted'}
            `}
          >
            {item.priceNote}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-base md:text-lg font-display mb-2 leading-snug
          ${item.highlight ? 'text-white' : 'text-text-main'}
        `}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed flex-1 mb-6
          ${item.highlight ? 'text-white/70' : 'text-text-muted'}
        `}
      >
        {item.description}
      </p>

      {/* CTA */}
      <button
        className={`
          group/btn inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider
          transition-all duration-200 w-fit
          ${item.highlight
            ? 'text-secondary hover:gap-2.5'
            : 'text-primary hover:gap-2.5'
          }
        `}
      >
        Add to plan
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      </button>
    </Card>
  );
}