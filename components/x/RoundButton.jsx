import { Button } from "@/components/ui"
import { styled } from "@stitches/react"

const StyledRoundButton = styled(Button, {
  borderRadius: "50%",
  padding: "0.5rem",
  aspectRatio: "1",
  borderRadius: "16px",
})

export const RoundButton = ({ startIcon, endIcon, text, ...restProps }) => {
  return (
    <StyledRoundButton {...restProps}>
      {startIcon && <span className="mr-1">{startIcon}</span>}
      {text}
      {endIcon && <span className="ml-1">{endIcon}</span>}
    </StyledRoundButton>
  )
}
