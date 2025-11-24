"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientButton from "../GradientButton";
import { ArrowRight } from "lucide-react";

export default function Screen4({ onNext }) {
  const [popped, setPopped] = useState([false, false, false, false]);

  useEffect(() => {
    console.log("BalloonScreen: mounted");
    fetch('/api/debug?msg=balloon-mounted').catch((err) => {
      console.error('BalloonScreen: fetch mount error', err);
    })
    return () => {
      console.log("BalloonScreen: unmounted");
      fetch('/api/debug?msg=balloon-unmounted').catch((err) => {});
    }
  }, []);

  const wordPositions = [
    { left: "16%", top: "32%" },
    { left: "35.5%", top: "38%" },
    { left: "55.8%", top: "38%" },
    { left: "71%", top: "32%" },
  ];

  const popBalloon = (index) => {
    const newState = [...popped];
    newState[index] = true;
    setPopped(newState);
  };

  const allPopped = popped.every((p) => p === true);

  return (
    <>
      {/* OUTER CONTAINER — AUTO FIT TO ALL DEVICES */}
      <div className="relative min-h-[70vh] md:min-h-[60vh] w-full overflow-visible rounded-3xl backdrop-blur-xl bg-gradient-to-b from-pink-950/35 via-fuchsia-950/30 to-purple-950/35">

        {/* RESPONSIVE SCALE WRAPPER — THIS MAKES IT FIT ALL MOBILES */}
        <div className="absolute inset-0 scale-[0.78] sm:scale-[0.85] md:scale-100 origin-top">

          {/* TITLE */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-pink-50/90 text-xl md:text-2xl">
            Pop all 4 balloons
          </div>

          {/* REVEAL WORDS */}
          {["You", "are", "a", "Cutiee"].map((word, i) => {
            const { left, top } = wordPositions[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={popped[i] ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute text-xl md:text-2xl font-semibold pointer-events-none"
                style={{
                  left,
                  top,
                  transform: "translateX(-50%)",
                }}
              >
                <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400 drop-shadow">
                  {word}
                </span>
              </motion.div>
            );
          })}

          {/* BALLOONS */}
          {[
            { left: "19%", top: "18%", color: "rgb(251,113,133)" },
            { left: "38%", top: "24%", color: "rgb(245,158,11)" },
            { left: "56.7%", top: "23%", color: "rgb(34,197,94)" },
            { left: "75.7%", top: "18%", color: "rgb(56,189,248)" }
          ].map((balloon, i) => (
            <motion.button
              key={i}
              aria-label={`Balloon ${i + 1}`}
              disabled={popped[i]}
              onClick={() => popBalloon(i)}
              className="absolute -translate-x-1/2"
              style={{ left: balloon.left, top: balloon.top }}
              initial={{ scale: 1 }}
              animate={popped[i] ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <div
                  className="h-24 w-20 md:h-28 md:w-22 rounded-[50%_50%_45%_45%/55%_55%_45%_45%]"
                  style={{
                    background: `
                      radial-gradient(
                        60% 60% at 35% 35%, 
                        rgba(255,255,255,0.6) 0px, 
                        rgba(255,255,255,0.6) 26%, 
                        transparent 27%
                      ),
                      linear-gradient(145deg, ${balloon.color}, rgba(255,255,255,0.3))
                    `,
                    boxShadow:
                      "rgba(0,0,0,0.18) -6px -10px 16px inset, rgba(0,0,0,0.22) 0px 10px 22px",
                  }}
                ></div>

                <div
                  className="mx-auto -mt-1 h-3 w-3 rotate-45 relative z-10"
                  style={{ background: balloon.color }}
                ></div>
              </div>
            </motion.button>
          ))}

          {/* STRINGS BELOW BALLOONS */}
          <svg className="pointer-events-none absolute inset-0 -z-10" width="848" height="572">
            <path d="M 169.59375 217.015625 C 176.4729 297.015625, 427.4395 400.4, 424 572"
              stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" fill="none" />
            <path d="M 339.1875 251.359375 C 341.1159 331.359375, 424.9642 400.4, 424 572"
              stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" fill="none" />
            <path d="M 508.796875 251.359375 C 504.0015 331.359375, 421.6023 400.4, 424 572"
              stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" fill="none" />
            <path d="M 678.390625 217.015625 C 671.2803 297.015625, 420.4448 400.4, 424 572"
              stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" fill="none" />
            <circle cx="424" cy="572" r="5" fill="rgba(255,255,255,0.75)" />
          </svg>

        </div> {/* SCALE WRAPPER END */}

      </div>

      {/* NEXT BUTTON */}
      {allPopped && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-6"
        >
          <GradientButton onClick={onNext}>
            Next <ArrowRight size={20} className="mt-0.5" />
          </GradientButton>
        </motion.div>
      )}
    </>
  );
}
