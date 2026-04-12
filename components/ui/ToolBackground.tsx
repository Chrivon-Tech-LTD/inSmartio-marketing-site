const TOOLS = [
  { id: "hammer",      svg: `<path d="M13.5 1.5L15 3l-3 3 1.5 1.5 5-5L17 1l-3.5.5zM2 20l8-8-1.5-1.5L1 19l1 1zm10-10L9.5 7.5 3 14l2.5 2.5L12 10z"/><rect x="14" y="2" width="3" height="8" rx="1" transform="rotate(45 14 2)"/>` },
  { id: "wrench",      svg: `<path d="M15.5 2a4.5 4.5 0 0 0-4.47 5.08L3 15.09V17a2 2 0 0 0 2 2h1.91l8.01-8.03A4.5 4.5 0 1 0 15.5 2zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>` },
  { id: "screwdriver", svg: `<path d="M21.71 3.29a1 1 0 0 0-1.42 0L8.5 15.08l-.63 2.13 2.13-.63L21.71 4.71a1 1 0 0 0 0-1.42zM7.5 17.5l-1 .29.29-1 9.5-9.5.71.71-9.5 9.5z"/><path d="M3 21h2v-2H3z"/>` },
  { id: "pipe",        svg: `<rect x="2" y="10" width="8" height="4" rx="1"/><rect x="10" y="6" width="4" height="12" rx="1"/><rect x="14" y="10" width="8" height="4" rx="1"/><rect x="10" y="2" width="4" height="4" rx="1"/>` },
  { id: "wire",        svg: `<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>` },
  { id: "glove",       svg: `<path d="M9 5V3a1 1 0 0 1 2 0v2h2V2a1 1 0 0 1 2 0v3h1a2 2 0 0 1 2 2v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a1 1 0 0 1 1-1h1V5a1 1 0 0 1 2 0v3h2V5z"/>` },
];

// Reduced to 14 icons, well spaced, smaller sizes
const GRID = [
  { top: 8,  left: 5,  toolIndex: 0, size: 28, anim: "drift1 12s", delay: 0,   rotate: 15  },
  { top: 5,  left: 30, toolIndex: 4, size: 24, anim: "drift2 14s", delay: 2,   rotate: -20 },
  { top: 10, left: 58, toolIndex: 2, size: 26, anim: "drift3 10s", delay: 1,   rotate: 40  },
  { top: 6,  left: 82, toolIndex: 5, size: 24, anim: "drift1 13s", delay: 3,   rotate: -10 },

  { top: 38, left: 12, toolIndex: 3, size: 26, anim: "drift2 11s", delay: 1.5, rotate: 60  },
  { top: 42, left: 45, toolIndex: 1, size: 28, anim: "drift3 13s", delay: 4,   rotate: -35 },
  { top: 35, left: 72, toolIndex: 0, size: 24, anim: "drift1 10s", delay: 0.5, rotate: 25  },
  { top: 40, left: 92, toolIndex: 4, size: 26, anim: "drift2 12s", delay: 2.5, rotate: -50 },

  { top: 68, left: 3,  toolIndex: 5, size: 24, anim: "drift3 11s", delay: 3.5, rotate: 70  },
  { top: 72, left: 25, toolIndex: 2, size: 28, anim: "drift1 14s", delay: 1,   rotate: -15 },
  { top: 65, left: 52, toolIndex: 4, size: 24, anim: "drift2 10s", delay: 2,   rotate: 45  },
  { top: 70, left: 76, toolIndex: 1, size: 26, anim: "drift3 12s", delay: 0.8, rotate: -60 },

  { top: 88, left: 18, toolIndex: 3, size: 24, anim: "drift1 13s", delay: 4.5, rotate: 30  },
  { top: 85, left: 88, toolIndex: 0, size: 26, anim: "drift2 11s", delay: 1.8, rotate: -25 },
];

export default function ToolBackground() {
  return (
    <>
      <style>{`
        @keyframes drift1 {
          0%   { transform: translate(0px,   0px)  rotate(var(--r)); }
          25%  { transform: translate(8px,  -12px) rotate(calc(var(--r) + 10deg)); }
          50%  { transform: translate(-6px,   9px) rotate(calc(var(--r) - 5deg)); }
          75%  { transform: translate(10px,   4px) rotate(calc(var(--r) + 7deg)); }
          100% { transform: translate(0px,   0px)  rotate(var(--r)); }
        }
        @keyframes drift2 {
          0%   { transform: translate(0px,  0px)  rotate(var(--r)); }
          30%  { transform: translate(-9px, 11px) rotate(calc(var(--r) - 11deg)); }
          60%  { transform: translate(8px,  -8px) rotate(calc(var(--r) +  8deg)); }
          100% { transform: translate(0px,  0px)  rotate(var(--r)); }
        }
        @keyframes drift3 {
          0%   { transform: translate(0px,   0px)  rotate(var(--r)); }
          20%  { transform: translate(12px,   8px) rotate(calc(var(--r) + 14deg)); }
          55%  { transform: translate(-5px, -11px) rotate(calc(var(--r) -  8deg)); }
          80%  { transform: translate(6px,   14px) rotate(calc(var(--r) +  4deg)); }
          100% { transform: translate(0px,   0px)  rotate(var(--r)); }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        {GRID.map((item, i) => {
          const tool = TOOLS[item.toolIndex];
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${item.top}%`,
                left: `${item.left}%`,
                width: item.size,
                height: item.size,
                color: "var(--primary)",
                opacity: 0.04,
                ["--r" as string]: `${item.rotate}deg`,
                animation: `${item.anim} ease-in-out infinite`,
                animationDelay: `${item.delay}s`,
                willChange: "transform",
              }}
            >
              <svg
                width={item.size}
                height={item.size}
                viewBox="0 0 24 24"
                fill="currentColor"
                dangerouslySetInnerHTML={{ __html: tool.svg }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}