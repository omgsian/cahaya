import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://omgsian.github.io/cahaya/",
  author: "Ridzwan",
  desc: "Documenting my journey transitioning from product design to cloud engineering",
  title: "Journey Into Cloud",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/omgsian/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ridzwanharon/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ridzux.mew49@slmail.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },

];
