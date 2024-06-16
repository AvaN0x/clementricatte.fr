import { PageBackground } from "@/components/layout/PageBackground";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <>
      <PageBackground className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-primary drop-shadow-lg">404</h1>
        <Separator className="w-24 bg-primary mt-2 mb-4" />
        <p className="text-muted-foreground mx-4 max-w-md text-center">
          La page que vous cherchez n&apos;existe pas ou plus.
        </p>
      </PageBackground>
    </>
  );
}
