import NavBar from "../components/NavBar";
import { NavLink, Link, Outlet } from "react-router";

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Home;
