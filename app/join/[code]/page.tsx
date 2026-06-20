/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Link2,
  Settings2,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
  Loader2,
  PartyPopper,
  ExternalLink,
  AppWindow,
} from "lucide-react";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";

// ─── Config — swap these when ready ───────────────────────────────────────────
const APP_STORE_ID     = "YOUR_APP_ID_HERE";       // e.g. "id1234567890"
const ANDROID_PACKAGE  = "com.insmart.app";         // your actual package name
const DEEP_LINK_SCHEME = "insmart://join/";          // confirm with mobile dev
const APP_STORE_URL    = `https://apps.apple.com/app/${APP_STORE_ID}`;
const PLAY_STORE_URL   = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
// ──────────────────────────────────────────────────────────────────────────────

type Platform = "ios" | "android" | "desktop";
type Stage    = "prompt" | "fallback" | "desktop";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

function saveReferralCode(code: string) {
  try {
    localStorage.setItem("insmart_referral_code", code);
    sessionStorage.setItem("insmart_referral_code", code);
  } catch {}
}

async function copyToClipboard(code: string): Promise<boolean> {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(code);
      return true;
    } catch {}
  }
  try {
    const el = document.createElement("textarea");
    el.value = code;
    el.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  } catch {}
  return false;
}

// ─── Drifting background icons ────────────────────────────────────────────────
const BG_ICONS = [
  { Icon: Settings2,   style: { top: "8%",    left: "6%",   size: 52 }, drift: "drift-1" },
  { Icon: Link2,       style: { top: "14%",   right: "10%", size: 38 }, drift: "drift-2" },
  { Icon: Smartphone,  style: { bottom: "22%",left: "10%",  size: 44 }, drift: "drift-3" },
  { Icon: Sparkles,    style: { bottom: "10%",right: "8%",  size: 48 }, drift: "drift-1" },
  { Icon: ShieldCheck, style: { top: "50%",   left: "3%",   size: 34 }, drift: "drift-2" },
];

// ─── State icon + label config ────────────────────────────────────────────────
// Each stage maps to: icon, icon color, small label shown under the circle
const STATE_CONFIG: Record<
  Stage | "opening",
  { icon: React.ReactNode; label: string; labelColor?: string }
> = {
  opening: {
    icon:  <Loader2 size={28} className="animate-spin" style={{ color: "var(--primary)" }} />,
    label: "Launching InSmart…",
  },
  prompt: {
    icon:  <PartyPopper size={26} style={{ color: "var(--secondary)" }} />,
    label: "You're one tap away!",
  },
  fallback: {
    icon:  <AppWindow size={26} style={{ color: "var(--primary)" }} />,
    label: "App not installed yet",
    labelColor: "var(--text-secondary)",
  },
  desktop: {
    icon:  <PartyPopper size={26} style={{ color: "var(--secondary)" }} />,
    label: "Scan on your phone to join",
  },
};

// ─── Main page ────────────────────────────────────────────────────────────────
export default function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = use(params);
  const referralCode = (code ?? "").toUpperCase();

  const [platform, setPlatform] = useState<Platform>("desktop");
  const [stage,    setStage]    = useState<Stage>("prompt");
  const [copied,   setCopied]   = useState(false);
  const [opening,  setOpening]  = useState(false);

  useEffect(() => {
    const p = detectPlatform();
    setPlatform(p);
    if (p === "desktop") setStage("desktop");
    if (referralCode) saveReferralCode(referralCode);
  }, [referralCode]);

  function handleOpenApp() {
    setOpening(true);
    saveReferralCode(referralCode);

    const deepLink = `${DEEP_LINK_SCHEME}${referralCode}`;
    const a = document.createElement("a");
    a.href = deepLink;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    const timer = setTimeout(() => {
      setOpening(false);
      setStage("fallback");
    }, 1800);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearTimeout(timer);
        setOpening(false);
      }
    }, { once: true });
  }

  async function handleCopy() {
    saveReferralCode(referralCode);
    const ok = await copyToClipboard(referralCode);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  function openStore() {
    saveReferralCode(referralCode);
    window.location.href = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
  }

  const stateKey = opening ? "opening" : stage;
  const { icon: stateIcon, label: stateLabel, labelColor } = STATE_CONFIG[stateKey];

  const heading =
    stage === "fallback" ? "Download InSmart to continue"
    : "You've been invited!";

  const subtext =
    stage === "prompt"
      ? "Tap below to open InSmart. Your referral code will be applied automatically."
      : stage === "fallback"
      ? "Install the app — your referral code is saved and will be applied automatically when you sign up."
      : "Open this link on your phone. Your referral code will be applied automatically when you register.";

  const footerNote =
    stage === "fallback"
      ? "No need to enter the code manually — just install and sign up."
      : stage === "desktop"
      ? "Scan or open this link on your iPhone or Android device."
      : "Already have the app? Tap \"Open in App\" above.";

  return (
    <>
      <style>{`
        @keyframes drift-1 {
          0%,100% { transform: translate(0,0)        rotate(0deg);   }
          25%     { transform: translate(10px,-16px)  rotate(12deg);  }
          50%     { transform: translate(-8px,12px)   rotate(-6deg);  }
          75%     { transform: translate(14px,6px)    rotate(8deg);   }
        }
        @keyframes drift-2 {
          0%,100% { transform: translate(0,0)         rotate(0deg);   }
          30%     { transform: translate(-12px,14px)  rotate(-14deg); }
          60%     { transform: translate(10px,-10px)  rotate(9deg);   }
        }
        @keyframes drift-3 {
          0%,100% { transform: translate(0,0)         rotate(0deg);   }
          20%     { transform: translate(16px,10px)   rotate(18deg);  }
          55%     { transform: translate(-6px,-14px)  rotate(-10deg); }
          80%     { transform: translate(8px,18px)    rotate(5deg);   }
        }
        .drift-1 { animation: drift-1 11s ease-in-out infinite; }
        .drift-2 { animation: drift-2 13s ease-in-out infinite; }
        .drift-3 { animation: drift-3  9s ease-in-out infinite; }
      `}</style>

      <main
        className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden mt-6"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* ── Drifting background icons ──────────────────────────────────── */}
        <div className="tool-bg" aria-hidden="true">
          {BG_ICONS.map(({ Icon, style, drift }, i) => {
            const { size, ...pos } = style;
            return (
              <span key={i} className={`tool-icon ${drift}`} style={{ position: "absolute", ...pos }}>
                <Icon size={size} />
              </span>
            );
          })}
        </div>

        {/* ── Glass card ─────────────────────────────────────────────────── */}
        <div
          className="relative z-10 w-full max-w-sm rounded-3xl p-8 text-center"
          style={{
            background: "var(--glass)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="inline-block -mb-10 -mt-10">
            <Image
              src="/assets/insmartio.png"
              alt="InSmart"
              width={160}
              height={56}
              style={{ height: "200px", width: "auto" }}
              className="object-contain mx-auto"
              priority
            />
          </Link>

          {/* State icon + label */}
          <div className="flex flex-col items-center gap-1 mb-5">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(26,75,140,0.08)" }}
            >
              {stateIcon}
            </div>
            <span
              className="text-xs font-medium mt-1"
              style={{ color: labelColor ?? "var(--primary)" }}
            >
              {stateLabel}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-xl font-semibold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {heading}
          </h1>

          {/* Subtext */}
          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "var(--text-secondary)" }}
          >
            {subtext}
          </p>

          {/* Referral code badge — tap to copy */}
          {referralCode && (
            <button
              onClick={handleCopy}
              title="Tap to copy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium mb-6 transition-all hover:brightness-95 active:scale-95"
              style={{
                background: "rgba(26,75,140,0.08)",
                border: "1px solid rgba(26,75,140,0.15)",
                color: "var(--primary)",
              }}
            >
              <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
                Referral code
              </span>
              <strong>{referralCode}</strong>
              {copied
                ? <Check size={14} style={{ color: "var(--success)" }} />
                : <Copy size={13} style={{ color: "var(--text-secondary)" }} />
              }
            </button>
          )}

          {/* Mobile — prompt: "Open in App" + store button */}
          {stage === "prompt" && (platform === "ios" || platform === "android") && (
            <div className="flex flex-col gap-2">
              <button
                onClick={handleOpenApp}
                disabled={opening}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {opening
                  ? <Loader2 size={18} className="animate-spin" />
                  : <ExternalLink size={18} />
                }
                {opening ? "Opening app…" : "Open in App"}
              </button>
              <button
                onClick={openStore}
                className="w-full flex items-center justify-center gap-2 py-2 text-sm rounded-xl transition-all hover:brightness-95"
                style={{
                  background: "rgba(26,75,140,0.06)",
                  border: "1px solid rgba(26,75,140,0.15)",
                  color: "var(--primary)",
                }}
              >
                <Smartphone size={16} />
                {platform === "ios" ? "Download on the App Store" : "Get it on Google Play"}
              </button>
            </div>
          )}

          {/* Mobile — fallback: go to store */}
          {stage === "fallback" && (platform === "ios" || platform === "android") && (
            <button
              onClick={openStore}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Smartphone size={18} />
              {platform === "ios" ? "Download on the App Store" : "Get it on Google Play"}
            </button>
          )}

          {/* Desktop */}
          {stage === "desktop" && (
            <div className="mt-2">
              <AppStoreButtons align="center" size="sm" />
            </div>
          )}

          {/* Footer note */}
          <p
            className="text-xs mt-5 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {footerNote}
          </p>
        </div>
      </main>
    </>
  );
}