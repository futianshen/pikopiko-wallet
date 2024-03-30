import { Button } from "@/components/ui"
import { LevelProgress } from "@/components/x"

export default function IndexPage({ onClick }) {
  return (
    <div>
      <LevelProgress level={1} value={20} />
      <Button onClick={onClick}>Go to New Page</Button>
    </div>
  )
}
