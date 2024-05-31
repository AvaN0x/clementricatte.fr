"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LICENCE_NAME, LICENCE_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-2  backdrop-blur-sm bg-violet-950/5 dark:bg-violet-950/30 z-[1] border-t border-t-primary/50">
      <div className="max-w-screen-xl mx-auto flex align-middle justify-center px-2 ">
        <ul className="flex gap-y-2 flex-col md:flex-row items-center">
          <FooterItemLink href={LICENCE_URL}>{LICENCE_NAME}</FooterItemLink>
          <FooterItemLink href="/contact">Contact</FooterItemLink>
        </ul>
      </div>
    </footer>
  );
}

const FooterItemLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, children, ...props }, ref) => {
  return (
    <li className="md:after:content-['•'] md:last:after:content-none">
      <Link
        ref={ref}
        className={cn(
          "decoration-primary underline underline-offset-2 hover:text-primary focus-visible-ring rounded-sm px-4 ",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
});
FooterItemLink.displayName = "FooterItemLink";
