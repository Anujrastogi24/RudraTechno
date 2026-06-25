"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => setNavbarOpen(false);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-gray-dark/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex h-24 items-center justify-between">
          {/* Left: logo + nav grouped together */}
          <div className="flex items-center gap-x-8 xl:gap-x-12">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/images/logo/Rudra_Techno-logo.png"
                alt="Rudra Techno"
                width={300}
                height={200}
                priority
                className="h-16 w-auto lg:h-20"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-x-7 xl:gap-x-8">
                {menuData.map((item) => {
                  const isActive =
                    pathname === item.path ||
                    (item.path !== "/" &&
                      pathname.startsWith(item.path ?? "###"));
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.path ?? "/"}
                        className={`text-[15px] font-medium transition-colors ${
                          isActive
                            ? "text-primary dark:text-white"
                            : "text-gray-700 hover:text-black dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-x-3">
            <Link
              href="/signin"
              className="hidden text-[15px] font-medium text-gray-700 transition-colors hover:text-black md:block dark:text-white/70 dark:hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="hidden rounded-lg bg-primary px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md md:inline-flex"
            >
              Start a project
            </Link>
            <ThemeToggler />

            {/* Mobile toggle */}
            <button
              onClick={navbarToggleHandler}
              aria-label="Toggle menu"
              aria-expanded={navbarOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-4 w-6">
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-6 bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-t border-gray-200/70 bg-white transition-[max-height] duration-300 lg:hidden dark:border-white/10 dark:bg-gray-dark ${
          navbarOpen ? "max-h-[480px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="container py-6">
          <ul className="flex flex-col gap-y-1">
            {menuData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path ?? "/"}
                  onClick={closeNavbar}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-black dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-y-3 border-t border-gray-200/70 pt-5 dark:border-white/10">
            <Link
              href="/signin"
              onClick={closeNavbar}
              className="rounded-lg px-3 py-2.5 text-center text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:text-white/80 dark:hover:bg-white/5"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              onClick={closeNavbar}
              className="rounded-lg bg-primary px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Start a project
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
