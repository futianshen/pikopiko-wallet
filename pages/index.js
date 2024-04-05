import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelProgress, Nav } from "@/components/compose"
import { HomeIcon, MobileIcon } from "@radix-ui/react-icons"
import styles from "@/styles/Pages.module.css"
import pikopiko from "@/public/images/pikopiko.png"
import Drawer from "react-modern-drawer"
import { useState } from "react"
import { styled } from "@stitches/react"

export default function Index() {
  return (
    <main className={styles.main}>
      <div className="w-full h-full flex flex-col justify-between">
        <Nav />
        <Tabs
          defaultValue="social"
          className="h-full w-full flex flex-col justify-between"
        >
          <SocialTabContent />
          <PetsTabContent />
          <TabList />
        </Tabs>
      </div>
    </main>
  )
}

const TabList = () => {
  return (
    <TabsList>
      <TabsTrigger value="social" className="w-6/12">
        <HomeIcon className="mr-2" /> SOCIAL
      </TabsTrigger>
      <TabsTrigger value="pets" className="w-6/12">
        <MobileIcon className="mr-2" /> PETS
      </TabsTrigger>
    </TabsList>
  )
}

import "react-modern-drawer/dist/index.css"

const SocialTabContent = () => {
  return <TabsContent value="social" className=" m-4"></TabsContent>
}

const PetsTabContent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen((prevState) => !prevState)
  console.log(pikopiko.src.replace("_next", "next"))

  return (
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
  )
}
