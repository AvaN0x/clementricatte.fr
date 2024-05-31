import MouseRadialGradient from "@/components/MouseRadialGradient";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import profilePic from "@/assets/profil.png";
import Link from "next/link";
import { SOCIALS } from "@/lib/socials";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MouseRadialGradient
        className={cn(
          "-mt-12 pt-12 h-screen overflow-x-hidden",
          "bg-gradient-to-tr from-10% via-80%",
          "from-violet-100/20 via-violet-50/20 to-violet-100/20",
          "dark:from-violet-900/20 dark:via-violet-950/20 dark:to-violet-900/20"
        )}
      >
        <AboutSection />
      </MouseRadialGradient>
    </>
  );
}

const AboutSection = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-4 md:px-8 my-8 min-h-[60vh] flex items-center ">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 sm:col-span-8">
          <h1 className="text-4xl">Clément RICATTE</h1>

          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <h2 className="text-2xl w-fit mt-2">
                  &quot;
                  <span className="border-b-4 border-dotted border-primary">
                    AvaN0x
                  </span>
                  &quot;
                </h2>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                align="start"
                className="max-w-[400px]"
              >
                <p className="mb-2">
                  Mon pseudo vient du mélange de deux sorts du &quot;Monde des
                  sorciers&quot; (Wizarding World) :{" "}
                  <span className="italic">
                    <span className="font-semibold dark:font-bold">Ava</span>da
                    Kedavra
                  </span>{" "}
                  et{" "}
                  <span className="font-semibold dark:font-bold italic">
                    Nox
                  </span>
                  .
                </p>
                <p className="mb-2">
                  Je suis un grand fan de cet univers et, au moment de choisir
                  mon pseudo, il m&apos;a paru comme étant le plus simple de me
                  baser sur ce dernier pour trouver celui qui me conviendrait.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator className="bg-primary/20 my-6" />

          <p className="mb-2">Hey !</p>
          <p className="mb-2">
            Je suis développeur fullstack français bien que j&apos;ai
            actuellement une préférence pour le frontend.
            <br />
            L&apos;informatique est ma passion depuis que j&apos;ai pu plonger
            dedans, j&apos;en suis l&apos;actualité au quotidien grâce à
            différents flux anglophone.
          </p>
          <p className="mt-6">
            Vous pouvez me contacter sur l&apos;un de mes réseaux ou depuis mon
            formulaire de{" "}
            <Link
              href="/contact"
              className="decoration-primary underline underline-offset-2 hover:text-primary focus-visible-ring rounded-sm"
            >
              contact
            </Link>
            .
          </p>
          <div>
            <TooltipProvider>
              {SOCIALS.map(({ title, url, Icon }) => (
                <Tooltip delayDuration={200} key={title}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="size-8"
                    >
                      <Link href={url}>
                        <Icon />
                        <span className="sr-only">{title}</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{title}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4 flex justify-center row-start-1 sm:row-start-auto relative">
          <Image
            src={profilePic}
            alt="Photo de Clément RICATTE"
            className="w-1/3 sm:w-full rounded-sm border border-1 border-primary"
          />
          <div className="-z-[1] absolute bg-primary/25 inset-0 blur-3xl rotate-12 scale-125"></div>
        </div>
      </div>
    </section>
  );
};
