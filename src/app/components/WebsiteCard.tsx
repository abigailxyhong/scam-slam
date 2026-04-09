import Image from "next/image";
import { useEffect, useState } from "react";
import { WebsiteQuestion } from "@/src/core/game/questions/websiteQuestions";

/**
 * Displays a website-style card used in the game
 * - On hover, shows an overlay with URL information
 * 
 * @param site The website question object containing content information such as image URL and tooltip text
 * @returns JSX element representing the website card with hover overlay functionality
 */
export default function WebsiteCard({ site }: { site: WebsiteQuestion }) {
  // State to track if the component has mounted, used to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  // Do not render until mounted, and esure required content exists
  if (!mounted || !site || !site.content.imageURL) {
    return null;
  }

  return (
    <div className="relative group w-fit">
      <Image
        src={site?.content?.imageURL}
        alt="Website content image"
        width={site?.content?.width || 400}
        height={site?.content?.height || 300}
        className="rounded-md"
      />

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0 
          bg-black/70 
          text-white 
          flex items-center justify-center 
          text-3xl font-bold 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300
          text-center p-4
        "
      >
        {site?.tooltip}
      </div>
    </div>
  );
}
