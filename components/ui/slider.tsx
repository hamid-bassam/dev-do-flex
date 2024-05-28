"use client"

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";
type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  rangeColor?: string;
  trackColor?: string;
};
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, trackColor, rangeColor, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className={cn("relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", `${trackColor}/20`)}>
      <SliderPrimitive.Range className={cn("absolute h-full bg-primary", rangeColor)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider };

