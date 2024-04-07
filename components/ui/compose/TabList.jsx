import { TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { HomeIcon, MobileIcon } from "@radix-ui/react-icons"

export const TabList = () => {
  return (
    <TabsList>
      <TabsTrigger value="social" className="w-6/12">
        <HomeIcon className="mr-2" />
        <span>SOCIAL</span>
      </TabsTrigger>
      <TabsTrigger value="pets" className="w-6/12">
        <MobileIcon className="mr-2" />
        <span>PETS</span>
      </TabsTrigger>
    </TabsList>
  )
}
