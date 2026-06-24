'use client'

import { Reveal } from './reveal'

const schools = [
  'Greenwood High',
  'Oakridge International',
  'St. Xavier Academy',
  'Delhi Public School',
  'Cambridge School',
  'Riverdale Global',
  'Heritage Academy',
  'Springfield Prep',
]

export function Trusted() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by forward-thinking institutions
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {schools.map((name) => (
              <div
                key={name}
                className="glass flex items-center justify-center rounded-xl px-4 py-5 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
