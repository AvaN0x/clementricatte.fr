"use client";

import { IconMenu } from "@/components/icons";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { HEADER_LINKS, SOCIALS } from "@/lib/constants";

export const HeaderMenu = React.forwardRef<
  HTMLButtonElement,
  { className?: string }
>(({ className }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          ref={ref}
          variant="ghost"
          size="icon"
          className={cn("bg-background", className)}
        >
          <IconMenu />
          <span className="sr-only">Ouvrir le menu de navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-5/6 overflow-y-auto">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="focus-visible-ring rounded-sm"
            >
              <Logo className="size-5 rounded-sm mr-2 border border-1 border-primary inline-block align-text-bottom" />
              <span>AvaN0x</span>
            </Link>
          </li>
          {HEADER_LINKS.map((headerLink) => (
            <li key={headerLink.text}>
              {"href" in headerLink ? (
                <Link
                  href={headerLink.href}
                  className="w-full block p-1 focus-visible-ring rounded-sm"
                  onClick={() => setOpen(false)}
                >
                  {headerLink.text}
                </Link>
              ) : (
                <>
                  <span className="text-sm text-foreground/80">
                    {headerLink.text}
                  </span>
                  <ul className="pl-2 relative flex flex-col before:content-[''] before:absolute before:top-0 before:bottom-1 before:left-1 before:w-[1px] before:bg-primary/50">
                    {headerLink.sub.map(({ text, href, description }) => (
                      <li key={text}>
                        <Link
                          href={href}
                          className="w-full block p-1 focus-visible-ring rounded-sm"
                          onClick={() => setOpen(false)}
                        >
                          <div>{text}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex gap-2">
          {SOCIALS.map(({ title, url, Icon }) => (
            <li key={title}>
              <Button variant="ghost" size="icon" asChild className="size-8">
                <Link href={url} target="_blank">
                  <Icon />
                  <span className="sr-only">{title}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
});
HeaderMenu.displayName = "HeaderMenu";
