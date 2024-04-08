import pikopiko from "@/public/images/pikopiko.png"
import { LevelProgress } from "@/components/ui/compose/LevelProgress"
import { petAtom } from "@/state/state"
import { useRecoilValue } from "recoil"

export const FightingMachine = () => {
  const pet = useRecoilValue(petAtom);
  const getLevel = () => {
    if (pet) {
      return Math.floor(Math.log10(pet.exp));
    }
    return 1;
  }

  const getValue = () => {
    let value = 0;
    if (!pet) {
      value = 30;
    } else {
      value = pet.exp/Math.pow(10,(getLevel()+1))*100;
    }
    return value;
  }

  return (
    <div>
      <img src={pikopiko.src} alt="pikopiko" />
      <LevelProgress level={getLevel()} value={getValue()} />
    </div>
  )
}
