import { ContactForm } from "@/app/contact/contact-form";
import Image from "next/image";
import profilePic from "@/assets/profil.png";
import { SOCIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PageBackground } from "@/components/layout/PageBackground";

export default function Home() {
  return (
    <>
      <PageBackground className="flex items-center">
        <ContactSection />
      </PageBackground>
    </>
  );
}

const ContactSection = () => {
  return (
    <section className="max-w-screen-md mx-auto px-4 md:px-8 py-8 flex flex-col justify-center items-stretch scroll-mt-12 relative ">
      <div className="flex mb-4 md:mb-8 relative gap-4">
        <div className="relative">
          <Image
            src={profilePic}
            alt="Photo de Clément RICATTE"
            className="w-16 max-w-16 rounded-sm border border-1 border-primary"
          />
        </div>
        <div>
          <h1 className="text-4xl">Me contacter</h1>
          <p className="mt-2 text-sm">
            Vous pouvez me contacter depuis le formulaire ci-dessous ou à partir
            de l&apos;un de mes réseaux sociaux.
          </p>
        </div>
        <div className="-z-[1] absolute bg-primary/20 inset-0 blur-2xl -rotate-3 scale-125"></div>
      </div>
      <div className="flex gap-2 sm:gap-8 flex-col-reverse sm:flex-row-reverse">
        <div className="flex-1 text-justify">
          <ContactForm />
        </div>
        <div className="col-span-12 sm:col-span-2 flex sm:flex-col justify-start items-start max-sm:space-x-4">
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
                <TooltipContent className="sm:hidden">
                  <p>{title}</p>
                </TooltipContent>
                <TooltipContent side="right" className="max-sm:hidden">
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};
