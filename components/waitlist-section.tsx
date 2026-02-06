'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setStatusMessage('Submitting your email...')
    
    // Simulate API call since there's no backend yet
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsLoading(false)
    setStatusMessage(`Successfully added ${email} to the waitlist!`)
    
    console.log('[v0] Email submitted:', email)
    
    // Clear the email after submission
    const submittedEmail = email
    setEmail('')
    
    // Store for potential display
    setTimeout(() => {
      console.log('[v0] Welcome email would be sent to:', submittedEmail)
    }, 100)
  }

  const handleReset = () => {
    setSubmitted(false)
    setStatusMessage('')
  }

  return (
    <section id="waitlist" className="border-b border-border py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <Card className="border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {'Get early access'}
                </h2>
                <p className="mb-8 text-pretty text-lg text-muted-foreground">
                  {'Join the waitlist to be first in line when we launch. Limited spots available for beta testers.'}
                </p>
              </div>

              {/* ARIA live region for screen reader announcements */}
              <div 
                role="status" 
                aria-live="polite" 
                aria-atomic="true"
                className="sr-only"
              >
                {statusMessage}
              </div>

              {/* Fixed height container to prevent layout shift */}
              <div className="min-h-[120px] flex items-center justify-center">
                {submitted ? (
                  <div 
                    className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-primary/10 p-6 text-center transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-4"
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 animate-in zoom-in duration-300">
                      <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">
                        {'You\'re on the list!'}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {'We\'ll notify you when Flunk is ready to ship.'}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleReset}
                      className="text-primary hover:text-primary"
                      aria-label="Submit another email address"
                    >
                      {'Submit another email'}
                    </Button>
                  </div>
                ) : (
                  <form
                    action="https://formsubmit.co/hothanhphong2512@gmail.com"
                    method="POST"
                    onSubmit={handleSubmit} 
                    className="w-full flex flex-col gap-4 sm:flex-row"
                    aria-busy={isLoading}
                  >
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="developer@company.com"
                        value={email}
                        name="email" // Add this line
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        required
                        className="h-12 bg-background/50 text-base disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Email address"
                        aria-required="true"
                        aria-describedby="email-description"
                      />
                    </div>
                    <Button 
                      name="submit"
                      type="submit" 
                      size="lg"
                      disabled={isLoading || !email}
                      className="h-12 text-base font-medium min-w-[160px]"
                      aria-label={isLoading ? 'Submitting' : 'Join the waitlist'}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          {'Joining...'}
                        </>
                      ) : (
                        <>
                          {'Join Waitlist'}
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                    <input type="hidden" name="_next" value=""></input>
                  </form>
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground" id="email-description">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  {'No spam, ever'}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  {'Unsubscribe anytime'}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
