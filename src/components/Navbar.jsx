import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        className={`fixed top-0 left-0 right-0 h-16 transition-all duration-300 z-50 bg-fifth/10 backdrop-blur-md
          ${isScrolled ? "shadow-lg" : ""}
        `}
      >
        <div className="w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <NavbarBrand>
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <p className="text-white text-2xl md:text-3xl font-semibold">
                Thet.Dev
              </p>
            </Link>
          </NavbarBrand>

          {/* Desktop Menu */}
          <NavbarContent
            className="hidden sm:flex gap-8 text-opacity-hover text-white"
            justify="center"
          >
            <NavbarItem>
              <NextUILink className="text-white text-lg md:text-xl" href="#">
                About Me
              </NextUILink>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-white text-lg md:text-xl" to="/projects">
                Projects
              </Link>
            </NavbarItem>
            <NavbarItem>
              <NextUILink className="text-white text-lg md:text-xl" href="#">
                Contact
              </NextUILink>
            </NavbarItem>
          </NavbarContent>

          {/* Burger Menu Button */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                      }`}
            />
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
            />
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                      }`}
            />
          </button>
        </div>
      </Navbar>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-72 transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="relative h-full">
          <div className="absolute inset-0 bg-first/95 backdrop-blur-xl shadow-xl" />
          <div className="relative z-10 flex flex-col gap-8 p-8 pt-24">
            <NextUILink
              className="text-white text-xl hover:text-third transition-colors"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </NextUILink>
            <Link
              className="text-white text-xl hover:text-third transition-colors"
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <NextUILink
              className="text-white text-xl hover:text-third transition-colors"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NextUILink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
