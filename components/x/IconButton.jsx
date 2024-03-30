import { Button } from "@/components/ui"
import { styled } from "@stitches/react"

const StyledRoundButton = styled(Button, {
  borderRadius: "50%",
  padding: "0.5rem",
  aspectRatio: "1",
})

export const IconButton = ({ icon, ...restProps }) => {
  return (
    <StyledRoundButton className="gap-3" {...restProps}>
      {icon}
    </StyledRoundButton>
  )
}
