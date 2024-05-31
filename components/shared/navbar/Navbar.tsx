"use client";

import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="background-light900_dark900 fixed  z-50 w-full  py-6">
      <nav className="flex-between flex w-full gap-5 px-4 dark:shadow-none  xl:px-20">
        <Link href={"/"} className="">
          <div className="flex flex-col gap-1">
            <p className=" text-2xl font-bold leading-[22px]  text-light-text-950 transition-all duration-300 dark:text-dark-text-950">
              Test App
            </p>
          </div>
        </Link>
        <div className="flex-between gap-5">
          <div className="hidden flex-1 flex-row gap-6 p-2 transition-all duration-300 md:flex lg:gap-12">
            {navLinks.map((item) => {
              const isActive =
                (pathname.includes(item.route) && item.route.length > 1) ||
                pathname === item.route;
              return (
                <Link
                  className={`${
                    isActive
                      ? "text-light950_dark-950 text-bold "
                      : "text-light500_dark-700 text-semibold "
                  } flex items-center justify-start  bg-transparent  tracking-[0.03px] `}
                  href={item.route}
                  key={item.route}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:block">
            <Theme />
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
