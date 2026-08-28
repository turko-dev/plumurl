import { AuthorHoverCard } from "./author";

export default function Footer() {
    return(
        <div className="w-full min-h-16 bg-white flex flex-row justify-center items-center">
            <p className="font-heading">Authored by <AuthorHoverCard /></p>
        </div>
    )
}