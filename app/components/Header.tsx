import { Menu } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image'
import Logo from '@/public/logo.png'

export function Header() {
  return (
    <motion.header 
      className="bg-background border-b border-border"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src={Logo}
            width={50}
            height={50}
            alt='logo'
          />
          <h1 className="text-2xl font-bold text-primary">VERBAVOX</h1>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['Home', 'Lessons', 'Profile'].map((item, index) => (
              <motion.li key={item} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </motion.header>
  )
}

