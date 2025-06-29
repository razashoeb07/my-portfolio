
import { motion } from "framer-motion";
import { Heart, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import profile from "@/data/profile";

export default function Volunteering() {
  const { volunteering } = profile;
  
  if (!volunteering || volunteering.length === 0) {
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
    <AnimatedSection id="volunteering">
      <h2 className="section-title">Volunteering</h2>
      
      {prefersReducedMotion ? (
        <div className="space-y-10">
          {volunteering.map((volunteer, index) => (
            <div key={index} className="timeline-item">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="text-accent h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{volunteer.role}</h3>
                  <h4 className="text-lg font-medium text-primary">{volunteer.organization}</h4>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{volunteer.start} - {volunteer.end}</span>
                  </div>
                  
                  <p className="text-foreground/90">{volunteer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="space-y-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {volunteering.map((volunteer, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="text-accent h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{volunteer.role}</h3>
                  <h4 className="text-lg font-medium text-primary">{volunteer.organization}</h4>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{volunteer.start} - {volunteer.end}</span>
                  </div>
                  
                  <p className="text-foreground/90">{volunteer.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatedSection>
  );
}
