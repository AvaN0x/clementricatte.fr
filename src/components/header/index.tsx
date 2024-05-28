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

export function Header() {
  return (
    <header className="py-2 sticky top-0 backdrop-blur-sm bg-background/30 z-[1] h-12">
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
            <NavigationMenuItem>
              <NavigationMenuIconButton
                title="Github"
                href="https://github.com/AvaN0x"
                target="_blank"
              >
                <IconBrandGithub />
              </NavigationMenuIconButton>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuIconButton
                title="X"
                href="https://x.com/ClemAvaN0x"
                target="_blank"
              >
                <IconBrandX />
              </NavigationMenuIconButton>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuIconButton
                title="Discord"
                href="/discord"
                target="_blank"
              >
                <IconBrandDiscord />
              </NavigationMenuIconButton>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuIconButton
                title="Linkedin"
                href="https://www.linkedin.com/in/clement-ricatte/"
                target="_blank"
              >
                <IconBrandLinkedin />
              </NavigationMenuIconButton>
            </NavigationMenuItem>

            <Separator orientation="vertical" className="h-6" />

            <NavigationMenuItem>
              <ThemeToggle className={navigationIconItemClass} />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
