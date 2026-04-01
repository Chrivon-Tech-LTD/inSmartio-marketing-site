import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { OfficeLocations } from "@/components/contact/OfficeLocations";

export const metadata = {
  title: "Contact HelpMe NG – Support, Partnerships, Inquiries",
  description: "Reach out to HelpMe NG for support, partnerships, or any questions. Email, phone, and office locations available.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background transition-colors duration-300 pt-24 md:pt-40 pb-20 px-4 md:px-6 overflow-hidden">
      
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-primary text-4xl md:text-7xl font-black mb-8 font-display tracking-tight leading-tight">
            Contact Us
          </h1>
          <p className="text-text-muted text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
            We’re here to help. Reach out to us for support, partnerships, or any questions. 
            Our dedicated team is ready to assist you in engineering your next success.
          </p>
        </div>

        {/* MAIN INTERACTION GRID */}
        {/* Responsive: Stacks on mobile, 3-col layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 items-start mb-24 md:mb-32">
          
          {/* Form Area (Priority 1) */}
          <div className="lg:col-span-2 order-1">
            <div className="p-1 md:p-2 bg-surface border border-text-muted/10 rounded-[2.5rem] shadow-ambient">
              <ContactForm />
            </div>
          </div>

          {/* Quick Contact Sidebar (Priority 2) */}
          <div className="space-y-6 order-2 lg:sticky lg:top-32">
            <ContactSidebar />
          </div>
        </div>

        {/* GEOGRAPHIC PRESENCE SECTION */}
        <div className="mb-24 md:mb-32">
          <div className="mb-12 md:mb-16 text-center lg:text-left border-l-4 border-primary pl-6 md:pl-8 inline-block">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
              Where to find us
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-text-main font-display tracking-tight">
              Our Local Presence
            </h2>
          </div>
          
          <div className="rounded-[3rem] overflow-hidden border border-text-muted/10 shadow-sm bg-surface">
            <OfficeLocations />
          </div>
        </div>

        {/* SYSTEM STATUS INDICATOR */}
        <div className="flex items-center justify-center gap-3 py-6 border-t border-text-muted/10 opacity-40">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-text-muted">
            Support Systems Active • Average Response: 2h
          </span>
        </div>
        
      </div>
    </main>
  );
}