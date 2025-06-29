
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import profile from "@/data/profile";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const { experience } = profile;
  
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
    <AnimatedSection id="experience">
      <h2 className="section-title">Work Experience</h2>
      
      {prefersReducedMotion ? (
        <div className="space-y-12">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`} className="timeline-item">
              <h3 className="text-xl font-bold">{job.role}</h3>
              <h4 className="text-lg font-medium text-primary">{job.company}</h4>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground mt-1">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{job.start} - {job.end}</span>
                </div>
                
                {job.location && (
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                )}
              </div>
              
              <ul className="mt-3 list-disc list-inside space-y-1">
                {job.bullets.map((bullet, index) => (
                  <li key={index} className="text-foreground/90">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="space-y-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {experience.map((job) => (
            <motion.div 
              key={`${job.company}-${job.role}`}
              className="timeline-item"
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">{job.role}</h3>
              <h4 className="text-lg font-medium text-primary">{job.company}</h4>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted-foreground mt-1">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{job.start} - {job.end}</span>
                </div>
                
                {job.location && (
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                )}
              </div>
              
              <ul className="mt-3 list-disc list-inside space-y-1">
                {job.bullets.map((bullet, index) => (
                  <motion.li 
                    key={index}
                    className="text-foreground/90"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 * index + 0.3
                    }}
                  >
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatedSection>
  );
}
