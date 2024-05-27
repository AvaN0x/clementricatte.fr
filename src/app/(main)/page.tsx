import MouseRadialGradient from "@/components/MouseRadialGradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <MouseRadialGradient
        className={cn(
          "-mt-12 pt-12 h-screen",
          "bg-gradient-to-tr from-10% via-80%",
          "from-violet-100/20 via-violet-50/20 to-violet-100/20",
          "dark:from-violet-900/20 dark:via-violet-950/20 dark:to-violet-900/20"
        )}
      >
        <div className="container">
          <h1 className="text-red-600 dark:text-green-600">test</h1>
          <p className="text-primary">primary</p>
        </div>
      </MouseRadialGradient>
    </>
  );
}
