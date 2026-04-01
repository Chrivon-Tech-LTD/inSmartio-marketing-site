import { ShieldCheck, Eye, ShieldAlert, Zap, Users, Repeat, LucideIcon } from "lucide-react";

interface ValueItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  featured?: boolean;
}

const values: ValueItem[] = [
  {
    icon: ShieldCheck,
    title: "Accountability",
    desc: "Every expert passes NIN, BVN, and background verification. Tier 3 experts have guarantors and police clearance.",
    featured: true,
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "See multiple bids, compare prices, read real reviews. No hidden fees.",
  },
  {
    icon: ShieldAlert,
    title: "Reliability",
    desc: "Experts show up on time. Payment protection ensures you only pay when satisfied.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    desc: "Post a job in 3 minutes. Get bids in under an hour. Get work done fast.",
  },
  {
    icon: Users,
    title: "Trust",
    desc: "Two-way review system holds everyone accountable. 24/7 dispute resolution.",
  },
  {
    icon: Repeat,
    title: "Consistency",
    desc: "Same quality every time. Build relationships with experts you trust.",
  },
];

export const Values = () => {
  const featured = values.find((v) => v.featured);
  const others = values.filter((v) => !v.featured);

  return (
    <section className="relative py-28 bg-background transition-colors duration-300 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-primary/10 blur-3xl rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-secondary bg-secondary/10 px-4 py-1 rounded-full">
            Why Nigerians Trust HelpMe NG
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-text-main">
            Built on Trust. <br />
            <span className="text-text-muted">Backed by Verification.</span>
          </h2>
        </div>

        {/* FEATURED CARD */}
        {featured && (
          <div className="mb-10 p-8 rounded-2xl bg-surface border border-text-muted/10 flex flex-col md:flex-row items-start gap-6 hover:shadow-2xl">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-secondary/10">
              <featured.icon className="text-secondary w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-2">
                {featured.title}
              </h3>
              <p className="text-text-muted max-w-2xl">
                {featured.desc}
              </p>
            </div>
          </div>
        )}

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            {others.slice(0, 2).map((v, i) => (
              <Card key={i} {...v} large />
            ))}
          </div>

          <div className="col-span-12 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {others.slice(2).map((v, i) => (
              <Card key={i} {...v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* CARD COMPONENT */
interface CardProps extends Omit<ValueItem, "featured"> {
  large?: boolean;
}

const Card = ({ icon: Icon, title, desc, large = false }: CardProps) => {
  return (
    <div
      className={`
      bg-surface border border-text-muted/10 rounded-2xl p-6 
      shadow-md hover:shadow-xl transition-all duration-300 
      ${large ? "h-full" : ""}
    `}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/10 mb-4">
        <Icon className="text-secondary w-6 h-6" />
      </div>

      <h4 className="font-bold text-lg text-text-main mb-2 font-display">
        {title}
      </h4>

      <p className="text-sm text-text-muted leading-relaxed">
        {desc}
      </p>
    </div>
  );
};