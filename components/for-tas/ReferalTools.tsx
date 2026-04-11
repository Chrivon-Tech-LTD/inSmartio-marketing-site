"use client";

import React, { useState } from 'react';
import { 
  Link2, 
  Smartphone, 
  Contact, 
  BarChart3, 
  MessageSquareText,
  ArrowRight
} from 'lucide-react';

const tools = [
  { 
    name: "Unique Referral Link", 
    icon: Link2, 
    desc: "Share your personalized link. Track clicks and conversions in real-time.",
    tag: "Most Used",
  },
  { 
    name: "Digital Referral Cards", 
    icon: Smartphone, 
    desc: "Customizable high-fidelity cards optimized for WhatsApp and social media.",
    tag: null,
  },
  { 
    name: "Physical Referral Cards", 
    icon: Contact, 
    desc: "Order professionally printed physical cards to hand out in person.",
    tag: null,
  },
  { 
    name: "Analytics Dashboard", 
    icon: BarChart3, 
    desc: "See exactly how many people clicked, registered, and passed verification.",
    tag: "New",
  },
  { 
    name: "Message Templates", 
    icon: MessageSquareText, 
    desc: "Pre-written, high-conversion messages for WhatsApp, SMS, and email.",
    tag: null,
  }
];

export const ReferralTools: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#060D1A",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow top-right */}
      <div style={{
        position: "absolute", top: "-6rem", right: "-6rem",
        width: "28rem", height: "28rem",
        background: "radial-gradient(circle, rgba(26,75,140,0.35) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Subtle radial glow bottom-left */}
      <div style={{
        position: "absolute", bottom: "-4rem", left: "-4rem",
        width: "20rem", height: "20rem",
        background: "radial-gradient(circle, rgba(249,168,38,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "4rem",
        }}>
          <span style={{
            color: "#F9A826",
            fontSize: "0.625rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}>
            Agent Toolkit
          </span>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <h2 style={{
              color: "#EEF4FF",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              fontFamily: "var(--font-display)",
              maxWidth: "26rem",
              margin: 0,
            }}>
              Everything you need to scale your network.
            </h2>
            <p style={{
              color: "#7A9DC4",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: "22rem",
              margin: 0,
            }}>
              A suite of professional marketing and tracking tools to help you recruit and manage experts efficiently.
            </p>
          </div>
        </div>

        {/* ── Grid ──
            Row 1: 3 cards full width
            Row 2: 2 cards centered (matches AddOns pattern)
        */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Top row — 3 */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}>
            {tools.slice(0, 3).map((tool, i) => (
              <ToolCard key={i} tool={tool} index={i} hovered={hovered} setHovered={setHovered} />
            ))}
          </div>

          {/* Bottom row — 2 centered */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            maxWidth: "66.666%",
            margin: "0 auto",
            width: "100%",
          }}>
            {tools.slice(3).map((tool, i) => (
              <ToolCard key={i + 3} tool={tool} index={i + 3} hovered={hovered} setHovered={setHovered} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

function ToolCard({ 
  tool, index, hovered, setHovered 
}: { 
  tool: typeof tools[0]; 
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const Icon = tool.icon;
  const isHovered = hovered === index;

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      style={{
        background: isHovered ? "#0E1E3A" : "#0A1628",
        border: `1px solid ${isHovered ? "rgba(26,75,140,0.6)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "1.5rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,75,140,0.3)"
          : "0 4px 16px rgba(0,0,0,0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow on hover */}
      {isHovered && (
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "8rem", height: "8rem",
          background: "radial-gradient(circle, rgba(26,75,140,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
      )}

      {/* Top row: icon + tag */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{
          width: "3rem", height: "3rem",
          borderRadius: "0.875rem",
          background: isHovered ? "#1A4B8C" : "rgba(26,75,140,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: isHovered ? "#ffffff" : "#5A8FD4",
          transition: "all 0.3s ease",
          flexShrink: 0,
        }}>
          <Icon size={20} />
        </div>

        {tool.tag && (
          <span style={{
            fontSize: "0.6rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: "3px 10px",
            borderRadius: "999px",
            background: tool.tag === "New" ? "rgba(249,168,38,0.15)" : "rgba(26,75,140,0.2)",
            color: tool.tag === "New" ? "#F9A826" : "#5A8FD4",
            border: `1px solid ${tool.tag === "New" ? "rgba(249,168,38,0.2)" : "rgba(26,75,140,0.3)"}`,
          }}>
            {tool.tag}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 style={{
        color: "#EEF4FF",
        fontSize: "1.05rem",
        fontWeight: 700,
        fontFamily: "var(--font-display)",
        marginBottom: "0.6rem",
        lineHeight: 1.3,
      }}>
        {tool.name}
      </h3>

      {/* Description */}
      <p style={{
        color: "#7A9DC4",
        fontSize: "0.85rem",
        lineHeight: 1.7,
        flex: 1,
        marginBottom: "1.75rem",
      }}>
        {tool.desc}
      </p>

      {/* CTA */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.65rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: isHovered ? "#F9A826" : "#5A8FD4",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "1.25rem",
        transition: "color 0.3s ease",
      }}>
        Access Tool
        <ArrowRight
          size={13}
          style={{
            transform: isHovered ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}