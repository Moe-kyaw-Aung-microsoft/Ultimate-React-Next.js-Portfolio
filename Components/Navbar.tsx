'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 shadow-lg' 
          : 'bg-white/80 dark:bg-slate-900/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Moe Kyaw Aung
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-lg font-medium hover:text-blue-600 transition-colors">About</Link>
            <Link href="#skills" className="text-lg font-medium hover:text-blue-600 transition-colors">Skills</Link>
            <Link href="#projects" className="text-lg font-medium hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="#contact" className="text-lg font-medium hover:text-blue-600 transition-colors">Contact</Link>
            <Button variant="ghost" size="sm">
              <Moon className="h-5 w-5" />
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
