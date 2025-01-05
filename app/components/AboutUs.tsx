import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Round Table Church Community"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 text-lg leading-relaxed">
              Round Table Church is a vibrant, inclusive community dedicated to fostering spiritual growth and meaningful connections. Our mission is to engage with our faith, establish strong relationships, equip ourselves with knowledge, and empower each other to make a positive impact in the world. Join us as we journey together in faith and fellowship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

