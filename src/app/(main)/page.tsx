import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import profilePic from "@/assets/profil.png";
import Link from "next/link";
import { SOCIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SeparatorText } from "@/components/SeparatorText";
import {
  SECTION_ABOUT_ID,
  SECTION_PRESENTATION_ID,
  SECTION_PROJECTS_ID,
} from "@/app/(main)/constants";
import { PageBackground } from "@/components/layout/PageBackground";
import { EXPERIENCES } from "@/lib/constants/experiences";
import { ExperienceCard } from "@/components/experiences";
import { EDUCATIONS } from "@/lib/constants/educations";
import { EducationCard } from "@/components/educations";
import {
  CardsCarousel,
  CardsCarouselActions,
  CardsCarouselContent,
  CardsCarouselItem,
  CardsCarouselToggleExpanded,
} from "@/components/CardsCarousel";

export default function Home() {
  return (
    <>
      <PageBackground>
        <AboutSection />
        <PresentationSection />
        <ProjectsSection />
      </PageBackground>
    </>
  );
}

const AboutSection = () => {
  return (
    <section
      id={SECTION_ABOUT_ID}
      className="max-w-screen-lg mx-auto px-4 md:px-8 py-8 min-h-[60vh] flex items-center scroll-mt-12 "
    >
      <div className="grid sm:grid-cols-12 gap-8 items-center">
        <div className="sm:col-span-8 text-justify">
          <h1 className="text-4xl">Clément RICATTE</h1>

          <Popover>
            <PopoverTrigger className="focus-visible-ring rounded-sm mt-2">
              <h2 className="text-2xl w-fit cursor-pointer">
                &quot;
                <span className="border-b-4 border-dotted border-primary hover:text-primary transition-colors">
                  AvaN0x
                </span>
                &quot;
              </h2>
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="start"
              className="w-auto max-w-[min(400px,calc(100vw-3rem))]"
            >
              <p className="mb-2">
                Mon pseudo vient du mélange de deux sorts du &quot;Monde des
                sorciers&quot; (Wizarding World, univers d&apos;Harry
                Potter)&nbsp;:{" "}
                <span className="italic">
                  <span className="font-semibold dark:font-bold">Ava</span>
                  da&nbsp;Kedavra
                </span>{" "}
                et{" "}
                <span className="font-semibold dark:font-bold italic">Nox</span>
                .
              </p>
              <p className="mb-2">
                Etant un grand fan de cet univers, il m&apos;a paru évident de
                m&apos;en servir de base au moment du choix de mon pseudo.
              </p>
            </PopoverContent>
          </Popover>

          <Separator className="bg-border/20 my-6" />

          <p className="mb-2">Hey !</p>
          <p className="mb-2">
            Je suis développeur fullstack français bien que j&apos;ai
            actuellement une préférence pour le frontend.
            <br />
            L&apos;informatique est ma passion depuis que j&apos;ai pu plonger
            dedans, j&apos;en suis l&apos;actualité au quotidien grâce à
            différents flux anglophones.
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
          <div className="max-sm:space-x-4 max-sm:mt-4">
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
                      <Link href={url} target="_blank">
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
        <div className="sm:col-span-4 flex justify-center row-start-1 sm:row-start-auto relative">
          <Image
            src={profilePic}
            alt="Photo de Clément RICATTE"
            className="w-1/3 sm:w-full rounded-sm border border-1 border-primary"
          />
          <div className="-z-[1] absolute bg-primary/10 dark:bg-primary/25 inset-0 blur-3xl rotate-12 scale-125"></div>
        </div>
      </div>
    </section>
  );
};

const PresentationSection = () => {
  return (
    <section
      id={SECTION_PRESENTATION_ID}
      className="max-w-screen-lg mx-auto px-4 md:px-8 py-8 scroll-mt-12"
    >
      <SeparatorText>
        <h2>Présentation</h2>
      </SeparatorText>
      <div className="space-y-6">
        <CardsCarousel>
          <div className="flex justify-between items-end">
            <h3 className="mb-2">Expériences</h3>
            <CardsCarouselToggleExpanded />
          </div>
          <CardsCarouselContent>
            {Object.entries(EXPERIENCES.filter((e) => !e.nonRelevant)).map(
              ([key, experience]) => (
                <CardsCarouselItem key={key}>
                  <ExperienceCard experience={experience} className="h-full" />
                </CardsCarouselItem>
              )
            )}
          </CardsCarouselContent>
          <CardsCarouselActions />
        </CardsCarousel>
        <CardsCarousel>
          <div className="flex justify-between items-end">
            <h3 className="mb-2">Diplômes</h3>
            <CardsCarouselToggleExpanded />
          </div>
          <CardsCarouselContent>
            {Object.entries(EDUCATIONS.filter((e) => !e.nonRelevant)).map(
              ([key, education]) => (
                <CardsCarouselItem key={key}>
                  <EducationCard education={education} className="h-full" />
                </CardsCarouselItem>
              )
            )}
          </CardsCarouselContent>
          <CardsCarouselActions />
        </CardsCarousel>
        <p>🚧 Work in progress ! 🚧</p>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id={SECTION_PROJECTS_ID}
      className="max-w-screen-lg mx-auto px-4 md:px-8 py-8 scroll-mt-12"
    >
      <SeparatorText>
        <h2>Projets</h2>
      </SeparatorText>
      <p>🚧 Work in progress ! 🚧</p>
    </section>
  );
};
