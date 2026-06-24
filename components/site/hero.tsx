'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, GraduationCap, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '100+', label: 'Schools' },
  { value: '5000+', label: 'Students' },
  { value: '50+', label: 'Workshops' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute right-[8%] top-40 h-72 w-72 rounded-full bg-accent/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(168,85,247,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,85,247,0.18) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.a
          href="#ecosystem"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles className="size-4 text-primary" />
          AI Education Ecosystem
          <ArrowRight className="size-3.5 text-primary" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Empowering Schools, Teachers, Students &{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Parents
          </span>{' '}
          with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          DexLabs is the complete AI education ecosystem — practical tools,
          hands-on workshops and curriculum integration that bring real AI
          literacy to every classroom, staffroom and home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 w-full bg-primary px-6 text-base text-primary-foreground shadow-[0_0_36px_-8px] shadow-primary/70 transition-transform hover:scale-[1.02] hover:bg-accent sm:w-auto"
            render={
              <a href="#ecosystem">
                Explore Ecosystem
                <ArrowRight className="size-4" />
              </a>
            }
          />
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            className="glass h-12 w-full px-6 text-base text-foreground hover:scale-[1.02] sm:w-auto"
            render={
              <a href="#cta">
                <CalendarCheck className="size-4 text-primary" />
                Book Demo
              </a>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl px-6 py-7 text-center transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-center gap-2 text-3xl font-semibold text-foreground sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm tracking-wide text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <GraduationCap className="size-4 text-primary" />
          Trusted by leading schools across the country
        </div>
      </div>
    </section>
  )
}
