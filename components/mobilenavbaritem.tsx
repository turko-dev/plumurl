import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

type Props = {
    title?: string,
    href?: string,
    description?: string,
    action?: React.ReactNode | null,
    child?: React.ReactNode | null,
    childIcon?: React.ReactNode | null,
}

export function MobileNavbarItem({title, href, description, action=null, child=null, childIcon=null}: Props) {
  return (
    <a href={href} className="flex w-full flex-col gap-2">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>
            {description}
          </ItemDescription>
        </ItemContent>

        {action !== null ? 
          <ItemActions>
          {action}
        </ItemActions>
        : null}
      </Item>

      {child !== null ? 
        <Item variant="outline" size="sm" render={<div><ItemMedia>{childIcon !== null ? childIcon : null}
        </ItemMedia><ItemContent>
          <ItemTitle>{child}</ItemTitle>
        </ItemContent><ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions></div>} />
      : null}
    

    </a>
  )
}
