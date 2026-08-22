import Link from "next/link";
import Logo from "./ui/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div></Link>} />
    </li>
  )
}
export default function Navbar() {
    return(
        <div className="fixed w-full h-fit flex-row justify-center flex items-center bg-white">
            <div className="h-14 flex flex-row justify-between items-center p-4 w-full border-b">
                <Logo />
                <NavigationMenu>
                    <NavigationMenuList>


                        {/* Item One */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                <ul className="w-96">
                                    <ListItem href="/use-cases/1" title="1">
                                    Re-usable components built with Tailwind CSS.
                                </ListItem>
                                <ListItem href="/use-cases/2" title="2">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/use-cases/3" title="3">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Item Two */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                <ul className="w-96">
                                    <ListItem href="/platform/" title="1">
                                    Re-usable components built with Tailwind CSS.
                                </ListItem>
                                <ListItem href="/platform/" title="2">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/platform/" title="3">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Item Three */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                <ul className="w-96">
                                <ListItem href="/features/short-url-rich-graphs" title="Short URL Rich Graphs">
                                    Add custom social cards for your links.
                                </ListItem>
                                <ListItem href="/features/evolving-alias-length" title="Evolving Alias Length">
                                    242,234 available aliases up to 3 characters.
                                </ListItem>
                                <ListItem href="/features/track-clickss" title="Track Clicks">
                                    Track all your clicks on your links.
                                </ListItem>
                                <ListItem href="/features/analytics" title="Analytics">
                                    Explore who clicked, when, and why.
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>


                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}