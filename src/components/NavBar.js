import React from "react"

import icon from "../assets/images/icon48.png"

import { Sun, Moon } from "react-feather"

const NavBar = ({ saveTheme, theme }) => {
  return (
    <nav className="w-full p-5 flex items-center justify-between">
      <span className="">
        <img src={icon} alt="icon" />
      </span>
      <span>
        {theme === "light" && (
          <Moon
            className="cursor-pointer hover:opacity-90 transition-all ease-in-out"
            size="35"
            strokeWidth="1.3"
            onClick={() => saveTheme("dark")}
          />
        )}
        {theme === "dark" && (
          <Sun
            className="text-blue-500 cursor-pointer hover:opacity-90 transition-all ease-in-out"
            size="35"
            strokeWidth="1.3"
            onClick={() => saveTheme("light")}
          />
        )}
      </span>
    </nav>
  )
}

export default NavBar
