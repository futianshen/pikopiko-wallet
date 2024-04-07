import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Nav } from "@/components/ui/compose"
import styles from "@/styles/Pages.module.css"
import { HomeIcon, MobileIcon } from "@radix-ui/react-icons"
import { SocialTabContent } from "@/components/social/SocialTabContent"
import { PetTabContent } from "@/components/pet/PetTabContent"

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
          <PetTabContent />
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
