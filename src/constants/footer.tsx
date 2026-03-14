import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavigationItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const navigation: NavigationItem[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nuestra-tierra-co/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nuestratierraco",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nuestratierraco/",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@nuestratierraco7153",
    icon: Youtube,
  },
];