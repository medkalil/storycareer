"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, LayoutDashboard, Book, Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "My Stories", href: "/story", icon: Book },
  { label: "My saves", href: "/saves", icon: Heart },
];

const MobileSidebar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="p-12 space-y-2" side={"left"}>
        {sidebarLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "h-10 px-5 py-2 flex items-center gap-x-2 text-sm hover:bg-primary rounded-md transition-colors duration-200 font-medium hover:text-primary-foreground ",
              pathname.startsWith(href) &&
                "bg-primary text-primary-foreground font-semibold"
            )}
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
