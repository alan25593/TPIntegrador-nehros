import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "bg-[#9e59f8] text-white font-bold rounded-[10px] xl:text-2xl text-xl p-4 h-full hover:bg-[#864ad4] transition duration-300 shadow-2xl",
        charlemos:
          "px-4 py-2 bg-gradient-to-tr from-[#B276F4] to-[#B03FE5] hover:bg-gradient-to-tr hover:from-[#B03FE5] hover:to-[#B276F4] text-white text-white font-bold rounded-full h-full shadow-2xl xl:text-xl lg:text-lg md:text-base text-sm",
        charlemosHome:
          "px-[18px] py-[10px] bg-gradient-to-tr from-[#B276F4] to-[#B03FE5] hover:bg-gradient-to-tr hover:from-[#B03FE5] hover:to-[#B276F4] text-white text-white font-bold rounded-full h-full shadow-2xl text-3xl",
      },
      size: {},
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
