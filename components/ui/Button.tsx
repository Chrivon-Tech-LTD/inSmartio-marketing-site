import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Signature CTA: Gradient from Primary to Primary Container [cite: 629]
  primary: "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-container)] text-white border-none shadow-ambient hover:brightness-105",
  // Secondary: Surface-low background with primary text [cite: 5, 166]
  secondary: "bg-[var(--surface-low)] text-[var(--primary)] border-none hover:bg-[var(--surface-high)]",
  // Outline: Used only if mandatory, otherwise use background shifts [cite: 4]
  outline: "bg-transparent border border-[var(--text-secondary)]/20 text-[var(--text-primary)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  ghost: "bg-transparent text-[var(--primary)] hover:bg-[var(--surface-low)] border-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[14px] font-medium",
  md: "px-8 py-4 text-[16px] font-semibold tracking-[0.5px]", // [cite: 633]
  lg: "px-10 py-5 text-[18px] font-bold tracking-[0.5px]",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2",
        "font-sans transition-all duration-300 cursor-pointer active:scale-95",
        "rounded-xl", // 0.75rem corner radius as per doc [cite: 5]
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}