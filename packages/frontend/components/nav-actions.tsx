import * as React from "react"
import { ModeToggle } from "./theme-toggle"
import { CommandMenu } from "./command-menu"


export function NavActions() {

  return (
    <div className="flex items-center gap-2 text-sm">
      <CommandMenu />
      <ModeToggle />
    </div>
  )
}
