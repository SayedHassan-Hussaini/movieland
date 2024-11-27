"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menu = [
    { id: 1, name: "Home", link: "/" },

    { id: 2, name: "About us", link: "/about-us" },
    { id: 5, name: "Contact us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`${isScrolled ? "h-16" : "h-20"}`}></div>
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 h-16 backdrop-blur-xl border-b-[1px] border-neutral-100"
            : "bg-white h-20"
        }`}
      >
        <div className="mx-auto flex h-full max-w-screen-2xl items-center lg:gap-8 gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="block py-2 me-4">
            <span className="sr-only">Home</span>
            <Image
              src="https://hindukush-bridge.com/wp-content/uploads/2023/08/Mohr-Hindukush-1.png"
              alt="Hindukush Bridge ICT"
              width={130}
              height={40}
              className="object-cover"
            />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            {/* desktop menu */}
            <DesktopMenu menu={menu} />

            <div className="flex items-center gap-4">
              <div className="md:flex sm:gap-4 hidden" dir="ltr">
                <Link
                  className="flex gap-2 items-center bg-primary hover:bg-primary-dark rounded-md px-5 h-10 text-sm font-medium text-white transition"
                  href="/auth/login"
                >
                  Sing in
                </Link>
              </div>

              <button
                className="block md:hidden"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <span className="sr-only">Toggle menu</span>
                <Menu />
              </button>

              {/* mobile menu */}
              <MobileMenu
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
                menu={menu}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
