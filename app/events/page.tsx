export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Sunday Service</h2>
          <p className="text-gray-600 mb-4">Sundays at 10:30 AM</p>
          <p className="mb-4">Join us for worship, prayer, and teaching from God's Word.</p>
          <Button onClick={() => router.push('/visit')}>Learn More</Button>
        </div>
      </div>
    </div>
  )
} 