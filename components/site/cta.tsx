'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section id="cta" className="px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="glass glow-purple relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-accent/20 blur-[110px]" />
        </div>

        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Transform Your School with AI
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Join the schools building an AI-ready future. Book a demo and see the
          full DexLabs ecosystem in action.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 w-full bg-primary px-6 text-base text-primary-foreground shadow-[0_0_36px_-8px] shadow-primary/70 transition-transform hover:scale-[1.02] hover:bg-accent sm:w-auto"
            render={
              <a href="#cta">
                <CalendarCheck className="size-4" />
                Book Demo
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
                <MessageSquare className="size-4 text-primary" />
                Talk to Expert
              </a>
            }
          />
        </div>
      </motion.div>
    </section>
  )
}
