"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Plane } from "lucide-react";

/**
 * A small, tucked-away "polaroid" of Bill coding mid-flight. Desktop-only so it
 * never crowds the mobile layout or undercuts the professional first impression.
 */
export function PlaneBubble() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24, rotate: 8 }}
      animate={{ opacity: 1, y: 0, rotate: 4 }}
      transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.04 }}
      className="group absolute -bottom-2 right-0 z-10 hidden w-52 cursor-default select-none xl:block xl:w-56"
    >
      {/* little strip of "tape" */}
      <span className="absolute -top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 -rotate-2 rounded-[2px] bg-accent/25 backdrop-blur-sm" />

      <div className="rounded-xl border border-[var(--border-strong)] bg-white p-2.5 shadow-xl shadow-black/10 ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-2xl">
        <div className="overflow-hidden rounded-md">
          <Image
            src="/plane-coding.jpg"
            alt="Bill coding on a laptop mid-flight on an airplane, window visible"
            width={820}
            height={537}
            className="h-auto w-full"
          />
        </div>
        <figcaption className="px-1 pb-0.5 pt-2.5 text-center">
          <span className="flex items-center justify-center gap-1.5 text-[0.8rem] font-medium text-[#0f2a27]">
            <Plane className="h-3.5 w-3.5 text-accent" />
            me + Claude Code, 40,000 ft
          </span>
          <span className="mt-0.5 block text-[0.68rem] italic text-[#4d6461]">
            turbulence-driven development
          </span>
        </figcaption>
      </div>
    </motion.figure>
  );
}
