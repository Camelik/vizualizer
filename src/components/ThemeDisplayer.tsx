"use client";
import React, { useEffect, useState } from "react";
import { DarkThemeIcon, LightThemeIcon } from "./svgs";
import { useTheme } from "next-themes";

function ThemeDisplayer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const { systemTheme, theme, setTheme } = useTheme();

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
