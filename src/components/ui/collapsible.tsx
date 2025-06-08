import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

/**
 * An interactive component that expands/collapses a content section.
 */
const Collapsible = CollapsiblePrimitive.Root

/**
 * A button that toggles the collapsible content.
 */
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

/**
 * The content that is shown or hidden by the collapsible trigger.
 */
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
