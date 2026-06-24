'use client'

import Link from "next/link";
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "B2B", href: "/b2b" },
  { label: "D2C", href: "/d2c" },
  { label: "AI Tools", href: "/tools" },
  { label: "Centers", href: "/centers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass glow-purple' : 'border border-transparent'
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="DexLabs AI"
            width={40}
            height={40}
            className="rounded-lg"
          />

          <span className="text-lg font-semibold tracking-tight text-foreground">
            DexLabs<span className="text-primary"> AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="lg"
            nativeButton={false}
            className="h-10 px-4 text-muted-foreground hover:text-foreground"
            render={<a href="/contact">Sign In</a>}
          />

          <Button
            size="lg"
            nativeButton={false}
            className="h-10 bg-primary px-5 text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/60 hover:bg-accent"
            render={<a href="/contact">Book Demo</a>}
          />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute top-20 left-4 right-4 flex flex-col gap-1 rounded-2xl p-4 lg:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}

          <Button
            size="lg"
            nativeButton={false}
            className="mt-2 h-11 bg-primary text-primary-foreground"
            render={<a href="/contact">Book Demo</a>}
          />
        </motion.div>
      )}
    </motion.header>
  )
}