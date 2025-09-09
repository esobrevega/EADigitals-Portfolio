"use client";

import { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef.current) {
          console.log("Init OverlayScrollbars on", rootRef.current);
      OverlayScrollbars(rootRef.current, {
        scrollbars: {
          theme: "os-theme-ea",
          autoHide: "leave",
        },
      });
    }
  }, []);

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-[#100e09] text-white"
      style={{ height: "100vh", overflow: "hidden" }} // ✅ let OverlayScrollbars handle scrolling
    >
      {children}
    </div>
  );
}
