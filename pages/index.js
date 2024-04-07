import { PetTabContent } from "@/components/pet/PetTabContent"
import { SocialTabContent } from "@/components/social/SocialTabContent"
import { Tabs } from "@/components/ui/Tabs"
import { Nav, TabList } from "@/components/ui/compose"
import styles from "@/styles/Pages.module.css"

export default function Index() {
  return (
    <main className={styles.main}>
      <div className="w-full h-full flex flex-col justify-between">
        <Nav />
        <Tabs
          defaultValue="social"
          className="h-full w-full flex flex-col justify-between"
        >
          <div className="h-full grid place-items-center">
            <div>
              <PetTabContent />
              <SocialTabContent />
            </div>
          </div>
          <TabList />
        </Tabs>
      </div>
    </main>
  )
}
