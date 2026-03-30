// src/app/contact/page.tsx
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { OfficeLocations } from "@/components/contact/OfficeLocations";

export const metadata = {
  title: "Contact HelpMe NG – Support, Partnerships, Inquiries",
  description: "Reach out to HelpMe NG for support, partnerships, or any questions. Email, phone, and office locations available.",
};


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-20">
          <span className="section-label block mb-4">Get In Touch</span>
          <h1 className="text-text-main mb-6">Contact Us</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            We’re here to help. Reach out to us for support, partnerships, or any questions. 
            Our dedicated team is ready to assist you.
          </p>
        </div>

        {/* Form and Quick Contact Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-32">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <ContactSidebar />
          </div>
        </div>

        {/* Office Presence Section */}
        <div className="mb-32">
          <div className="mb-12">
            <h2 className="text-center">Our Local Presence</h2>
          </div>
          <OfficeLocations />
        </div>

        
      </div>
    </main>
  );
}