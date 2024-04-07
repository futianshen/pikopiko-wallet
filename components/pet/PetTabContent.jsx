import { LevelProgress } from "@/components/ui/compose/LevelProgress"
import { Drawer } from "@/components/ui/Drawer"
import { Input } from "@/components/ui/Input"
import { TabsContent } from "@/components/ui/Tabs"
import pikopiko from "@/public/images/pikopiko.png"
import { useState } from "react"
import event from "@/public/images/event.webp"
import quest from "@/public/images/quest.webp"

export const PetTabContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDrawer, setActiveDrawer] = useState(null)
  const toggleDrawer = (activeDrawer = null) => {
    setActiveDrawer(activeDrawer)
    setIsOpen((prevState) => !prevState)
  }
  // console.log(pikopiko.src.replace("_next", "next"))

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

  return (
    <div>
      <TabsContent value="pets">
        <img src={pikopiko.src} alt="pikopiko" />
        <LevelProgress level={3} value={20} />

        <div className="flex flex-row" style={{ gap: "8px" }}>
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
              <Input placeholder="Search"></Input>
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
