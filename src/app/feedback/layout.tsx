import "../globals.css"
import "./feedback.css"
import { ReactNode } from "react"

/**
 * Provides a dedicated layout wrapper for all feedback pages
 * @param children - The content of the feedback page,
 * @returns a JSX element that wraps the feedback content in a styled container
 */
export default function FeedbackLayout({ children }: { children: ReactNode }) {
  return (
    <div className="feedback-container">
      {children}
    </div>
  );
}
