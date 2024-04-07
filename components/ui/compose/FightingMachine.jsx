import pikopiko from "@/public/images/pikopiko.png"
import { LevelProgress } from "@/components/ui/compose/LevelProgress"

export const FightingMachine = () => {
  return (
    <div>
      <img src={pikopiko.src.replace("_next", "next")} alt="pikopiko" />
      <LevelProgress level={3} value={20} />
    </div>
  )
}
