import pikopiko from "@/public/images/pikopiko.png"
import { LevelProgress } from "@/components/ui/compose/LevelProgress"

export const FightingMachine = () => {
  return (
    <div>
      <img src={pikopiko.src} alt="pikopiko" />
      <LevelProgress level={3} value={20} />
    </div>
  )
}
