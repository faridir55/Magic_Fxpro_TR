"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the DOM is fully rendered before scrolling
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
}
