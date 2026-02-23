import Image from "next/image";
import { useEffect, useState } from "react";
import { WebsiteQuestion } from "../lib/game/content/websiteQuestions";

export default function WebsiteCard({ site }: { site: WebsiteQuestion }) {
  // Your existing mounted state
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !site || !site.content.imageURL) {
    return null; // or a placeholder/loading UI
  }

  return (
    <div>
      <Image src={site.content?.imageURL} alt="Website content image" width={site.content?.width || 400} height={site.content?.height || 300} />
    </div>
  );
}