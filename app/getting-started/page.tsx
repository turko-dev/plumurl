
import { redirect } from "next/navigation";

// WARNING - THIS PAGE IS NOT FOR USE, REDIRECT TO /introduction ALWAYS
export default function GettingStarted() {
    return redirect("/getting-started/introduction")
}