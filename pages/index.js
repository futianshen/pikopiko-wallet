import IndexPage from "@/components/pages/IndexPage"
import NewPage from "@/components/pages/NewPage"
import styles from "@/styles/Pages.module.css"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Index() {
  const router = useRouter()
  const [activePage, setActivePage] = useState("index")

  return (
    <main className={styles.main}>
      {activePage === "index" && (
        <IndexPage onClick={() => setActivePage("new")} />
      )}
      {activePage === "new" && (
        <NewPage onClick={() => setActivePage("index")} />
      )}
    </main>
  )
}
