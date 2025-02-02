import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <h3>Footer</h3>
    </>
  );
};

export default LayoutRoot;
