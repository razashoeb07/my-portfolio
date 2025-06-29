
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import profile from "@/data/profile";
import { cn } from "@/lib/utils";

export default function Skills() {
  const { skills } = profile;
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  return (
    <AnimatedSection id="skills">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div 
            key={skillGroup.category} 
            className="bg-card p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
            
            {prefersReducedMotion ? (
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="space-y-4"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {skillGroup.items.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    variants={item}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.3,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
