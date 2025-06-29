
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";
import profile from "@/data/profile";

export default function About() {
  const { summary, avatar } = profile.basics;
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  return (
    <AnimatedSection id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-5 gap-8 items-center",
      )}>
        <div className="md:col-span-3 order-2 md:order-1">
          {prefersReducedMotion ? (
            <p className="text-lg leading-relaxed">{summary}</p>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {summary.split('. ').map((sentence, index) => (
                <motion.p 
                  key={index}
                  className="text-lg leading-relaxed mb-4"
                  variants={item}
                  transition={{ duration: 0.5 }}
                >
                  {sentence + (index < summary.split('. ').length - 1 ? '.' : '')}
                </motion.p>
              ))}
            </motion.div>
          )}
        </div>
        
        <div className="md:col-span-2 flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src={avatar} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 animate-pulse" style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
