"use client";

import { motion } from "framer-motion";
import GradientButton from "../GradientButton";
import { ArrowRight } from "lucide-react";

export default function FancyMessageCard({ onNext }) {
  return (
    <div className="page-wrap px-4 md:px-6 py-10 text-center relative">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6"
      >
        One Last Thing...
      </motion.h2>

      {/* Card container (center) */}
      <div className="flex justify-center">
        <div className="fancy-frame relative w-[320px] md:w-[420px] lg:w-[520px]">
          {/* Ribbon Bow (top center) */}
          <img
            src="/mnt/data/80fd6adb-47c7-429c-9ed4-1b5a1cf58e32.png"
            alt="Cute ribbon bow"
            className="ribbon-bow pointer-events-none"
          />

          {/* sparkles overlay (multiple moving sparkles) */}
          <div className="sparkles pointer-events-none" aria-hidden>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Inner glass card */}
          <div className="fancy-card relative overflow-hidden">
            {/* subtle heart-pattern layer */}
            <div className="heart-pattern absolute inset-0 pointer-events-none" />

            {/* message area with its own scroll (custom scrollbar applies) */}
            <div className="message-area relative z-10 p-6 md:p-8">
              <p className="serif-text text-[#3a183d] text-[16px] md:text-[18px] leading-relaxed max-h-[380px] overflow-y-auto pr-2">
                Happy Birthday, Cutiepie! You deserve all the happiness, love, and smiles in the world today and
                always. You have this special way of making everything around you brighter — your smile, your kindness,
                and the way you make people feel truly cared for.

                I hope your day is filled with laughter, surprises, and moments that make your heart happy.
                You’re truly one of a kind, and I just want you to know how special you are.

                Keep being the amazing person you are, spreading joy wherever you go. Wishing you endless happiness,
                success, and all the sweet things life has to offer. 💗
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex justify-center">
        <GradientButton onClick={onNext} className="flex items-center gap-2">
          Continue <ArrowRight size={18} />
        </GradientButton>
      </motion.div>
    </div>
  );
}
