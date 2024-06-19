import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const ModalP = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn("mb-2 text-justify", className)}>{children}</p>;
};

export const ModalLink = ({
  children,
  className,
  href,
}: {
  children?: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "decoration-primary underline underline-offset-2 hover:text-primary focus-visible-ring rounded-sm",
        className
      )}
    >
      {children}
    </Link>
  );
};

export const ModalUL = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <ul className={cn("list-disc marker:text-primary  pl-4", className)}>
      {children}
    </ul>
  );
};

export const ModalLI = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <li className={cn("", className)}>{children}</li>;
};

export const ModalSeparator = ({ className }: { className?: string }) => {
  return <Separator className={cn("my-2", className)} />;
};
