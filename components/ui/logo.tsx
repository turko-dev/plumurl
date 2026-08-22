"use client"

import { GalleryVerticalEndIcon } from "lucide-react";
// import { Button } from "./button";

// type Props = {
//   children?: React.ReactNode;
//   size?: "xs" | "sm" | "default" | 'lg'
// }

// const sizeClasses = {
//   default: "default",
//   xs: "xs",
//   sm: "sm",
//   lg: "lg",
// } as const


export default function Logo() {
    return(
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEndIcon className="size-4" />
            </div>
            PlumURL
          </a>
    )
}