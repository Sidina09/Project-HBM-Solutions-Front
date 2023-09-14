import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Backgroung";

// a function to scroll when route changed (problem in react router )
function GoToTop() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return null;
}


const RootLayout = () => {
  return (
    <div  className="bg-gray-50">
      <GoToTop />
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
            <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;