import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
  <>
    <NavBar/>
    <Outlet />
  </>
  )

}
export default Layout