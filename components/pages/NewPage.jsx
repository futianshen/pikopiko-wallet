import { RoundButton, LevelProgress } from "@/components/x"
import { FaceIcon } from "@radix-ui/react-icons"

export default function NewPage({ onClick }) {
  return (
    <div>
      <LevelProgress level={8} value={80} />

      <RoundButton onClick={onClick}>
        <FaceIcon />
      </RoundButton>
    </div>
  )
}
