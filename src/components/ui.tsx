"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Reveal on scroll
export function Reveal({
  children,
  delay = 0,
  className,
  y = 18,
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  stagger = 0.07,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
        light
          ? "border-white/15 bg-white/10 text-white/80"
          : "border-[#EDE8DE] bg-[#F8F6F0] text-[#8A7655]"
      )}
    >
      <span className={cn("size-1.5 rounded-full", light ? "bg-[#C5A46B]" : "bg-[#C5A46B]")} />
      {children}
    </span>
  );
}

export function GoldSeparator({ className }: { className?: string }) {
  return <span className={cn("block h-px w-12 bg-[#C5A46B]/60", className)} />;
}
