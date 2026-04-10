import { ShieldCheck, Eye, ShieldAlert, Zap, Users, Repeat, LucideIcon, BadgeCheck, Lock, Clock4, Star, UserCheck, RefreshCw, Fingerprint, ScanFace, } from "lucide-react";

interface IllustrationIcon {
  icon: LucideIcon;
  size: number;
  className: string;
  position: string;
}

interface ValueItem {
  mainIcon: LucideIcon;
  floaters: IllustrationIcon[];
  title: string;
  desc: string;
}

// ── Value cards ────────────────────────────────────────────────────
const valuesData: ValueItem[] = [
  {
    mainIcon: ShieldCheck,
    floaters: [
      { icon: Fingerprint, size: 32, className: "text-primary/20", position: "top-4 left-5" },
      { icon: ScanFace, size: 24, className: "text-primary/15", position: "bottom-4 left-1/2" },
      { icon: BadgeCheck, size: 20, className: "text-secondary/40", position: "top-4 right-6" },
      { icon: Lock, size: 16, className: "text-primary/20", position: "bottom-4 right-8" },
    ],
    title: "Accountability",
    desc: "Every expert passes NIN, BVN, and background verification. Tier 3 experts have guarantors and police clearance.",
  },
  {
    mainIcon: Eye,
    floaters: [
      { icon: Star, size: 20, className: "text-secondary/50", position: "top-4 right-5" },
      { icon: Star, size: 13, className: "text-secondary/30", position: "bottom-5 left-6" },
      { icon: BadgeCheck, size: 16, className: "text-primary/20", position: "top-5 left-8" },
    ],
    title: "Transparency",
    desc: "See multiple bids, compare prices, read real reviews. No hidden fees.",
  },
  {
    mainIcon: ShieldAlert,
    floaters: [
      { icon: Clock4, size: 26, className: "text-primary/20", position: "top-4 left-5" },
      { icon: Lock, size: 16, className: "text-secondary/40", position: "bottom-4 right-5" },
      { icon: ShieldCheck, size: 13, className: "text-primary/15", position: "top-3 right-8" },
    ],
    title: "Reliability",
    desc: "Experts show up on time. Payment protection ensures you only pay when satisfied.",
  },
  {
    mainIcon: Zap,
    floaters: [
      { icon: Zap, size: 28, className: "text-secondary/40", position: "top-4 right-4" },
      { icon: Zap, size: 14, className: "text-secondary/25", position: "bottom-4 right-10" },
      { icon: BadgeCheck, size: 16, className: "text-primary/20", position: "bottom-3 left-5" },
    ],
    title: "Efficiency",
    desc: "Post a job in 3 minutes. Get bids in under an hour. Get work done fast.",
  },
  {
    mainIcon: Users,
    floaters: [
      { icon: UserCheck, size: 24, className: "text-primary/20", position: "top-4 right-5" },
      { icon: Star, size: 14, className: "text-secondary/50", position: "bottom-4 left-5" },
      { icon: Star, size: 11, className: "text-secondary/30", position: "top-3 left-10" },
    ],
    title: "Trust",
    desc: "Two-way review system holds everyone accountable. 24/7 dispute resolution.",
  },
  {
    mainIcon: Repeat,
    floaters: [
      { icon: RefreshCw, size: 22, className: "text-primary/20", position: "top-4 left-5" },
      { icon: Repeat, size: 14, className: "text-primary/15", position: "bottom-4 right-5" },
      { icon: BadgeCheck, size: 16, className: "text-secondary/40", position: "top-3 right-8" },
    ],
    title: "Consistency",
    desc: "Same quality every time. Build relationships with experts you trust.",
  },
];

// ─────────────────────────────────────────────────────────────────
export const Values = () => (
  <section className="relative py-16 md:py-28 bg-background transition-colors duration-300 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-176 md:h-176 bg-primary/8 blur-3xl rounded-full opacity-50 pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6">
      {/* HEADER */}
      <div className="text-center mb-12 md:mb-20">
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-primary bg-primary/8 px-4 py-1.5 rounded-full">
          Why Nigerians Trust HelpMe NG
        </span>
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-text-main leading-tight font-display">
          Built on Trust. <br />
          <span className="text-text-muted">Backed by Verification.</span>
        </h2>
      </div>

      {/* CLEAN GRID (All Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valuesData.map((item, i) => (
          <ValueCard key={i} item={item} />
        ))}
      </div>
    </div>
  </section>
);

const ValueCard = ({ item }: { item: ValueItem }) => {
  const { mainIcon: MainIcon, floaters, title, desc } = item;

  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
      <div className="relative bg-primary/6 flex items-center justify-center py-10 overflow-hidden">
        <div className="absolute w-28 h-28 rounded-full border border-primary/10" />
        <div className="absolute w-44 h-44 rounded-full border border-primary/6" />

        {floaters.map((f, i) => (
          <f.icon
            key={i}
            size={f.size}
            className={`absolute ${f.position} ${f.className}`}
          />
        ))}

        <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
          <MainIcon size={30} className="text-secondary" strokeWidth={1.75} />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-bold text-base md:text-lg text-text-main mb-2 font-display">{title}</h4>
        <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};