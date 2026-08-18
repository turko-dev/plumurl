"use client"

import { Button } from "./button";

type Props = {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "default" | 'lg'
}

const sizeClasses = {
  default: "default",
  xs: "xs",
  sm: "sm",
  lg: "lg",
} as const


export default function Logo({size="default", children}: Props) {
    return(
        <div className="flex flex-row justify-baseline w-fit items-center gap-2">
            <Button size={sizeClasses[size]}>Logo</Button>
            {children}
        </div>

  
    )
}