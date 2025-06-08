import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// This file defines styled Accordion components based on Radix UI's Accordion primitives.
// It re-exports the Radix components, applying custom styling via Tailwind CSS
// and the `cn` utility function for merging class names.

// Accordion is the root component that manages the state of the accordion items.
const Accordion = AccordionPrimitive.Root; 

/**
 * AccordionItem represents an individual collapsible section within the Accordion.
 * It typically contains an AccordionTrigger and an AccordionContent.
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  // Each item has a bottom border for visual separation.
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)} // `cn` merges default styles with any provided `className`.
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger is the clickable element that toggles the visibility
// of the associated AccordionContent. It's typically used as the header
// for an accordion section.
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      // Styles for the trigger:
      // - `flex flex-1 items-center justify-between`: Makes it a flex container, taking available space,
      //   centering items vertically, and distributing space between children (text and icon).
      // - `py-4`: Adds vertical padding.
      // - `font-medium`: Sets the font weight.
      // - `transition-all hover:underline`: Smooth transitions and underline on hover.
      // - `[&[data-state=open]>svg]:rotate-180`: Rotates the ChevronDown icon when the item is open.
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      {/* ChevronDown icon indicates the collapsible state and animates its rotation. */}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// AccordionContent is the section that expands or collapses when the
// AccordionTrigger is clicked. It contains the main content of an accordion item.
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    // Styles for the content area:
    // - `overflow-hidden`: Clips content during animation.
    // - `text-sm`: Sets a smaller font size for the content.
    // - `transition-all`: Enables smooth transitions for properties like height.
    // - `data-[state=closed]:animate-accordion-up` and `data-[state=open]:animate-accordion-down`:
    //   Apply custom animations (likely defined in tailwind.config.js or global CSS) for opening and closing.
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// Export the styled Accordion components for use throughout the application.
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
