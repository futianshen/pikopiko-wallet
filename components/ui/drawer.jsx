import ReactModernDrawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"

export const Drawer = ({ children, ...props }) => {
  return (
    <ReactModernDrawer
      direction="bottom"
      style={{
        position: "absolute",
        backgroundColor: "#171717",
        height: "80%",
      }}
      {...props}
    >
      <div className="p-4">{children}</div>
    </ReactModernDrawer>
  )
}
