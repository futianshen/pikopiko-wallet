import pikopiko from "@/public/images/pikopiko.png"
import bonk_attack from "@/public/images/bonk_attack.gif"
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
    <div style={{ position: "relative" }}>
      <img src={pikopiko.src} alt="pikopiko" />
      <img src={bonk_attack.src} alt="" style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "50", height: "50"}}/>
      <LevelProgress level={getLevel()} value={getValue()} />
    </div>
  )
}
