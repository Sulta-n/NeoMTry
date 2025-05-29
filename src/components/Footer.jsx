import { ArrowUp, Instagram, Twitch, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between container relative border-t border-border/80 py-8 mt-12 max-sm:flex-col space-y-3">
      <p className="text-sm text-secondary/90 text-semibold">
        &copy; {new Date().getFullYear()} Neomemories.co. | All Rights Reserved
      </p>

      <div className="flex space-x-2 items-center justify-center text-primary/70">
        <Instagram />
        <Twitter />
        <Twitch />
        <a href="#home">
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
