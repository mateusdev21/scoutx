import { cn } from "@/shared/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight text-white lg:text-4xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Subheading({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold tracking-tight text-white lg:text-2xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Text({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm leading-relaxed text-zinc-300", className)}>
      {children}
    </p>
  );
}

export function MutedText({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm leading-relaxed text-zinc-500", className)}>
      {children}
    </p>
  );
}
