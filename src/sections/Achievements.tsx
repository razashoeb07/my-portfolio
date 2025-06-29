
import { motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import profile from "@/data/profile";

export default function Achievements() {
  const { achievements } = profile;
  
  if (!achievements || achievements.length === 0) {
    return null;
  }
  
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
    <AnimatedSection id="achievements">
      <h2 className="section-title">Achievements</h2>
      
      {prefersReducedMotion ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Trophy className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar size={14} className="mr-1" />
                <span>{achievement.date}</span>
              </div>
              
              <p className="text-foreground/90">{achievement.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Trophy className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{achievement.title}</h3>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar size={14} className="mr-1" />
                <span>{achievement.date}</span>
              </div>
              
              <p className="text-foreground/90">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatedSection>
  );
}
