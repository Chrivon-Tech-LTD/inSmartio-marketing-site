import React from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Using brightness and opacity for hover states avoids needing extra "hover" variables
  primary: "bg-(--color-primary) text-white border-none shadow-md hover:shadow-lg hover:brightness-110",
  secondary: "bg-(--color-secondary) text-white border-none shadow-md hover:shadow-lg hover:brightness-110",
  outline: "bg-transparent border border-(--color-text-muted) text-(--color-text-main) hover:border-(--color-primary) hover:text-(--color-primary)",
  ghost: "bg-transparent text-(--color-primary) hover:bg-(--color-primary)/10 border-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[10px] tracking-widest",
  md: "px-6 py-3 text-[11px] tracking-widest",
  lg: "px-8 py-4 text-xs tracking-widest",
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
        "font-bold uppercase transition-all duration-300 cursor-pointer active:scale-95",
        "rounded-xl", 
        "focus:outline-none focus:ring-2 focus:ring-(--color-primary) focus:ring-offset-2",
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