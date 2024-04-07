import { Drawer } from "@/components/ui/Drawer"
import { Input } from "@/components/ui/Input"
import { TabsContent } from "@/components/ui/Tabs"
import { FightingMachine } from "@/components/ui/compose/FightingMachine"
import petItems from "@/public/images/pet-items.webp"
import petDatabase from "@/public/images/pet-database.webp"
import { useState } from "react"

export const PetTabContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDrawer, setActiveDrawer] = useState(null)
  const toggleDrawer = (activeDrawer = null) => {
    setActiveDrawer(activeDrawer)
    setIsOpen((prevState) => !prevState)
  }

  const drawerButtons = [
    {
      key: "items",
      image: petItems.src,
      title: "Items",
    },
    {
      key: "database",
      image: petDatabase.src,
      title: "Database",
    },
  ]

  const pointList = [
    { address: "0x3a...f4c", points: 150 },
    { address: "0x9b...e2d", points: 120 },
    { address: "0x1c...b8a", points: 100 },
    { address: "0x3a...f4c", points: 150 },
    { address: "0x9b...e2d", points: 120 },
    { address: "0x1c...b8a", points: 100 },
    { address: "0x3a...f4c", points: 150 },
    { address: "0x9b...e2d", points: 120 },
    { address: "0x1c...b8a", points: 100 },
    { address: "0x3a...f4c", points: 150 },
    { address: "0x9b...e2d", points: 120 },
    { address: "0x1c...b8a", points: 100 },
  ]

  return (
    <>
      <TabsContent value="pets">
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
      </TabsContent>
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
        {activeDrawer === "items" && (
          <div className="m-4">
            <div className="flex flex-col items-center gap-1 mb-4">
              <span>Ranking:1</span>
              <span>points: 100 pts</span>
            </div>
            {pointList.map(({ address, points }, i) => (
              <div className="flex justify-between" gap="8px">
                <div className="flex" gap="8px">
                  <span>{i + 1}. </span>
                  <span>{address}</span>
                </div>
                <span>{points} pts</span>
              </div>
            ))}
          </div>
        )}
        {activeDrawer === "database" && (
          <div className="m-4">
            <Input placeholder="Search"></Input>
          </div>
        )}
      </Drawer>
    </>
  )
}
