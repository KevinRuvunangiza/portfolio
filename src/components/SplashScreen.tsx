"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="relative flex items-center justify-center">
              {/* Rotating background glow */}
              <motion.div
                className="absolute w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* K */}
              <motion.span
                className="text-white text-[72px] font-black tracking-tight"
                initial={{ x: -100, opacity: 0, rotate: -180 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.2,
                }}
              >
                K
              </motion.span>

              {/* Dot separator */}
              <motion.span
                className="text-blue-500 text-[72px] font-black mx-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.8,
                }}
              >
                .
              </motion.span>

              {/* R */}
              <motion.span
                className="text-white text-[72px] font-black tracking-tight"
                initial={{ x: 100, opacity: 0, rotate: 180 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.4,
                }}
              >
                R
              </motion.span>

              {/* Octagon */}
              <motion.svg
                className="absolute w-44 h-44"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 1,
                }}
              >
                <motion.polygon
                  points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
                  stroke="url(#gradient)"
                  strokeWidth="2.5"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Corner accents */}
              {[0, 90, 180, 270].map((rotation, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-blue-500"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: 1,
                    x: Math.cos((rotation * Math.PI) / 180) * 90,
                    y: Math.sin((rotation * Math.PI) / 180) * 90,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.34, 1.56, 0.64, 1],
                    delay: 1.4 + i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Loading text */}
            <motion.div
              className="absolute bottom-20 text-gray-400 text-sm tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                LOADING
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Website content fades in after splash */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showSplash ? 0 : 1, y: showSplash ? 20 : 0 }}
        transition={{ duration: 0.8, delay: showSplash ? 0 : 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}