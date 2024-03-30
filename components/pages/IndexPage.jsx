import { Button } from "@/components/ui/button"

export default function IndexPage({ onClick }) {
  return (
    <div>
      <Button onClick={onClick}>Go to New Page</Button>
    </div>
  )
}
