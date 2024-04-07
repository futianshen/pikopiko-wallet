import { useState } from "react"
import { TabsContent } from "@/components/ui/Tabs"
import { Input } from "@/components/ui/Input"

import bonk from "@/public/images/bonk.jpeg"
import solana from "@/public/images/solana.jpeg"

export const SocialQuestWeb3TabContent = () => {
  const [keyword, setKeyword] = useState(null)
  const web3Brands = [
    { brand: "bonk", image: bonk.src },
    { brand: "solana", image: solana.src },
  ].filter(({ brand }) => keyword === null || brand.includes(keyword))

  return (
    <TabsContent value="web3">
      <Input
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />

      <div className="flex flex-row flex-wrap justify-between gap-3 mt-4">
        {web3Brands.map(({ brand, image }) => (
          <img
            className="h-20 object-cover rounded-md"
            style={{ width: "142px", backgroundColor: "#262626" }}
            key={brand}
            src={image}
            alt={brand}
          />
        ))}
      </div>
    </TabsContent>
  )
}
