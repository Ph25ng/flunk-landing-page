'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CodeExampleSection() {
  const [copied, setCopied] = useState(false)

  const codeExample = `import { GoogleReviews } from '@flunk/react'

export default function Home() {
  return (
    <GoogleReviews 
      placeId="YOUR_PLACE_ID"
      maxReviews={6}
      theme="dark"
    />
  )
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="border-b border-border py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              {'Installation'}
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {'Integration in seconds'}
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              {'One npm install, three lines of code. That\'s it.'}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {'Step 1: Install'}
                  </span>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {'npm'}
                  </Badge>
                </div>
                <div className="rounded-lg bg-muted p-4 font-mono text-sm">
                  <code className="text-foreground">
                    {'npm install @flunk/react'}
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {'Step 2: Use'}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="h-8 gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        {'Copied'}
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        {'Copy'}
                      </>
                    )}
                  </Button>
                </div>
                <div className="overflow-x-auto rounded-lg bg-muted p-4">
                  <pre className="font-mono text-xs leading-relaxed">
                    <code className="text-foreground">{codeExample}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="border-primary/50 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {'Framework agnostic'}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {'Works with React, Next.js, Vue, Svelte, and vanilla JS. Adapters for all major frameworks included.'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
