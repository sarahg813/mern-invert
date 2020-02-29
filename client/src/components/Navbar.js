import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [drawerActivate, setDrawerActivate] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDrawerActivate(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setDrawerActivate(true);
      } else {
        setDrawerActivate(false);
      }
    });
  }, [drawerActivate]);

  return (
    <React.Fragment>
      {drawerActivate ? <MobileNavbar /> : <DesktopNavbar />}
    </React.Fragment>
  );
}
