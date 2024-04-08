import { Drawer } from "@/components/ui/Drawer"

import { Button } from "@/components/ui/Button"
import { Tabs, TabsContent } from "@/components/ui/Tabs"
import { SocialQuestTabList } from "@/components/social/SocialQuestTabList"
import { FightingMachine } from "@/components/ui/compose/FightingMachine"
import { Swords } from "lucide-react"
import { useState } from "react"
import { SocialQuestWeb3TabContent } from "@/components/social/SocialQuestWeb3TabContent"
import { SocialQuestWeb2TabContent } from "@/components/social/SocialQuestWeb2TabContent"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import cat from "@/public/images/cat.webp"
import dog from "@/public/images/dog.webp"
import event from "@/public/images/event.png"
import penguin from "@/public/images/penguin.webp"
import quest from "@/public/images/bonk.jpeg"
import turtle from "@/public/images/turtle.webp"
import { styled } from "@stitches/react"

const StyledAvatar = styled("img", {
  width: "32px",
  height: "32px",
})

const StyledPopoverAvatar = styled("img", {
  width: "64px",
  height: "64px",
})

const StyledListItem = styled(PopoverTrigger, {
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "#292929",
  color: "white",
})

export const SocialTabContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDrawer, setActiveDrawer] = useState(null)
  const toggleDrawer = (activeDrawer = null) => {
    setActiveDrawer(activeDrawer)
    setIsOpen((prevState) => !prevState)
  }

  const drawerButtons = [
    {
      key: "event",
      image: event.src,
      title: "Event",
    },
    {
      key: "quest",
      image: quest.src,
      title: "Quest",
    },
  ]

  const pointList = [
    {
      avatar: dog.src,
      address: "0x3aaeo3eostsf4c",
      level: 1,
      points: 150,
    },
    {
      avatar: cat.src,
      address: "0x9baeo3eostse2d",
      level: 2,
      points: 120,
    },
    {
      avatar: penguin.src,
      address: "0x1caeo3eostsb8a",
      level: 3,
      points: 100,
    },
    {
      avatar: turtle.src,
      address: "0x3aaeo3eostsf4c",
      level: 4,
      points: 150,
    },
  ]

  return (
    <div>
      <TabsContent value="social">
        <FightingMachine />

        <div className="flex flex-row mt-5" style={{ gap: "8px" }}>
          {drawerButtons.map(({ key, image, title }) => (
            <div
              key={key}
              onClick={() => toggleDrawer(key)}
              className="cursor-pointer position-relative flex items-end justify-center"
              style={{
                width: "112px",
                height: "112px",
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                borderRadius: "32px",
                overflow: "hidden",
              }}
            >
              <span
                className="bg-black w-full text-center opacity-80"
                style={{ height: "32px", lineHeight: "32px" }}
              >
                {title}
              </span>
            </div>
          ))}
        </div>

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
          {activeDrawer === "event" && (
            <div className="m-4">
              <div className="flex flex-col items-center gap-1 mb-4">
                <span>Ranking:1</span>
                <span>points: 100 pts</span>
              </div>

              <ol className="flex flex-col gap-2 h-full">
                {pointList.map(({ avatar, address, points, level }, i) => (
                  <Popover key={address}>
                    <StyledListItem className="flex ">
                      <div className="flex" gap="8px">
                        <span className="mr-2 w-4 flex flex-col justify-center">
                          {i + 1}.
                        </span>
                        <StyledAvatar src={avatar} alt="avatar" />
                        <span className="ml-2 flex items-center">
                          {address}
                        </span>
                      </div>
                      <span>{points} pts</span>
                    </StyledListItem>
                    <PopoverContent className="flex">
                      <StyledPopoverAvatar src={avatar} alt="avatar" />

                      <div className="flex flex-col justify-between ml-3 w-full">
                        <span className="text-sm">{address}</span>
                        <div className="flex justify-between w-full">
                          <span className="text-sm">Level: {level}</span>
                          <Button variant="outline">
                            <Swords size={16} strokeWidth={1} />
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))}
              </ol>
            </div>
          )}
          {activeDrawer === "quest" && (
            <div className="m-4">
              <Tabs
                defaultValue="web3"
                className="h-full w-full flex flex-col justify-between"
              >
                <SocialQuestTabList />
                <SocialQuestWeb3TabContent />
                <SocialQuestWeb2TabContent />
              </Tabs>
            </div>
          )}
        </Drawer>
      </TabsContent>
    </div>
  )
}
