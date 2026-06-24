'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'DexLabs transformed how our teachers work. Lesson planning that took hours now takes minutes, and our staff actually feel excited about AI.',
    name: 'Dr. Anita Rao',
    role: 'Principal, Greenwood High',
    initials: 'AR',
  },
  {
    quote:
      'The student bootcamps were a turning point. My class went from being intimidated by AI to building their own projects with it.',
    name: 'Marcus Bennett',
    role: 'Computer Science Teacher',
    initials: 'MB',
  },
  {
    quote:
      'As a parent, DexDian finally gave me a clear picture of my daughter’s progress and how to support her at home.',
    name: 'Priya Sharma',
    role: 'Parent, Oakridge International',
    initials: 'PS',
  },
  {
    quote:
      'DexBro feels like having a patient tutor available any time of day. It explains things until I actually get them.',
    name: 'Aarav Mehta',
    role: 'Grade 11 Student',
    initials: 'AM',
  },
  {
    quote:
      'Rolling out AI across a school felt impossible until DexLabs. The workshops made adoption genuinely smooth.',
    name: 'Sarah Whitfield',
    role: 'Head of Academics',
    initials: 'SW',
  },
  {
    quote:
      'The reporting tools alone saved our faculty an entire week each term. The whole ecosystem just works together.',
    name: 'James Okoro',
    role: 'Vice Principal, Cambridge School',
    initials: 'JO',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Stories"
          title="Loved by principals, teachers, students & parents"
          description="Real outcomes from the communities building an AI-ready future with DexLabs."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass mb-5 break-inside-avoid rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <Quote className="size-7 text-primary/60" />
              <blockquote className="mt-4 text-pretty text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary ring-1 ring-primary/30">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
