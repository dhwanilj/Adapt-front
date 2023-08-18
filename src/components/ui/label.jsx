import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../lib/utils";

const Label = ({ htmlFor, label, muted, className }) => (
  <LabelPrimitive.Root
    className={cn(
      "text-[14px] mb-1 font-medium text-primary",
      muted && "text-primary/60 text-[12px]",
      className
    )}
    htmlFor={htmlFor}
  >
    {label}
  </LabelPrimitive.Root>
);

export { Label };
