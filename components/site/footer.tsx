import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'

const columns = [
  {
    title: 'About',
    links: ['Our Mission', 'Team', 'Careers', 'Newsroom'],
  },
  {
    title: 'Ecosystem',
    links: ['DexBro', 'DexGuru', 'DexDian', 'DexChapter'],
  },
  {
    title: 'AI Tools',
    links: [
      'Lesson Planner',
      'Question Generator',
      'Report Assistant',
      'Study Assistant',
    ],
  },
  {
    title: 'Workshops',
    links: [
      'AI Literacy',
      'Teacher Training',
      'Parent Programs',
      'Student Bootcamps',
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
                <Sparkles className="size-5 text-primary" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                DexLabs<span className="text-primary"> AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI education ecosystem helping schools, teachers, students and
              parents adopt AI with confidence.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> Hq@dexlabsai.in
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> +91 9936111568
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Lucknow · On-Site
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DexLabs AI. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a
              href="#cta"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
