"use client";

import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/**
 * The old site pinned a raw WhatsApp PNG to the corner at all times.
 * Same shortcut, but it now waits until you have actually started reading
 * and it announces itself instead of being a bare image link.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Frank on WhatsApp"
      className={cn(
        "group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25d366] py-3 pl-3 pr-3 text-black shadow-lg shadow-black/40 transition-all duration-300 hover:pr-5",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <SiWhatsapp className="size-6 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[9rem]">
        Let&rsquo;s talk
      </span>
    </a>
  );
}
