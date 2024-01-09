import { useRef, useState } from "react";
import gsap from "gsap";

function useDrawer() {
  const drawerRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const animateDrawer = () => {
    gsap.to(drawerRef.current, { bottom: isDrawerOpen ? "-75px" : "0px" });
  };

  const onDrawerClick = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);

    animateDrawer();
  };

  return { drawerRef, isDrawerOpen, onDrawerClick };
}

export default useDrawer;
