import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Trusted } from '@/components/site/trusted'
import { Ecosystem } from '@/components/site/ecosystem'
import { Tools } from '@/components/site/tools'
import { Workshops } from '@/components/site/workshops'
import { Benefits } from '@/components/site/benefits'
import { Testimonials } from '@/components/site/testimonials'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Trusted />
      <Ecosystem />
      <Tools />
      <Workshops />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
