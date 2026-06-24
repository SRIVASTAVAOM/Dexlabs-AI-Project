'use client'

import { motion } from 'framer-motion'
import {
  BrainCircuit,
  GraduationCap,
  Presentation,
  Users2,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const programs = [
  {
    name: 'AI Literacy Workshops',
    description:
      'Foundational programs that demystify AI and build confident, responsible understanding across the school.',
    icon: BrainCircuit,
    meta: 'For whole schools',
  },
  {
    name: 'Teacher Training',
    description:
      'Hands-on upskilling that helps educators integrate AI into everyday teaching and assessment.',
    icon: Presentation,
    meta: 'For educators',
  },
  {
    name: 'Parent Awareness Programs',
    description:
      'Sessions that help families navigate AI safely and support learning at home.',
    icon: Users2,
    meta: 'For parents',
  },
  {
    name: 'Student AI Bootcamps',
    description:
      'Immersive, project-based bootcamps where students build real things with AI.',
    icon: GraduationCap,
    meta: 'For students',
  },
]

export function Workshops() {
  return (
    <section id="workshops" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Workshops & Training"
          title="Training programs that turn adoption into culture"
          description="Practical, in-person and virtual programs designed for every stakeholder in the learning journey."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className="group glass flex gap-5 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30">
                <p.icon className="size-7 text-primary" />
              </span>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {p.meta}
                </span>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
