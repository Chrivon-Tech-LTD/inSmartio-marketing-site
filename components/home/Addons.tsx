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
    icon: <TrendingUp className="text-secondary" />
  },
  {
    title: "Verified Badge Upgrade",
    price: "₦5,000 (one-time)",
    description: "Upgrade from Tier 2 to Tier 3 (Expert+)",
    icon: <BadgeCheck className="text-secondary" />
  },
  {
    title: "Business Account",
    price: "₦15,000/month",
    description: "Multi-user access, invoicing, analytics dashboard (in view)",
    icon: <Building2 className="text-secondary" />
  },
  {
    title: "Priority Support",
    price: "₦2,500/month",
    description: "24/7 priority support, dedicated account manager (in view)",
    icon: <Headset className="text-secondary" />
  },
  {
    title: "API Access",
    price: "Custom",
    description: "For enterprises and large businesses (in view)",
    icon: <Code2 className="text-secondary" />
  }
];

export const AddOns: React.FC = () => {
  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline from 2.10 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">Enhance Your Experience</h2>
          <p className="text-text-muted">
            Add-on services for experts and businesses to grow faster.
          </p>
        </div>

        {/* Add-ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                  </div>
                  <p className="text-secondary font-bold text-sm mb-3">{item.price}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:bg-transparent hover:underline">
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