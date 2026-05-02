import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, as: Component = "div" }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10",
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";

export default Container;
