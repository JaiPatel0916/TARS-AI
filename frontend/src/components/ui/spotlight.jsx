import React from "react"
import { cn } from "../../lib/utils";

export function Spotlight({ className, fill = "white" }) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-30 blur-3xl",
        className
      )}
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <ellipse
        cx="1924.71"
        cy="273.501"
        rx="1924.71"
        ry="273.501"
        fill={fill}
        fillOpacity="0.2"
      />
    </svg>
  )
}
