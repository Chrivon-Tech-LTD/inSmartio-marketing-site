import Link from "next/link";
import Image from "next/image";

interface AppStoreButtonsProps {
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
}

export function AppStoreButtons({ 
  align = "center", 
  size = "sm" 
}: AppStoreButtonsProps) {
  
  // We define the height for each size. 
  // The App Store badge is roughly 3:1 ratio, Google Play is roughly 3.4:1.
  const heights = {
    sm: 40,
    md: 52,
    lg: 64,
  };

  const selectedHeight = heights[size];
  const alignmentClass = align === "left" ? "justify-start" : "justify-center";

  return (
    <div className={`flex flex-wrap items-center ${alignmentClass} gap-3`}>
      {/* App Store - Using h-[px] to force visual alignment */}
      <Link
        href="/download"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/assets/download.svg"
          alt="Download on the App Store"
          width={selectedHeight * 3} // Approximate aspect ratio
          height={selectedHeight}
          style={{ height: `${selectedHeight}px`, width: 'auto' }}
          className="object-contain"
        />
      </Link>

      {/* Google Play */}
      <Link
        href="/download"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/assets/play.png"
          alt="Get it on Google Play"
          width={selectedHeight * 3.4} // Google Play is wider
          height={selectedHeight}
          style={{ height: `${selectedHeight}px`, width: 'auto' }}
          className="object-contain"
        />
      </Link>
    </div>
  );
}