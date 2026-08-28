"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AlertCircleIcon, CircleCheckIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import HeroYourURLs from "./ui/hero-your-urls";
import { Input } from "./ui/input";
import { useState } from "react";


export default function FeaturesHeroForm() {


    return(
        <div className="w-full flex-col flex justify-center items-center p-4 h-screen min-h-fit">
            <div className="flex flex-col justify-baseline lg:justify-end lg:items-end items-baseline gap-14">
                <h1 className="shimmer text-8xl lg:text-9xl max-sm:text-7xl font-heading">The world's most simple URL shortener.</h1>

                <div className="w-full lg:max-w-3xl h-fit flex-col flex justify-end items-end gap-14">
                <Field className="w-full lg:max-w-3xl h-fit flex-col flex justify-between items-center">
                    <FieldLabel htmlFor="input-badge" className="font-heading">
                        Enter your long URL to get started.
                        {/* <Badge variant="outline" className="ml-auto text-black/50">Recently plumurl.com/abgh</Badge> */}
                    </FieldLabel>
                    <div className="w-full flex gap-2 flex-row justify-baseline items-center">
                        <Input id="input-badge" type="url" placeholder="https://long.url/example/foobar"/>
                        <AlertDialog>
                            <AlertDialogTrigger render={<Button variant="default">Shorten URL</Button>}/>
                        </AlertDialog>
                        <HeroYourURLs/>

                    </div>
                    
                </Field>
                </div>
            </div>
        </div>
    )
}