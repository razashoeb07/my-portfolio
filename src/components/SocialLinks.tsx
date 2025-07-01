import { Linkedin, Github, Twitter, Facebook, Instagram, Youtube, Code } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({
  links,
  className,
  iconSize = 20
}: SocialLinksProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "linkedin":
        return <Linkedin size={iconSize} />;
      case "github":
        return <Github size={iconSize} />;
      case "twitter":
        return <Twitter size={iconSize} />;
      case "facebook":
        return <Facebook size={iconSize} />;
      case "instagram":
        return <Instagram size={iconSize} />;
      case "youtube":
        return <Youtube size={iconSize} />;
      case "code":
        return <Code size={iconSize} />;
      default:
        return <Linkedin size={iconSize} />;
    }
  };

  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-4", className)}>
        {links.map((link) => (
          <Tooltip key={link.platform}>
            <TooltipTrigger asChild>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {getIcon(link.icon)}
              </a>
            </TooltipTrigger>
            <TooltipContent>{link.platform}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
