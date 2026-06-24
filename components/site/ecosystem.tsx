'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartHandshake,
  Users,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const products = [
  {
    name: 'DexBro',
    tagline: 'AI Assistant for Students',
    description:
      'A personal AI study companion that explains concepts, generates practice and adapts to every learner.',
    icon: GraduationCap,
  },
  {
    name: 'DexGuru',
    tagline: 'AI Assistant for Teachers',
    description:
      'Plan lessons, generate assessments and automate grading so teachers can focus on what matters.',
    icon: Users,
  },
  {
    name: 'DexDian',
    tagline: 'AI Assistant for Parents',
    description:
      'Keep parents informed with AI-powered progress insights, guidance and at-home learning support.',
    icon: HeartHandshake,
  },
  {
    name: 'DexChapter',
    tagline: 'AI-powered School Platform',
    description:
      'The connective platform unifying classrooms, analytics and administration in one intelligent hub.',
    icon: Building2,
  },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Ecosystem"
          title="One connected ecosystem for everyone in the school"
          description="Four intelligent products built to work together — for students, teachers, parents and the institutions that bring them together."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-purple"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="size-7 text-primary" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {p.tagline}
              </p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
