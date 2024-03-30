import { Button } from "@/components/ui"
import { LevelProgress } from "@/components/x"

export default function NewPage({ onClick }) {
  return (
    <div>
      <LevelProgress level={8} value={80} />
      <Button onClick={onClick}>Go to Index Page</Button>
    </div>
  )
}
