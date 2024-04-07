import { FightingMachine } from "@/components/ui/compose/FightingMachine"
import { Drawer } from "@/components/ui/Drawer"
import { Input } from "@/components/ui/Input"
import { TabsContent } from "@/components/ui/Tabs"
import { useState } from "react"

import event from "@/public/images/event.webp"
import quest from "@/public/images/quest.webp"
import dog from "@/public/images/dog.webp"
import cat from "@/public/images/cat.webp"
import penguin from "@/public/images/penguin.webp"
import turtle from "@/public/images/turtle.webp"
import { styled } from "@stitches/react"

const StyledAvatar = styled("img", {
  width: "32px",
  height: "32px",
})

const StyledListItem = styled("li", {
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
    { avatar: dog.src, address: "0x3a...f4c", points: 150 },
    { avatar: cat.src, address: "0x9b...e2d", points: 120 },
    { avatar: penguin.src, address: "0x1c...b8a", points: 100 },
    { avatar: turtle.src, address: "0x3a...f4c", points: 150 },
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
                backgroundSize: "cover",
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
                {pointList.map(({ avatar, address, points }, i) => (
                  <StyledListItem className="flex ">
                    <div className="flex" gap="8px">
                      <span className="mr-2 w-4 flex flex-col justify-center">
                        {i + 1}.
                      </span>
                      <StyledAvatar src={avatar} alt="avatar" />
                      <span className="ml-2 flex items-center">{address}</span>
                    </div>
                    <span>{points} pts</span>
                  </StyledListItem>
                ))}
              </ol>
            </div>
          )}
          {activeDrawer === "quest" && (
            <div className="m-4">
              <Input placeholder="Search"></Input>
            </div>
          )}
        </Drawer>
      </TabsContent>
    </div>
  )
}
