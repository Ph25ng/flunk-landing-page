'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Star className="h-4 w-4 fill-primary" />
            <span className="text-balance">{'Developer-first review integration'}</span>
          </div>
          
          <h1 className="mb-6 text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {'Google reviews on your site.'}
            <br />
            <span className="text-primary">{'Zero hassle.'}</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {'Flunk is the DX-friendly way to embed authentic Google reviews on your website. One component, two lines of code, infinite trust.'}
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {'Why bother yourself with horrible DX when you can choose us'}
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base font-medium"
              onClick={scrollToWaitlist}
            >
              {'Get Early Access'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base font-medium bg-transparent"
              onClick={scrollToWaitlist}
            >
              {'View Demo'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
