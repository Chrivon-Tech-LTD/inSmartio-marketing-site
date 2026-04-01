/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/ui/Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextArea?: boolean;
}

export function Input({ label, isTextArea, className = "", ...props }: InputProps) {
  const baseClass = "input-field w-full bg-surface text-text-main placeholder:text-text-muted/50";
  
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[11px] font-bold uppercase tracking-widest text-text-muted">
        {label}
      </label>
      {isTextArea ? (
        <textarea {...(props as any)} className={`${baseClass} min-h-30 resize-none ${className}`} />
      ) : (
        <input {...(props as any)} className={`${baseClass} ${className}`} />
      )}
    </div>
  );
}