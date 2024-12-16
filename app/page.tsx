'use client'

import { useState } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { AudioPlayer } from './components/AudioPlayer'
import { TextInput } from './components/TextInput'
import { Button } from "@/app/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={isDarkMode ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <motion.div 
            className="flex justify-end mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              variant="outline"
              size="icon" 
              onClick={toggleDarkMode}
              className="transition-transform duration-300 hover:rotate-180"
            >
              {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </motion.div>
            <Content />
            <AudioPlayer />
          <TextInput />
        </main>
      </motion.div>
    </AnimatePresence>
  )
}

