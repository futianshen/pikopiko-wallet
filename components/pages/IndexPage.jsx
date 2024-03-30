import { IconButton, LevelProgress, RoundButton } from "@/components/x"
import { Input } from "@/components/ui/input"
import { HomeIcon } from "@radix-ui/react-icons"

export default function IndexPage({ onClick }) {
  return (
    <div className="w-full flex flex-col justify-between">
      <Input placeholder="Search"></Input>
      <LevelProgress level={3} value={20} />

      <div>
        <IconButton icon={<HomeIcon />} onClick={onClick} />
        <RoundButton text="Home" endIcon={<HomeIcon />} onclick={onClick} />
      </div>
    </div>
  )
}
