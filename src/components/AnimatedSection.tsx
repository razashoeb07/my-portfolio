
import { ReactNode, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  noPadding?: boolean;
}

export default function AnimatedSection({
  id,
  className,
  children,
  noPadding = false,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        !noPadding && "section-container",
        className
      )}
    >
      {prefersReducedMotion ? (
        <div>{children}</div>
      ) : (
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}
