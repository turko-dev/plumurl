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


export default function HeroForm() {

    const [alias, setAlias] = useState<any>({
        alert: 0,
        response: null,
        result: null
    })

    const shortenFail = () => {
        return(
            <AlertDialogContent size="sm">
                <Alert variant="destructive" className="max-w-md">
                    <AlertCircleIcon />
                    <AlertTitle>Fail</AlertTitle>
                    <AlertDescription>
                        Your payment could not be processed. Please check your payment method and try again.
                    </AlertDescription>
                </Alert>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                    <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        )
    }
    const shortURLClean = (url: string) => {

        var tempUrl = url

        if(tempUrl.length > 25) {
            tempUrl = tempUrl.slice(0, 17)
        }

        tempUrl += "..."

        return(
            <span className="underline underline-offset-2 shimmer">{tempUrl}</span>
        )
    }

    const shortenSuccess = () => {
        return(
            <AlertDialogContent size="sm">
                <Alert variant="default" className="max-w-md">
                    <CircleCheckIcon />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                        Your URL has been shortened to {shortURLClean("plumurl.com/abcdefghi")}
                        
                    </AlertDescription>
                </Alert>
                <AlertDialogFooter>
                    <AlertDialogAction variant="default">Copy</AlertDialogAction>
                    <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        )
    }





    
    const shortenAliasAlert = () => {
        return (

            <AlertDialogContent size="sm">
                <Alert variant="default" className="max-w-md gap-2">
                    <AlertTitle>Want to use an alias?</AlertTitle>
                    <AlertDescription className="gap-2 flex-col justify-baseline items-baseline flex">
                        <Input type="url" placeholder="/abc123 (optional)"/>
                        Add a unique alias to your short URL with a minimum of 4 characters.
                    </AlertDescription>
                </Alert>
                <AlertDialogFooter>
                    <AlertDialogAction variant="default">Continue</AlertDialogAction>
                    <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        )

    }

    

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
                            {shortenAliasAlert()}
                        </AlertDialog>
                        <HeroYourURLs/>

                    </div>
                    
                </Field>
                </div>
            </div>
        </div>
    )
}