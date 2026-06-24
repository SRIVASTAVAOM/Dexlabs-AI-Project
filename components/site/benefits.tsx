'use client'

import { motion } from 'framer-motion'
import {
  GaugeCircle,
  HeartHandshake,
  Rocket,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const benefits = [
  {
    title: 'Future-ready learning',
    description: 'Prepare students with the AI skills the modern world demands.',
    icon: Rocket,
  },
  {
    title: 'Seamless AI adoption',
    description: 'A guided path from curiosity to confident, everyday use.',
    icon: Workflow,
  },
  {
    title: 'Teacher productivity',
    description: 'Reclaim hours every week by automating repetitive work.',
    icon: GaugeCircle,
  },
  {
    title: 'Student engagement',
    description: 'Personalized, interactive learning that keeps students hooked.',
    icon: Sparkles,
  },
  {
    title: 'Parent involvement',
    description: 'Bring families into the loop with clear, AI-powered insights.',
    icon: HeartHandshake,
  },
  {
    title: 'Curriculum support',
    description: 'Tools and content that map directly to your curriculum.',
    icon: Target,
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why DexLabs"
          title="Why schools choose DexLabs"
          description="A measurable impact across the entire institution — from the classroom to the front office."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative bg-card/40 p-8 transition-colors duration-300 hover:bg-secondary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <b.icon className="size-6 text-primary" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
