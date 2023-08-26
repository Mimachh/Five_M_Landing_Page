"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"


// const Dialog = DialogPrimitive.Root

// const DialogTrigger = DialogPrimitive.Trigger

export const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    id="closeDialog"
    className="hidden"
    ref={ref}
    {...props}
  />
))
DialogClose.displayName = DialogPrimitive.Title.displayName

