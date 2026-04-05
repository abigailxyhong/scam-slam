import "../globals.css";
import "./feedback.css";
import { ReactNode } from "react";

export default function FeedbackLayout({ children }: { children: ReactNode }) {
  return (
    <div className="feedback-container">
      {children}
    </div>
  );
}
