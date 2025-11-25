"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientButton from "../GradientButton";
import { ArrowRight } from "lucide-react";

export default function Screen4({ onNext }) {
  const [popped, setPopped] = useState([false, false, false, false]);

  const words = ["You", "are", "a", "Cutiee"];

  const positions = [
    { left: "18%", top: "22%" },
    { left: "38%", top: "28%" },
    { left: "58%", top: "26%" },
    { left: "78%", top: "22%" },
  ];

  const wordPositions = [
    { left: "18%", top: "42%" },
    { left: "38%", top: "48%" },
    { left: "58%", top: "48%" },
    { left: "78%", top: "42%" },
  ];

  const popHeart = (i) => {
    const arr = [...popped];
    arr[i] = true;
    setPopped(arr);
  };

  const allPopped = popped.every(Boolean);

  // Wiggle animation
  const wiggle = {
    animate: {
      y: [0, -8, 0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Bubble heart shape (CSS)
  const heartStyle = (color) => ({
    width: "70px",
    height: "70px",
    background: color,
    position: "relative",
    transform: "rotate(-45deg)",
    borderRadius: "50% 50% 0 0",
    boxShadow:
      "0 0 15px rgba(255,100,200,0.7), inset 0 0 12px rgba(255,255,255,0.6)",
    backdropFilter: "blur(2px)",
  });

  const heartBeforeAfter = {
    content: '""',
    position: "absolute",
    width: "70px",
    height: "70px",
    background: "inherit",
    borderRadius: "50%",
    boxShadow:
      "0 0 12px rgba(255,100,200,0.7), inset 0 0 10px rgba(255,255,255,0.5)",
  };

  return (
    <>
      <div className="relative w-full flex justify-center mt-4">
        <div
          className="relative w-[95%] max-w-[600px] rounded-3xl bg-gradient-to-b from-pink-950/35 via-fuchsia-900/25 to-purple-950/35 backdrop-blur-xl overflow-hidden"
          style={{ aspectRatio: "3/4" }}
        >
          {/* Title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-pink-50/90 text-xl">
            Pop the hearts 💗
          </div>

          {/* Hearts */}
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: pos.left,
                top: pos.top,
                transform: "translateX(-50%)",
              }}
              {...wiggle}
            >
              <motion.button
                disabled={popped[i]}
                onClick={() => popHeart(i)}
                initial={{ scale: 1 }}
                animate={
                  popped[i]
                    ? { scale: 0, opacity: 0 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Bubble Heart */}
                <div style={heartStyle("rgba(255,120,200,0.55)")}>
                  <div
                    style={{
                      ...heartBeforeAfter,
                      top: "-35px",
                      left: "0px",
                    }}
                  ></div>

                  <div
                    style={{
                      ...heartBeforeAfter,
                      left: "35px",
                      top: "0px",
                    }}
                  ></div>
                </div>

                {/* Thread */}
                <div className="absolute left-1/2 top-[72px] w-[2px] h-28 -translate-x-1/2 bg-pink-400 shadow-[0_0_8px_#ff4da6] opacity-90"></div>
              </motion.button>
            </motion.div>
          ))}

          {/* Words (reveal after pop) */}
          {words.map((word, i) => (
            <motion.div
              key={i}
              className="absolute text-xl font-semibold pointer-events-none"
              style={{
                left: wordPositions[i].left,
                top: wordPositions[i].top,
                transform: "translateX(-50%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                popped[i]
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 drop-shadow">
                {word}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      {allPopped && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-6"
        >
          <GradientButton onClick={onNext}>
            Next <ArrowRight size={20} />
          </GradientButton>
        </motion.div>
      )}
    </>
  );
}
