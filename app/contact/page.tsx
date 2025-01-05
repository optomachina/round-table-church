"use client"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border rounded-md"
              required
            ></textarea>
          </div>
          
          <Button type="submit">Send Message</Button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="mb-2">123 Church Street</p>
          <p className="mb-2">City, State 12345</p>
          <p className="mb-4">United States</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Service Times</h3>
            <p>Sunday: 10:30 AM</p>
          </div>
        </div>
      </div>
    </div>
  )
} 