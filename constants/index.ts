import { SocialLinkProps } from "@/types";
import { NavLinks } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
];

export const navLinks: NavLinks[] = [
  {
    route: "/projects",
    label: "Projects",
  },

  {
    route: "/blog",
    label: "Blog",
  },
  {
    route: "/account",
    label: "Account",
  },
];

export const socialLinks: SocialLinkProps[] = [
  {
    name: "twitter",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "telegram",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "website",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "discord",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "youtube",
    url: "https://webpack.js.org/concepts",
  },
];
