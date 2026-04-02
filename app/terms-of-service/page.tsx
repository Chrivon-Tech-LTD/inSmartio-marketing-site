import { Scale, Gavel, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-background pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-text-muted/10 pb-8">
          <h1 className="text-4xl md:text-6xl font-black text-primary font-display mb-4">Terms of Service</h1>
          <div className="flex gap-4">
            <span className="bg-success/10 text-success text-[10px] font-black px-3 py-1 rounded-full uppercase">v1.0 Official</span>
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-black font-display text-primary mb-6 flex items-center gap-3">
              <Scale size={24} /> 1. Platform Governance
            </h2>
            <p className="text-text-muted leading-relaxed font-medium">
              These terms constitute a legally binding agreement between you and CHRIVON TECH SOLUTIONS Limited[cite: 915]. Users must be at least 18 years old to access the marketplace[cite: 919, 920].
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10">
              <h3 className="font-black text-primary uppercase text-xs tracking-widest mb-4">Payment Protection</h3>
              <p className="text-sm text-text-muted font-medium mb-4">
                Escrow funds are held by HelpMe NG and released within 24 hours of client approval[cite: 1058, 1064].
              </p>
              <div className="flex items-center gap-2 text-success font-black text-[10px] uppercase">
                <CheckCircle size={14} /> 10% Platform Fee [cite: 1066]
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-secondary/5 border border-secondary/10">
              <h3 className="font-black text-secondary uppercase text-xs tracking-widest mb-4">Dispute Resolution</h3>
              <p className="text-sm text-text-muted font-medium mb-4">
                Disputes involve a 48-hour direct negotiation period followed by HelpMe NG mediation[cite: 1127].
              </p>
              <div className="flex items-center gap-2 text-secondary font-black text-[10px] uppercase">
                <Gavel size={14} /> Binding Arbitration (Lagos) [cite: 1225, 1226]
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}