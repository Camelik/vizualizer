"use client";

import gsap from "gsap";
import { useRef, useState } from "react";

// TODO: Refactor
function Tooltip({
  children,
  content,
  position = "bottom",
  styles = {},
  animationConfig = { duration: 0.3, ease: "power3.out" },
}) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);

  const showTooltip = () => {
    setIsVisible(true);
    gsap.to(tooltipRef.current, {
      opacity: 1,
      scale: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
    });
  };

  const hideTooltip = () => {
    gsap
      .to(tooltipRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: animationConfig.duration,
        ease: animationConfig.ease,
      })
      .then(() => {
        setIsVisible(false);
      });
  };

  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return "top-0 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "top-full left-1/2 -translate-x-1/2";
      case "left":
        return "top-1/2 right-0 transform translate-y-1/2";
      case "right":
        return "top-1/2 left-0 transform translate-y-1/2";
      default:
        return "top-0 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      className={`relative inline-block ${styles}`}
    >
      {children}
      <span
        ref={tooltipRef}
        className="absolute inline-block h-full w-full pointer-events-none select-none"
      >
        {isVisible && (
          <div
            className={`absolute bg-[#F07151] text-white py-2 px-4 rounded scale-75 opacity-50 ${getPositionStyles()}`}
          >
            {typeof content === "function" ? content() : content}
          </div>
        )}
      </span>
    </div>
  );
}

export default Tooltip;
