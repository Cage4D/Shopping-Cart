import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

function Home() {
  const [cart, setCart] = React.useState([]);

  return (
    <>
      <NavBar cart={cart} />
        <Outlet context={{ cart, setCart }} />
    </>
  );
}

export default Home;
