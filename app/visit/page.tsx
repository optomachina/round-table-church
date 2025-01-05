export default function VisitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Join Us This Sunday</h1>
      <div className="max-w-3xl mx-auto">
        <div className="prose lg:prose-xl">
          <h2 className="text-2xl font-semibold mt-8 mb-4">What to Expect</h2>
          <p>We're excited to welcome you to Round Table Church! Here's what you can expect when you visit:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Warm and friendly welcome from our greeting team</li>
            <li>Contemporary worship music</li>
            <li>Engaging and relevant teaching from the Bible</li>
            <li>Programs for children of all ages</li>
            <li>Coffee and refreshments</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Service Times</h2>
          <p className="mb-2">Sunday Service: 10:00 AM</p>
          <p>Wednesday Bible Study: 7:00 PM</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Location</h2>
          <p className="mb-2">123 Church Street</p>
          <p className="mb-2">City, State 12345</p>
          <p>United States</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Parking</h2>
          <p>Free parking is available in our main lot, with overflow parking available on surrounding streets.</p>
        </div>
      </div>
    </div>
  )
} 