import Link from "next/link";
import Image from "next/image";

interface AppStoreButtonsProps {
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
}

const APP_STORE_URL  = "https://apps.apple.com/gb/app/insmartio/id6777578294";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.chrivon.insmartio";

export function AppStoreButtons({ 
  align = "center", 
  size = "sm" 
}: AppStoreButtonsProps) {
  
  // 1. Define fixed container dimensions for perfect matching
  const dimensions = {
    sm: { h: "h-10", w: "w-[130px]" },
    md: { h: "h-12", w: "w-[150px]" },
    lg: { h: "h-14", w: "w-[180px]" },
  };

  const selected = dimensions[size];

  return (
    <div className={`flex flex-wrap items-center gap-3 w-full justify-center lg:${align === "left" ? "justify-start" : "justify-center"}`}>
      
      {/* App Store Wrapper */}
      <Link
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative ${selected.h} ${selected.w} transition-transform hover:scale-105 active:scale-95`}
      >
        <Image
          src="/assets/download.svg"
          alt="Download on the App Store"
          fill // Uses the parent div's size
          style={{ objectFit: 'contain' }} // Prevents stretching
          className="object-left lg:object-center" // Aligns logo within the box
          priority
        />
      </Link>

      {/* Google Play Wrapper */}
      <Link
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative ${selected.h} ${selected.w} transition-transform hover:scale-105 active:scale-95`}
      >
        <Image
          src="/assets/play.png"
          alt="Get it on Google Play"
          fill
          style={{ objectFit: 'contain' }}
          className="object-left lg:object-center"
          sizes="(max-width: 768px) 135px, 150px"
          priority
        />
      </Link>
    </div>
  );
}