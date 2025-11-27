"use client";

import React from "react";

// Static list of drifting hearts (positions, sizes, timing)
const HEARTS = [
  { top: "90.3364%", left: "1.18974%", size: 21.9168, duration: "27.0204s", delay: "1.4984s", color: "text-rose-400" },
  { top: "35.83%", left: "56.7614%", size: 20.201, duration: "30.8028s", delay: "2.81286s", color: "text-rose-400" },
  { top: "25.1386%", left: "34.2736%", size: 25.2491, duration: "29.3566s", delay: "0.233966s", color: "text-pink-400" },
  { top: "37.766%", left: "30.6429%", size: 26.8319, duration: "24.4476s", delay: "3.86647s", color: "text-rose-400" },
  { top: "4.55148%", left: "67.6062%", size: 28.8445, duration: "27.355s", delay: "3.67482s", color: "text-rose-400" },
  { top: "84.8802%", left: "27.3703%", size: 24.5792, duration: "28.8321s", delay: "1.16186s", color: "text-pink-400" },
  { top: "17.2846%", left: "35.3438%", size: 21.5189, duration: "32.652s", delay: "2.28802s", color: "text-red-400" },
  { top: "84.9322%", left: "69.4714%", size: 25.9136, duration: "26.3374s", delay: "1.90916s", color: "text-pink-400" },
  { top: "64.3917%", left: "86.5305%", size: 23.2274, duration: "30.0376s", delay: "3.09996s", color: "text-pink-400" },
  { top: "93.7675%", left: "98.6608%", size: 19.6789, duration: "21.716s", delay: "4.05366s", color: "text-pink-400" },
  { top: "95.4438%", left: "6.43032%", size: 21.5429, duration: "25.8378s", delay: "4.45334s", color: "text-rose-400" },
];

function HeartSVG({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart opacity-20"
      aria-hidden="true"
    >
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );
}

export default function BackgroundHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {HEARTS.map((h, i) => (
        <div
          key={i}
          className={`heart-drift ${h.color}`}
          style={{
            top: h.top,
            left: h.left,
            width: `${h.size}px`,
            height: `${h.size}px`,
            animation: `${h.duration} ease-in-out ${h.delay} infinite normal none running drift`,
          }}
        >
          <HeartSVG size={h.size} />
        </div>
      ))}
    </div>
  );
}
