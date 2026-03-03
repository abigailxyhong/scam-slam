import Image from "next/image";
import { useEffect, useState } from "react";
import { WebsiteQuestion } from "../lib/game/content/websiteQuestions";

export default function WebsiteCard({ site }: { site: WebsiteQuestion }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
