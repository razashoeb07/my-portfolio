
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import profile from "@/data/profile";

export default function Education() {
  const { education, certifications } = profile;
  
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
    <AnimatedSection id="education">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <GraduationCap className="mr-2" />
            Education
          </h3>
          
          {prefersReducedMotion ? (
            <div className="space-y-10">
              {education.map((edu) => (
                <div key={`${edu.institution}-${edu.degree}`} className="timeline-item">
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <h5 className="text-md font-medium text-primary">{edu.institution}</h5>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span>{edu.start} - {edu.end}</span>
                  </div>
                  
                  {edu.description && (
                    <p className="mt-2 text-foreground/90">{edu.description}</p>
                  )}
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
              {education.map((edu) => (
                <motion.div 
                  key={`${edu.institution}-${edu.degree}`}
                  className="timeline-item"
                  variants={item}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <h5 className="text-md font-medium text-primary">{edu.institution}</h5>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span>{edu.start} - {edu.end}</span>
                  </div>
                  
                  {edu.description && (
                    <p className="mt-2 text-foreground/90">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Award className="mr-2" />
            Certifications
          </h3>
          
          {prefersReducedMotion ? (
            <div className="space-y-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="timeline-item">
                  <h4 className="text-lg font-bold">{cert.name}</h4>
                  <h5 className="text-md font-medium text-primary">{cert.issuer}</h5>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary hover:text-primary/80 underline"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="space-y-8"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.name}
                  className="timeline-item"
                  variants={item}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-lg font-bold">{cert.name}</h4>
                  <h5 className="text-md font-medium text-primary">{cert.issuer}</h5>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary hover:text-primary/80 underline"
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
