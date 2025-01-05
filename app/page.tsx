"use client"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="bg-[#1e3a8a] text-white py-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Engage. Establish. Equip. Empower.</h1>
        <p className="text-xl mb-8">Creating Disciples Together</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
          <Button className="bg-white text-[#1e3a8a] hover:bg-gray-100">Join Us This Sunday</Button>
          <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1e3a8a]">Donate</Button>
          <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1e3a8a]">Log In</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">What to Expect</h2>
          <div className="prose lg:prose-xl mx-auto">
            <p>We're excited to welcome you to Round Table Church! Here's what you can expect when you visit:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Warm and friendly welcome from our greeting team</li>
              <li>Contemporary worship music</li>
              <li>Engaging and relevant teaching from the Bible</li>
              <li>Programs for children of all ages</li>
              <li>Coffee and refreshments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Times</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Sunday Service</h3>
              <p className="text-gray-600 mb-4">10:30 AM</p>
              <p>Join us for worship, prayer, and teaching from God's Word.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

