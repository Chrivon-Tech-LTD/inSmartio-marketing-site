/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
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
  Download,
  PartyPopper,
} from "lucide-react";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";

// ─── Config — swap these when ready ───────────────────────────────────────────
const APP_STORE_ID    = "YOUR_APP_ID_HERE";        // e.g. "id1234567890"
const ANDROID_PACKAGE = "com.insmart.app";          // your actual package name
const DEEP_LINK_SCHEME = "insmart://join/";          // confirm with mobile dev
const APP_STORE_URL   = `https://apps.apple.com/app/${APP_STORE_ID}`;
const PLAY_STORE_URL  = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
// ──────────────────────────────────────────────────────────────────────────────

type Platform = "ios" | "android" | "desktop";
type Stage    = "launching" | "fallback" | "desktop";

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
  // Modern async clipboard API (requires user gesture — works fine inside onClick)
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(code);
      return true;
    } catch {}
  }
  // Fallback: execCommand for older browsers / Android WebViews
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

// ─── Drifting background icons (lucide) ───────────────────────────────────────
const BG_ICONS = [
  { Icon: Settings2,   style: { top: "8%",    left: "6%",   size: 52 }, drift: "drift-1" },
  { Icon: Link2,       style: { top: "14%",   right: "10%", size: 38 }, drift: "drift-2" },
  { Icon: Smartphone,  style: { bottom: "22%",left: "10%",  size: 44 }, drift: "drift-3" },
  { Icon: Sparkles,    style: { bottom: "10%",right: "8%",  size: 48 }, drift: "drift-1" },
  { Icon: ShieldCheck, style: { top: "50%",   left: "3%",   size: 34 }, drift: "drift-2" },
];

// ─── Main page ────────────────────────────────────────────────────────────────
export default function JoinPage({
  params,
}: {
  params: { code: string };
}) {
  const referralCode = (params.code ?? "").toUpperCase();

  const [platform, setPlatform] = useState<Platform>("desktop");
  const [stage,    setStage]    = useState<Stage>("launching");
  const [copied,   setCopied]   = useState(false);

  useEffect(() => {
    const p = detectPlatform();
    setPlatform(p);

    if (p === "desktop") {
      setStage("desktop");
      return;
    }

    saveReferralCode(referralCode);

    const deepLink = `${DEEP_LINK_SCHEME}${referralCode}`;
    window.location.href = deepLink;

    const timer = setTimeout(() => setStage("fallback"), 1800);

    const onVisibility = () => {
      if (document.hidden) clearTimeout(timer);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [referralCode]);

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

  const heading =
    stage === "launching" ? "Getting you set up…"
    : stage === "fallback" ? "Download InSmart to continue"
    : "You've been invited!";

  const subtext =
    stage === "launching"
      ? "We're opening the app for you. If nothing happens, tap the button below."
      : stage === "fallback"
      ? "Install the app — your referral code is saved and will be applied automatically when you sign up."
      : "Open this link on your phone. Your referral code will be applied automatically when you register.";

  const footerNote =
    stage === "fallback"
      ? "No need to enter the code manually — just install and sign up."
      : stage === "desktop"
      ? "Scan or open this link on your iPhone or Android device."
      : "Having trouble? Tap the button above to go to the store.";

  return (
    <>
      {/* Add to root layout.tsx <head> when App Store ID is ready:
          <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID_HERE" /> */}

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
              <span
                key={i}
                className={`tool-icon ${drift}`}
                style={{ position: "absolute", ...pos }}
              >
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

          {/* State icon */}
          <div className="flex justify-center mb-5">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(26,75,140,0.08)" }}
            >
              {stage === "launching" && (
                <Loader2
                  size={28}
                  className="animate-spin"
                  style={{ color: "var(--primary)" }}
                />
              )}
              {stage === "fallback" && (
                <Download size={26} style={{ color: "var(--primary)" }} />
              )}
              {stage === "desktop" && (
                <PartyPopper size={26} style={{ color: "var(--secondary)" }} />
              )}
            </div>
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

          {/* Mobile: single relevant store button */}
          {stage !== "desktop" && (platform === "ios" || platform === "android") && (
            <button
              onClick={openStore}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-2"
            >
              <Smartphone size={18} />
              {platform === "ios" ? "Download on the App Store" : "Get it on Google Play"}
            </button>
          )}

          {/* Desktop: both store buttons via existing component */}
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