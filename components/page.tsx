import { CloudIcon, GalleryVerticalEndIcon } from "lucide-react"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "./ui/empty"
import { Button } from './ui/button'
import Logo from "./ui/logo"

type Props = {
    children?: React.ReactNode,
    bg?: 'none' | 'primary' | 'secondary'
}

export default function Page({children, bg="none"}: Props) {

    const bgVariants = {
      none: "none",
      primary: "bg-primary",
      secondary: "bg-secondary"
    }

    return <div className={`${bgVariants[bg]} w-full flex flex-col min-h-screen h-fit justify-baseline items-center`}>{
        
    
    children ? 
    
    //If children
    children : 
    
    //If no children

    <div className="w-full h-screen flex flex-col justify-between items-center p-4">
        <Logo />

    <Empty className="gap-4 h-screen">
      <EmptyHeader className="gap-8">
        <EmptyTitle className="text-8xl">This page is empty.</EmptyTitle>
        <EmptyDescription>
          Here, we'll help you navigate back to the homepage.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <a href="/"><Button size="sm" variant="outline">
            Homepage
        </Button></a>
      </EmptyContent>
    </Empty>

    </div>
    
    
    }</div>
}