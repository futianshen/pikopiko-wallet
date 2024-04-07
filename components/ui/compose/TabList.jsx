import { TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Cat as CatIcon, Home as HomeIcon } from "lucide-react"

export const TabList = () => {
  return (
    <TabsList>
      <TabsTrigger value="social" className="w-6/12">
        <HomeIcon className="mr-2" strokeWidth={1} size={16} />
        <span>SOCIAL</span>
      </TabsTrigger>
      <TabsTrigger value="pets" className="w-6/12">
        <CatIcon className="mr-2" strokeWidth={1} size={16} />
        <span>PETS</span>
      </TabsTrigger>
    </TabsList>
  )
}
