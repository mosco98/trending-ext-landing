import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { Check, Download } from "react-feather"

import gif from "./assets/images/trending-ext.gif"
import { NavBar } from "./components"

const App = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme"))
    if (localTheme === null) return
    setTheme(localTheme)
  }, [])

  function saveTheme(theme) {
    setTheme(theme)
    localStorage.setItem("theme", JSON.stringify(theme))
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={
          theme === "light"
            ? "w-full page-ctn h-scree select-none transition-all ease-in-out duration-500"
            : "w-full page-ctn h-screen bg-black select-none transition-all ease-in-out duration-500"
        }
      >
        <NavBar saveTheme={saveTheme} theme={theme} />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-ctn px-5">
          <div className="text-center flex flex-col items-center justify-center lg:col-span-2 space-y-8">
            <h1
              className="text-7xl font-extrabold text-blue-500 px-5 mx-auto"
              style={{ width: "90%" }}
            >
              Stay updated with{" "}
              <span className="bg-blue-200 px-2 bg-opacity-80">twitter</span>{" "}
              trends in your location.
            </h1>
            <div className="text-center w-full">
              <ul
                className={
                  theme === "light"
                    ? "flex items-center justify-center font-light space-x-4 text-sm text-black transition-all ease-in-out duration-100"
                    : "flex items-center justify-center font-light space-x-4 text-sm text-white transition-all ease-in-out duration-100"
                }
              >
                <li className="flex items-center text-left">
                  <Check className="mr-1 text-blue-300" />
                  No authentication
                </li>
                <li className="flex items-center text-left">
                  <Check className="mr-1 text-blue-300" />
                  Search twitter
                </li>
                <li className="flex items-center text-left">
                  <Check className="mr-1 text-blue-300" />
                  Light + Dark themes
                </li>
              </ul>
            </div>

            <a href="https://chrome.google.com/webstore/detail/trending/lefoockbklmicmjiglahmfmfpamcpeom">
              <button className="bg-blue-500 text-white px-9 py-3 focus:outline-none rounded-sm mt-4 shadow-sm flex items-center hover:opacity-90 transition-all ease-in-out">
                INSTALL ON CHROME{" "}
                <Download className="ml-1" strokeWidth="1.4" />
              </button>
            </a>
          </div>
          <div className="img-ctn">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="shadow-xl"
              src={gif}
              alt="screenshot"
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
