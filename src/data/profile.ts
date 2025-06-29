export default {
  basics: {
    name: "Jane Doe",
    title: "Full-Stack Developer",
    email: "jane@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    summary: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud architecture. Committed to creating elegant solutions that solve real-world problems.",
    avatar: "#YOUR_PROFILE_PHOTO_URL",
    social: [
      { platform: "LinkedIn", url: "#YOUR_LINKEDIN_URL", icon: "linkedin" },
      { platform: "GitHub", url: "#YOUR_GITHUB_URL", icon: "github" },
      { platform: "Twitter", url: "#YOUR_TWITTER_URL", icon: "twitter" }
    ],
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Jest", level: 80 }
      ]
    }
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      start: "Jan 2022",
      end: "Present",
      bullets: [
        "Led the frontend development for a dashboard used by 1M+ daily active users",
        "Reduced bundle size by 40% through code splitting and lazy loading strategies",
        "Implemented comprehensive test coverage, increasing test coverage from 65% to 95%",
        "Mentored junior developers and conducted code reviews for team of 8 developers"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "InnovateSoft",
      location: "Boston, MA",
      start: "Mar 2020",
      end: "Dec 2021",
      bullets: [
        "Developed and maintained multiple client-facing web applications with React and Node.js",
        "Implemented RESTful APIs that processed 500K+ daily requests",
        "Reduced page load times by 60% through performance optimizations",
        "Collaborated with UX designers to implement responsive mobile-first designs"
      ]
    },
    {
      role: "Junior Web Developer",
      company: "CodeStartup",
      location: "Remote",
      start: "Jun 2018",
      end: "Feb 2020",
      bullets: [
        "Built and maintained client websites using JavaScript, HTML, and CSS",
        "Integrated third-party APIs and services into web applications",
        "Participated in daily stand-ups and weekly sprint planning meetings",
        "Contributed to company's internal component library"
      ]
    }
  ],
  projects: [
    {
      title: "EcoTracker",
      description: "A full-stack application allowing users to track and reduce their carbon footprint through daily activities.",
      image: "#PROJECT1_IMAGE_URL",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#PROJECT1_LIVE_URL",
      sourceUrl: "#PROJECT1_REPO_URL"
    },
    {
      title: "DevConnect",
      description: "A social platform for developers to share projects, ask questions, and collaborate on open-source initiatives.",
      image: "#PROJECT2_IMAGE_URL",
      tags: ["React", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#PROJECT2_LIVE_URL",
      sourceUrl: "#PROJECT2_REPO_URL"
    },
    {
      title: "MealPrep Pro",
      description: "An application that helps users plan meals, generate shopping lists, and calculate nutritional information.",
      image: "#PROJECT3_IMAGE_URL",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      liveUrl: "#PROJECT3_LIVE_URL",
      sourceUrl: "#PROJECT3_REPO_URL"
    }
  ],
  education: [
    {
      degree: "M.S. Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      start: "2016",
      end: "2018",
      description: "Focused on Human-Computer Interaction and Database Systems. Thesis on adaptive user interfaces."
    },
    {
      degree: "B.S. Computer Science",
      institution: "MIT",
      location: "Cambridge, MA",
      start: "2012",
      end: "2016",
      description: "Minor in Mathematics. Dean's List all semesters. Participated in Hackathon team."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      url: "#AWS_CERTIFICATION_URL"
    },
    {
      name: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2021",
      url: "#GOOGLE_CERTIFICATION_URL"
    }
  ],
  achievements: [
    {
      title: "First Place, TechCrunch Hackathon",
      date: "2021",
      description: "Led team of 4 developers to create an accessibility-focused web application in 48 hours."
    },
    {
      title: "Open Source Contributor",
      date: "2019 - Present",
      description: "Regular contributor to React ecosystem projects with 20+ merged pull requests."
    }
  ],
  volunteering: [
    {
      role: "Coding Instructor",
      organization: "Code for Kids",
      start: "2020",
      end: "Present",
      description: "Teach weekly programming classes to underserved middle school students."
    },
    {
      role: "Tech Mentor",
      organization: "Women Who Code",
      start: "2019",
      end: "Present",
      description: "Mentor early-career women in technology careers through monthly meetups."
    }
  ],
  meta: {
    title: "Jane Doe | Full-Stack Developer",
    description: "Portfolio and resume of Jane Doe, Full-Stack Developer specializing in React, Node.js and cloud architecture.",
    twitterHandle: "@janedoe",
    language: "en",
    themeColor: "#2563eb"
  }
};
