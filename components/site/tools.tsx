'use client'

import { motion } from 'framer-motion'
import {
  BookOpenCheck,
  ClipboardList,
  Compass,
  FileText,
  Lightbulb,
  PenLine,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const tools = [
  {
    name: 'AI Lesson Planner',
    description: 'Generate standards-aligned lesson plans in seconds.',
    icon: BookOpenCheck,
  },
  {
    name: 'AI Question Generator',
    description: 'Create quizzes and exams across difficulty levels instantly.',
    icon: ClipboardList,
  },
  {
    name: 'AI Report Card Assistant',
    description: 'Draft personalized, insightful student reports with ease.',
    icon: FileText,
  },
  {
    name: 'AI Career Guidance',
    description: 'Data-driven guidance mapping students to future pathways.',
    icon: Compass,
  },
  {
    name: 'AI Study Assistant',
    description: 'A 24/7 tutor that adapts to each student’s pace.',
    icon: Lightbulb,
  },
  {
    name: 'AI Content Creator',
    description: 'Produce worksheets, slides and material on demand.',
    icon: PenLine,
  },
]

export function Tools() {
  return (
    <section id="tools" className="relative px-4 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI Tools"
          title="A complete AI toolkit for the modern classroom"
          description="Purpose-built tools that remove busywork and give educators superpowers — all in one ecosystem."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/25">
                <t.icon className="size-6 text-primary" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {t.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
