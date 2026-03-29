import React from "react";
import {
  ClipboardEdit,
  Users,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../ui/Button";

const steps = [
  {
    id: 1,
    icon: ClipboardEdit,
    title: "Post Your Job",
    description: "Tell us what you need, add photos, set your budget.",
  },
  {
    id: 2,
    icon: Users,
    title: "Receive Bids",
    description: "Verified experts in your area send you quotes.",
  },
  {
    id: 3,
    icon: MessageSquare,
    title: "Choose & Negotiate",
    description: "Compare bids, message experts, agree on price.",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Get It Done",
    description:
      "Expert completes the work. Pay securely and leave a review.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-175 h-175 bg-primary/10 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Get Help in{" "}
            <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            From posting a job to getting it done — fast, simple and secure.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isUp = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col items-center text-center ${
                    isUp ? "md:-translate-y-10" : "md:translate-y-10"
                  }`}
                >

                  {/* NODE */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* STEP NUMBER BADGE */}
                  <div className="absolute top-0 right-0 translate-x-3 -translate-y-3 bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {step.id}
                  </div>

                  {/* CARD */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button size="lg">
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
};