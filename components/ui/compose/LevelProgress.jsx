import { Progress } from "@/components/ui"

export const LevelProgress = ({ level, value }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="flex-shrink-0">LV.{level}</span>
      <Progress value={value} />
    </div>
  )
}
