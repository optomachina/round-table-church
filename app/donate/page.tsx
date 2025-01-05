"use client"

import { Button } from "@/components/ui/button"

export default function DonatePage() {
  const handleDonate = (amount: number) => {
    // Add donation processing logic here
    console.log(`Processing donation of $${amount}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Support Our Ministry</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">Your generous donations help us continue our mission of creating disciples and serving our community.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="rounded-lg border p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">One-Time Gift</h3>
            <Button onClick={() => handleDonate(50)} className="w-full mb-2">Donate $50</Button>
            <Button onClick={() => handleDonate(100)} className="w-full mb-2">Donate $100</Button>
            <Button onClick={() => handleDonate(200)} className="w-full">Donate $200</Button>
          </div>

          <div className="rounded-lg border p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Monthly Support</h3>
            <Button onClick={() => handleDonate(25)} variant="outline" className="w-full mb-2">$25/month</Button>
            <Button onClick={() => handleDonate(50)} variant="outline" className="w-full mb-2">$50/month</Button>
            <Button onClick={() => handleDonate(100)} variant="outline" className="w-full">$100/month</Button>
          </div>

          <div className="rounded-lg border p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Custom Amount</h3>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 border rounded-md mb-4"
              min="1"
            />
            <Button onClick={() => handleDonate(0)} className="w-full">Donate Custom Amount</Button>
          </div>
        </div>

        <div className="prose lg:prose-xl">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Give</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mail a check to our church office</li>
            <li>Set up automatic bank transfers</li>
            <li>Donate stocks or securities</li>
            <li>Include us in your estate planning</li>
          </ul>

          <p className="mt-8">For questions about donations or other ways to give, please contact our finance team.</p>
        </div>
      </div>
    </div>
  )
} 