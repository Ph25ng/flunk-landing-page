import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { CodeExampleSection } from '@/components/code-example-section'
import { StatsSection } from '@/components/stats-section'
import { FrameworksSection } from '@/components/frameworks-section'
import { WaitlistSection } from '@/components/waitlist-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CodeExampleSection />
      <FrameworksSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
