import { cn } from "@/lib/utils";
import logo from "/images/logo.png";
import { MenuIcon, X } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "pt-2 bg-background/80 backdrop-blur-md shadow-xs" : "py-2"
      )}
    >
      <div className="container flex items-center justify-between">
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
          className="md:hidden z-50 p-2 text-button/30"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center md:hidden bg-card/20 backdrop-blur-md z-40 transition-all durration-300",
            isNavShowing ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col space-y-8 text-3xl capitalize ">
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
