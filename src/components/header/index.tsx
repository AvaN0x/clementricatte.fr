"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenuIconButton,
  ListItem,
  navigationIconItemClass,
} from "@/components/header/Navigation";
import { Logo } from "@/components/Logo";
import { HEADER_LINKS, SOCIALS } from "@/lib/constants";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HeaderMenu } from "@/components/header/Menu";

export function Header() {
  return (
    <header className="py-2 sticky top-0 backdrop-blur-sm bg-foreground/5 dark:bg-background/30 z-[1] h-12 border-b border-b-primary/50">
      <div className="max-w-screen-xl mx-auto flex align-middle justify-between px-2 ">
        <NavigationMenu delayDuration={2000}>
          <NavigationMenuList>
            <NavigationMenuItem className="min-[570px]:hidden">
              <HeaderMenu className={navigationIconItemClass} />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/"
              >
                <Logo className="size-5 rounded-sm mr-2 border border-1 border-primary" />
                <span>AvaN0x</span>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {HEADER_LINKS.map((headerLink) => (
              <NavigationMenuItem
                key={headerLink.text}
                className="max-[570px]:hidden"
              >
                {"href" in headerLink ? (
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href={headerLink.href}
                  >
                    {headerLink.text}
                  </NavigationMenuLink>
                ) : (
                  <>
                    <NavigationMenuTrigger>
                      {headerLink.text}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
                        {headerLink.sub.map(({ text, href, description }) => (
                          <ListItem key={text} title={text} href={href}>
                            {description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <TooltipProvider>
            <NavigationMenuList className="max-[360px]:hidden">
              {SOCIALS.map(({ title, url, Icon }) => (
                <NavigationMenuItem key={title}>
                  <NavigationMenuIconButton
                    title={title}
                    href={url}
                    target="_blank"
                  >
                    <Icon />
                  </NavigationMenuIconButton>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>

            <Separator
              orientation="vertical"
              className="h-6 bg-primary/20 mx-1"
            />

            <NavigationMenuList>
              <NavigationMenuItem>
                <ThemeToggle className={navigationIconItemClass} />
              </NavigationMenuItem>
            </NavigationMenuList>
          </TooltipProvider>
        </NavigationMenu>
      </div>
    </header>
  );
}
