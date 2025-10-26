import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaCheckCircle, FaCode, FaBug } from "react-icons/fa";

export function Marquee({ children, delay = 30, pauseOnHover = false, className = "" }) {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2); // car on duplique enfants
    }
  }, [children]);

  if (contentWidth === 0) {
    // Ne pas animer tant qu'on n'a pas la largeur
    return (
      <div className={cn("overflow-hidden w-full", className)} style={{ whiteSpace: "nowrap" }}>
        <div ref={containerRef} style={{ display: "inline-flex", gap: "16px" }}>
          {children}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden w-full", className)} style={{ whiteSpace: "nowrap" }}>
      <motion.div
        ref={containerRef}
        style={{ display: "inline-flex", gap: "16px" }}
        animate={{ x: [0, -contentWidth] }}
        transition={{
          repeat: Infinity,
          duration: delay,
          ease: "linear",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function CleanCodeItem({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-4 min-w-[220px]">
      <Icon className="text-green-600" size={40} />
      <strong className="text-lg">{title}</strong>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export function MarqueeDemoHorizontal() {
  const cleanCodePoints = [
    {
      icon: FaCheckCircle,
      title: "Lisibilité",
      description: "Un code clair et lisible facilite la maintenance et la compréhension.",
    },
    {
      icon: FaCode,
      title: "Modularité",
      description: "Le code est organisé en modules réutilisables et indépendants.",
    },
    {
      icon: FaBug,
      title: "Tests",
      description: "Le code est testé systématiquement pour garantir sa fiabilité.",
    },
  ];

  return (
    <div className="w-full max-w-full">
      <Marquee delay={30} pauseOnHover>
        {cleanCodePoints.map(({ icon, title, description }, i) => (
          <CleanCodeItem key={i} icon={icon} title={title} description={description} />
        ))}
      </Marquee>
    </div>
  );
}
