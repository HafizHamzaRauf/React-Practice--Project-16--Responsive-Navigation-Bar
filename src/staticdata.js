import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const iconSize = 24;
export const links = [
  {
    text: "Home",
  },
  {
    text: "About",
  },
  {
    text: "Projects",
  },
  {
    text: "Contact",
  },
  {
    text: "Profile",
  },
];

export const socialLinks = [
  {
    icon: <FaFacebook size={iconSize} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <FaTwitter size={iconSize} />,
    url: "https://www.twitter.com/",
  },
  {
    icon: <FaLinkedin size={iconSize} />,
    url: "https://www.linkedin.com/",
  },
];
