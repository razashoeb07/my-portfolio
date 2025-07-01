
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
// import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
// import Achievements from "./sections/Achievements";
// import Volunteering from "./sections/Volunteering";
import Contact from "./sections/Contact";
import profile from "./data/profile";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Update metadata from profile data
    document.title = profile.meta.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", profile.meta.description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (ogTitle) {
      ogTitle.setAttribute("content", profile.meta.title);
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", profile.meta.description);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Hero />
            <About />
            <Skills />
            {/* <Experience /> */}
            <Projects />
            <Education />
            {/* <Achievements /> */}
            {/* <Volunteering /> */}
            <Contact />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
