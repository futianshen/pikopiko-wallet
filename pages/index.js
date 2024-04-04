import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LevelProgress, Nav } from "@/components/compose"
import { HomeIcon, MobileIcon } from "@radix-ui/react-icons"
import styles from "@/styles/Pages.module.css"
import pikopiko from "@/public/images/pikopiko.png"

export default function Index() {
  return (
    <main className={styles.main}>
      <div className="w-full h-full flex flex-col justify-between">
        <Nav />
        <Tabs defaultValue="social" className="w-full">
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

const SocialTabContent = () => {
  return (
    <TabsContent value="social">
      <div className="m-4">
        <Image src={pikopiko} alt="pikopiko" />
        <LevelProgress level={3} value={20} />
      </div>
    </TabsContent>
  )
}

const PetsTabContent = () => {
  return (
    <TabsContent value="pets">
      <div>
        <Input placeholder="Search"></Input>
      </div>
    </TabsContent>
  )
}
