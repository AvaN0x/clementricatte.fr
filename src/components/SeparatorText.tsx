import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const SeparatorText = ({
  children,
  separatorClassName,
}: {
  children: React.ReactNode;
  separatorClassName?: string;
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <Separator
        decorative
        className={cn(
          "flex-grow w-auto bg-primary dark:bg-primary/75",
          separatorClassName
        )}
      />
      <div className="flex-shrink mx-4">{children}</div>
      <Separator
        decorative
        className={cn(
          "flex-grow w-auto bg-primary dark:bg-primary/75",
          separatorClassName
        )}
      />
    </div>
  );
};
