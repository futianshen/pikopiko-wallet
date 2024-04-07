import { Drawer } from "@/components/ui/Drawer"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/Menubar"
import { AvatarIcon } from "@radix-ui/react-icons"
import { Menu as MenuIcon, Wallet as WalletIcon } from "lucide-react"
import { useState } from "react"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen((prevState) => !prevState)
  return (
    <>
      <Menubar className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MenubarMenu>
            <MenubarTrigger onClick={toggleDrawer}>
              <MenuIcon size={16} />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={toggleDrawer}>
              <AvatarIcon />
            </MenubarTrigger>
          </MenubarMenu>
        </div>
        <div>Account</div>

        <MenubarMenu>
          <MenubarTrigger onClick={toggleDrawer}>
            <WalletIcon size={16} />
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
      ></Drawer>
    </>
  )
}

export default Nav
