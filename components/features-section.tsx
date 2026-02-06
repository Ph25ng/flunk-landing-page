import { Code2, Zap, Shield, Palette } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: 'Developer-First API',
      description: 'TypeScript-native with full IntelliSense support. Install, configure, ship. No backend required.'
    },
    {
      icon: Zap,
      title: 'Blazingly Fast',
      description: 'Optimized for Core Web Vitals. Lazy loading, caching, and zero layout shift built-in.'
    },
    {
      icon: Shield,
      title: 'Production Ready',
      description: 'Battle-tested with automatic rate limiting, error handling, and fallback UI included.'
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Match your brand with CSS variables, custom themes, or headless components.'
    }
  ]

  return (
    <section className="border-b border-border py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {'Built for developers'}
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            {'Stop configuring and start shipping. Flunk handles the complexity so you can focus on what matters.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border bg-card transition-all hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
