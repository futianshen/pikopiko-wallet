import { useState } from "react"
import { Input } from "@/components/ui/Input"
import { TabsContent } from "@/components/ui/Tabs"
import booking from "@/public/images/booking.png"
import kfc from "@/public/images/kfc.png"
import pchome from "@/public/images/pchome.png"
import pizzahut from "@/public/images/pizzahut.png"

export const SocialQuestWeb2TabContent = () => {
  const [keyword, setKeyword] = useState(null)
  const web2Brands = [
    { brand: "booking", image: booking.src },
    { brand: "kfc", image: kfc.src },
    { brand: "pizzahut", image: pizzahut.src },
    { brand: "pchome", image: pchome.src },
  ].filter(({ brand }) => keyword === null || brand.includes(keyword))

  return (
    <TabsContent value="web2">
      <Input
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="flex flex-row flex-wrap justify-between gap-3 mt-4">
        {web2Brands.map(({ brand, image }) => (
          <img
            className="h-20 object-contain p-4 rounded-md"
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
