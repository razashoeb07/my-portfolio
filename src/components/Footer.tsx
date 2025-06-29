
import SocialLinks from "./SocialLinks";
import profile from "@/data/profile";

export default function Footer() {
  const { name, social } = profile.basics;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <SocialLinks links={social} className="mb-4" />
          
          <p className="text-center text-muted-foreground">
            © {currentYear} {name}. All rights reserved.
          </p>
          
          <p className="text-center text-sm text-muted-foreground mt-2">
            Made with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
