"use client"

import { Container } from "@/components/container"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Container className="py-10 space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Have a question, partnership idea, or just want to say hello? Fill out the form below or email us at{" "}
          <Link href="mailto:aiauralytix@gmail.com" className="underline underline-offset-4">
            aiauralytix@gmail.com
          </Link>
        </p>
      </header>

      {submitted ? (
        <div className="rounded-2xl border bg-card p-6 text-center shadow-glass">
          <h2 className="text-xl font-medium">Thank you! 🎉</h2>
          <p className="text-muted-foreground text-sm">Your message has been sent. We’ll get back to you soon.</p>
        </div>
      ) : (
        <form
          action="https://formsubmit.co/aiauralytix@gmail.com"
          method="POST"
          className="max-w-2xl mx-auto space-y-4"
          onSubmit={() => setSubmitted(true)}
        >
          {/* Prevent bot spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={`${typeof window !== "undefined" ? window.location.href : ""}`} />

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full rounded-lg border border-1 bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-1 bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us more..."
              className="w-full rounded-lg border border-1 bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto rounded-lg border bordedr-1 bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}

      {/* Static Contact Info */}
      <section className="max-w-2xl mx-auto space-y-2 text-center text-sm text-muted-foreground">
        <p>Email: hello@auralytix.ai</p>
        <p>Address: 100 Market St, San Francisco, CA</p>
      </section>
    </Container>
  )
}