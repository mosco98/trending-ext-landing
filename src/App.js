import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Check, Download, Moon, Sun } from 'react-feather'

import icon from './assets/images/icon48.png'
import gif from './assets/images/trending-ext.gif'

const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('theme'))
    if (localTheme === null) return
    setTheme(localTheme)
  }, [])

  function saveTheme(theme) {
    setTheme(theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={
          theme === 'light'
            ? 'flex flex-col items-center justify-between w-full page-ctn h-screen overflow-y-scroll select-none transition-all ease-in-out duration-500'
            : 'flex flex-col items-center justify-between w-full page-ctn h-screen overflow-y-scroll bg-black select-none transition-all ease-in-out duration-500'
        }>
        <nav className="w-full p-5 flex items-center justify-between">
          <span className="">
            <img src={icon} alt="icon" />
          </span>
          <span>
            {theme === 'light' && (
              <Moon
                className="cursor-pointer hover:opacity-90 transition-all ease-in-out"
                size="35"
                strokeWidth="1.3"
                onClick={() => saveTheme('dark')}
              />
            )}
            {theme === 'dark' && (
              <Sun
                className="text-blue-500 cursor-pointer hover:opacity-90 transition-all ease-in-out"
                size="35"
                strokeWidth="1.3"
                onClick={() => saveTheme('light')}
              />
            )}
          </span>
        </nav>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-ctn px-5">
          <div className="text-center flex flex-col items-center justify-center lg:col-span-2 space-y-8">
            <h1 className="text-7xl font-extrabold text-blue-500 px-5 mx-auto" style={{ width: '90%' }}>
              Stay updated with <span className="bg-blue-200 px-2 bg-opacity-80">twitter</span> trends in your location.
            </h1>
            <div className="text-center w-full">
              <ul
                className={
                  theme === 'light'
                    ? 'flex items-center justify-center font-light space-x-4 text-sm text-black transition-all ease-in-out duration-100'
                    : 'flex items-center justify-center font-light space-x-4 text-sm text-white transition-all ease-in-out duration-100'
                }>
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
                INSTALL ON CHROME <Download className="ml-1" strokeWidth="1.4" />
              </button>
            </a>
          </div>
          <div className="img-ctn">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="h-auto w-auto shadow-lg border-l border-r border-black rounded"
              src={gif}
              alt="screenshot"
            />
          </div>
        </div>
        <footer
          className={
            theme === 'light'
              ? 'w-full flex items-center justify-end px-7 py-2 mt-2 mb-1 text-black font-normal transition-all ease-in-out duration-100'
              : 'w-full flex items-center justify-end px-7 py-2 mt-2 mb-1 text-white font-normal transition-all ease-in-out duration-100'
          }>
          <div className="space-x-8">
            <a href="/" className="text-sm opacity-70 hover:opacity-60 transition-all ease-in-out">
              Contact us
            </a>
            <a href="/" className="text-sm opacity-70 hover:opacity-60 transition-all ease-in-out">
              Terms of use
            </a>
            <a href="/" className="text-sm opacity-70 hover:opacity-60 transition-all ease-in-out">
              Privacy policy
            </a>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
