'use client'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    // GSAP Floating Animation
    gsap.to(heroRef.current, {
      y: 10,
      rotation: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })

    // Create floating particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-2 h-2 bg-blue-400/50 rounded-full opacity-60'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 2 + 's'
      document.querySelector('.hero-section')?.appendChild(particle)
      particlesRef.current.push(particle)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-24 hero-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          ref={heroRef}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div 
            className="hero-text inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">Moe Kyaw Aung</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mb-6">
              Microsoft Engineer & 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Full-Stack Developer</span>
            </h2>
          </motion.div>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Building scalable web applications and cloud solutions with React, Next.js, TypeScript, and modern DevOps practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#projects">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300">
                View My Work 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" asChild>
              <a href="/Moe-Kyaw-Aung-Resume.pdf" download className="flex items-center gap-2 text-lg font-semibold">
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl shadow-2xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-xl -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
