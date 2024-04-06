import { Outlet } from "react-router-dom" 
import * as C from "../components/index"

const RootLayout = () => {
  return (
    <>
    <C.Navbar />
    <Outlet />
    </>
  )
}

export default RootLayout