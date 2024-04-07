import { Button } from "@/components/ui"
import { styled } from "@stitches/react"


const StyledRoundButton = styled(Button, {
  borderRadius: "50%",
  padding: "0.5rem",
  aspectRatio: "1",
  borderRadius: "16px",
})

export const RoundButton = ({ icon }) => {
  return <StyledRoundButton>{icon && <span>{icon}</span>}</StyledRoundButton>
}
