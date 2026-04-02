import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { TrendingUp, BadgeCheck, Building2, Headset, Code2 } from 'lucide-react';

interface AddOn {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}

const addOns: AddOn[] = [
  {
    title: "Featured Expert Listing",
    price: "₦5,000/month",
    description: "Your profile appears at the top of search results (in view)",
    icon: <TrendingUp className="text-secondary w-6 h-6" />
  },
  {
    title: "Verified Badge Upgrade",
    price: "₦5,000 (one-time)",
    description: "Upgrade from Tier 2 to Tier 3 (Expert+)",
    icon: <BadgeCheck className="text-secondary w-6 h-6" />
  },
  {
    title: "Business Account",
    price: "₦15,000/month",
    description: "Multi-user access, invoicing, analytics dashboard (in view)",
    icon: <Building2 className="text-secondary w-6 h-6" />
  },
  {
    title: "Priority Support",
    price: "₦2,500/month",
    description: "24/7 priority support, dedicated account manager (in view)",
    icon: <Headset className="text-secondary w-6 h-6" />
  },
  {
    title: "API Access",
    price: "Custom",
    description: "For enterprises and large businesses (in view)",
    icon: <Code2 className="text-secondary w-6 h-6" />
  }
];

export const AddOns: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Responsive alignment */}
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-display tracking-tight">
            Enhance Your Experience
          </h2>
          <p className="text-text-muted font-medium text-sm md:text-base max-w-xl mx-auto md:mx-0">
            Add-on services for experts and businesses to grow faster.
          </p>
        </div>

        {/* Add-ons Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((item, index) => (
            <Card 
              key={index} 
              className="p-5 md:p-6 border border-text-muted/10 bg-surface shadow-sm hover:shadow-ambient transition-all duration-300 group flex h-full"
            >
              <div className="flex flex-row items-start gap-4 w-full">
                {/* Icon Container - Scaled for mobile */}
                <div className="p-2.5 md:p-3 bg-secondary/10 rounded-xl shrink-0 transition-colors group-hover:bg-secondary/20">
                  {/* Cloned to ensure responsive icon sizing if needed */}
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-text-main text-base md:text-lg font-display truncate">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-secondary font-black text-xs md:text-sm mb-3 uppercase tracking-wider">
                    {item.price}
                  </p>
                  
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-5 font-sans line-clamp-3">
                    {item.description}
                  </p>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto text-primary text-xs md:text-sm font-bold hover:bg-transparent hover:underline transition-all inline-flex items-center"
                  >
                    Add to plan +
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};