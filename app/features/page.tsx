import { redirect } from "next/navigation";
// WARNING - THIS PAGE IS NOT FOR USE, REDIRECT TO /introduction ALWAYS
export default function Features() {
    return redirect("/features/introduction")
}