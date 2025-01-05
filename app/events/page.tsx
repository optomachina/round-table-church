export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example events - replace with real data */}
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Sunday Service</h3>
          <p className="text-gray-600 mb-4">Every Sunday at 10:00 AM</p>
          <p>Join us for worship, teaching, and fellowship.</p>
        </div>
        
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Bible Study</h3>
          <p className="text-gray-600 mb-4">Wednesdays at 7:00 PM</p>
          <p>Dive deep into God's word with our community.</p>
        </div>
        
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Youth Group</h3>
          <p className="text-gray-600 mb-4">Fridays at 6:30 PM</p>
          <p>A time for young people to connect, learn, and grow together.</p>
        </div>
      </div>
    </div>
  )
} 