import { HomeIcon, ClipboardIcon } from "@radix-ui/react-icons"
import { RoundButton } from "./RoundButton"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/Menubar"
import { useState } from "react"
import Drawer from "react-modern-drawer"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen((prevState) => !prevState)
  return (
    <>
      <Menubar className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MenubarMenu>
            <MenubarTrigger onClick={toggleDrawer}>
              <HomeIcon />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={toggleDrawer}>
              <HomeIcon />
            </MenubarTrigger>
          </MenubarMenu>
        </div>
        <div>Account</div>

        <MenubarMenu>
          <MenubarTrigger onClick={toggleDrawer}>
            <HomeIcon />
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        style={{
          position: "absolute",
          backgroundColor: "#171717",
          height: "80%",
        }}
      >
        <div className="m-4"></div>
      </Drawer>
    </>
  )
}

export default Nav
