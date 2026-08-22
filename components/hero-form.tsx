import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Field, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

export default function HeroForm() {
    return(
        <div className="w-full flex-col flex justify-center items-center p-4 h-screen  min-h-fit">
            <div className="flex flex-col justify-baseline lg:justify-end lg:items-end items-baseline gap-14">
                <h1 className="text-8xl lg:text-9xl max-sm:text-5xl font-heading">The world's simplest URL shortener.</h1>
                <Field className="w-full lg:max-w-114 h-fit flex-col flex justify-between items-center">
                    <FieldLabel htmlFor="input-badge">
                        Enter your long URL to get started.
                        <Badge variant="outline" className="ml-auto">
                        Beta
                        </Badge>
                    </FieldLabel>
                    <div className="w-full flex gap-2 flex-row justify-baseline items-center">
                        <Input
                            id="input-badge"
                            type="url"
                            placeholder="https://long.url/example/foobar"
                        />
                        <Button>Shorten URL</Button>
                    </div>
                </Field>
            </div>
        </div>
    )
}