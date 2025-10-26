"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useMemo, useState } from "react";

export function AnimatedListItem({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 0 }}
      animate={{
        opacity: 1,
        rotateX: [0, -10, 10, -5, 5, 0], // rotation légère pour l'effet
      }}
      exit={{ opacity: 0 }}
      transition={{
        rotateX: {
          repeat: Infinity,    // rotation en boucle
          duration: 4,         // durée 4 secondes par rotation
          ease: "linear",      // vitesse constante
        },
        opacity: { duration: 0.8, ease: "easeInOut" },
      }}
      layout
      style={{ perspective: 800 }}
      className="mx-auto w-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export const AnimatedList = React.memo(({ children, className, delay = 4000, ...props }) => {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, delay, childrenArray.length]);

  return (
    <div className={cn("flex flex-col items-center gap-4", className)} {...props}>
      <AnimatePresence mode="wait">
        <AnimatedListItem key={childrenArray[index].key || index}>
          {childrenArray[index]}
        </AnimatedListItem>
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";
