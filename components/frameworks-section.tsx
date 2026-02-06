'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const frameworks = [
  {
    name: 'React',
    logo: '/logos/react.jpg',
    description: 'The library for web and native user interfaces',
  },
  {
    name: 'Vue',
    logo: '/logos/vue.jpg',
    description: 'The progressive JavaScript framework',
  },
  {
    name: 'Angular',
    logo: '/logos/angular.jpg',
    description: 'Platform for building web applications',
  },
  {
    name: 'Svelte',
    logo: '/logos/svelte.jpg',
    description: 'Cybernetically enhanced web apps',
  },
  {
    name: 'Next.js',
    logo: '/logos/nextjs.jpg',
    description: 'The React framework for production',
  },
  {
    name: 'Nuxt',
    logo: '/logos/nuxt.jpg',
    description: 'The intuitive Vue framework',
  },
]

export function FrameworksSection() {
  return (
    <section className="border-b border-border py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {'Framework agnostic'}
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">
            {'Works seamlessly with any frontend framework or vanilla JavaScript. Build with what you love.'}
          </p>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {frameworks.map((framework) => (
                <CarouselItem
                  key={framework.name}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="group relative flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10">
                    <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={framework.logo || "/placeholder.svg"}
                        alt={`${framework.name} logo`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground">
                        {framework.name}
                      </h3>
                      <p className="sr-only">{framework.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {'TypeScript support'}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {'Zero dependencies'}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {'Tree-shakeable'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
