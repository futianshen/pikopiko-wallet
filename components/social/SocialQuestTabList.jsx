import { TabsList, TabsTrigger } from "@/components/ui/Tabs"

export const SocialQuestTabList = () => {
  return (
    <TabsList>
      <TabsTrigger value="web3" className="w-6/12">
        <span>Web3</span>
      </TabsTrigger>
      <TabsTrigger value="web2" className="w-6/12">
        <span>Web2</span>
      </TabsTrigger>
    </TabsList>
  )
}
