"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/modeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
const NavLinks = [
  { label: "Home", href: "/" },
  { label: "Share your story", href: "/story" },
  { label: "Browse stories", href: "/stories" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="py-5 fixed z-50 w-full bg-background">
      <div className="flex max-w-7xl m-auto px-5 items-center justify-between">
        <Image
          src={"/logo-black.svg"}
          alt=""
          width={130}
          height={130}
          className="dark:hidden"
        />
        <Image
          src={"/logo-white.svg"}
          alt=""
          width={130}
          height={130}
          className="hidden dark:block "
        />
        <div className="hidden md:flex items-center gap-x-3 ">
          {NavLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "text-sm text-muted-foreground hover:text-primary transition-colors",
                pathname === href && "text-primary font-semibold"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <span>Login</span>

          <Sheet>
            <SheetTrigger className="block md:hidden">
              <Menu className="w8 h-8" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <Image
                  src={"/logo-black.svg"}
                  alt=""
                  width={130}
                  height={130}
                  className="dark:hidden"
                />
                <Image
                  src={"/logo-white.svg"}
                  alt=""
                  width={130}
                  height={130}
                  className="hidden dark:block "
                />
              </SheetHeader>
              <div className="flex flex-col items-start gap-y-3 my-10">
                {NavLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={cn(
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                      pathname === href && "text-primary font-semibold"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <span>Login</span>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
