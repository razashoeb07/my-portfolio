import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";
import AnimatedSection from "@/components/AnimatedSection";
import profile from "@/data/profile";

export default function Hero() {
  const { name, title, social } = profile.basics;

  const nameVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <AnimatedSection id="hero" noPadding className="relative min-h-screen flex justify-center items-center w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10" />

      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {prefersReducedMotion ? (
            <>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{name}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">{title}</p>
            </>
          ) : (
            <>
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {name}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {title}
              </motion.p>
            </>
          )}

          {prefersReducedMotion ? (
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full">
              <Button className="bg-primary hover:bg-primary/90" onClick={() => window.print()}>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>
          ) : (
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-primary hover:bg-primary/90" onClick={() => window.print()}>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </motion.div>
          )}

          <SocialLinks links={social} className="mt-4" />
        </div>
      </div>

      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      )}
    </AnimatedSection>
  );
}
