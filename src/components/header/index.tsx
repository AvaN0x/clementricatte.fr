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
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenuIconButton,
  ListItem,
  navigationIconItemClass,
} from "@/components/header/Navigation";
import { Logo } from "@/components/Logo";
import { SOCIALS } from "@/lib/socials";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Header() {
  return (
    <header className="py-2 sticky top-0 backdrop-blur-sm bg-foreground/5 dark:bg-background/30  z-[1] h-12 border-b border-b-primary/50">
      <div className="max-w-screen-xl mx-auto flex align-middle justify-between px-2 ">
        <NavigationMenu delayDuration={2000}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Logo className="size-5 rounded-sm mr-2 border border-1 border-primary" />
                  <span>AvaN0x</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projets</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
                  <ListItem title="Projets scolaire" href="/">
                    Projets réalisés dans un cadre scolaire
                  </ListItem>
                  <ListItem title="Projets personnels" href="/">
                    Projets réalisés dans un cadre personnel
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <TooltipProvider>
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

              <Separator orientation="vertical" className="h-6" />

              <NavigationMenuItem>
                <ThemeToggle className={navigationIconItemClass} />
              </NavigationMenuItem>
            </TooltipProvider>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
