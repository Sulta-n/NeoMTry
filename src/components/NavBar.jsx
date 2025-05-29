import { cn } from "@/lib/utils";
import logo from "/images/logo.png";
import { Menu, MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  {
    name: "offers",
    href: "#offers",
  },
  {
    name: "place an order",
    href: "#order",
  },
  {
    name: "about us",
    href: "#about",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-60 transition-all duration-300"
      )}
    >
      <div className="container flex items-center justify-between md:bg-background/80 md:backdrop-blur-md">
        <a href="#home">
          <img src={logo} alt="logo" className="h-22 w-22 object-cover py-2" />
        </a>
        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="capitalize text-2xl text-primary/50  hover:text-primary/80 transition-colors duration-400"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile */}
        <button
          className="md:hidden z-80 p-2 text-button/30  backdrop-blur-md rounded-b-lg"
          onClick={() => setIsNavShowing((prev) => !prev)}
          aria-label={isNavShowing ? "Close Menu" : "Open Menu"}
        >
          {isNavShowing ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
        <div
          className={cn(
            " fixed top-0 left-0 w-full h-full inset-0 bg-background/95 backdrop-blur-md z-70 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isNavShowing
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl capitalize ">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-secondary  hover:text-primary transition-colors duration-400"
                onClick={() => setIsNavShowing(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
