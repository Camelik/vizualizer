"use client";
import React, { useEffect, useState } from "react";
import { DarkThemeIcon, LightThemeIcon } from "../../public/svgs";
import { useTheme } from "next-themes";

function ThemeDisplayer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { systemTheme, theme, setTheme } = useTheme();

  if (!mounted) return null;

  const changeTheme = () => {
    systemTheme === theme ? setTheme("light") : setTheme("dark");
  };

  return (
    <>
      <div className="text-[25px] cursor-pointer" onClick={changeTheme}>
        {systemTheme === theme ? (
          <DarkThemeIcon></DarkThemeIcon>
        ) : (
          <LightThemeIcon></LightThemeIcon>
        )}
      </div>
    </>
  );
}

export default ThemeDisplayer;
