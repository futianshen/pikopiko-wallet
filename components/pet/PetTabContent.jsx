import { LevelProgress } from "@/components/ui/compose/LevelProgress"
import { Drawer } from "@/components/ui/Drawer"
import { Input } from "@/components/ui/Input"
import { TabsContent } from "@/components/ui/Tabs"
import pikopiko from "@/public/images/pikopiko.png"
import { useState } from "react"

export const PetTabContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen((prevState) => !prevState)
  // console.log(pikopiko.src.replace("_next", "next"))

  return (
    <div>
      <TabsContent value="pets">
        <img src={pikopiko.src.replace("_next", "next")} alt="pikopiko" />
        <LevelProgress level={3} value={20} />

        <button onClick={toggleDrawer}>Show</button>
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
          <div className="m-4">
            <Input placeholder="Search"></Input>
          </div>
        </Drawer>
      </TabsContent>
    </div>
  )
}
