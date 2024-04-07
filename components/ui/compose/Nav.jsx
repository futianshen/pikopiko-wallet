import { Drawer } from "@/components/ui/Drawer"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/Menubar"
import {
  Menu as MenuIcon,
  Wallet as WalletIcon,
  User as UserIcon,
} from "lucide-react"
import { useState } from "react"
import phantom from "@/public/images/phantom.png"
import backpack from "@/public/images/backpack.png"
import metamask from "@/public/images/metamask.png"
import { styled } from "@stitches/react"

const StyledImage = styled("img", {
  width: "20px",
  height: "20px",
  borderRadius: "10%",
})

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null) // account, avatar, wallet
  const toggleDrawer = (activeMenu = null) => {
    setActiveMenu(activeMenu)
    setIsOpen((prevState) => !prevState)
  }

  const wallet = [
    {
      icon: phantom.src,
      name: "Phantom",
      detected: true,
    },
    {
      icon: backpack.src,
      name: "backpack",
      detected: true,
    },
    {
      icon: metamask.src,
      name: "MetaMask",
      detected: true,
    },
  ]

  return (
    <>
      <Menubar className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <MenubarMenu>
            <MenubarTrigger onClick={() => toggleDrawer("menu")}>
              <MenuIcon size={16} strokeWidth={1} />
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={() => toggleDrawer("avatar")}>
              <UserIcon size={16} strokeWidth={1} />
            </MenubarTrigger>
          </MenubarMenu>
        </div>
        <div>Account</div>

        <MenubarMenu>
          <MenubarTrigger onClick={() => toggleDrawer("wallet")}>
            <WalletIcon size={16} strokeWidth={1} />
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
          height: "35%",
        }}
      >
        {activeMenu === "menu" && <div>menu</div>}
        {activeMenu === "avatar" && <div>avatar</div>}
        {activeMenu === "wallet" && (
          <div>
            <div className="text-center mt-2">
              Connect a wallet on
              <br />
              Solana to continue
            </div>
            <div>
              <ul className="list-none mt-4">
                {wallet.map((wallet) => (
                  <li
                    key={wallet.name}
                    className="mb-2 flex items-center cursor-pointer"
                    onClick={() => toggleDrawer(null)}
                  >
                    <StyledImage
                      src={wallet.icon}
                      alt={wallet.name}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-white">{wallet.name}</span>
                    <span className="ml-auto text-sm text-gray-400">
                      {wallet.detected ? "Detected" : "Not detected"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Drawer>
    </>
  )
}

export default Nav
