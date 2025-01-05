"use client"

import { Button } from "@/components/ui/button"

export default function Location() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Location</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.7041430676397!2d-111.06291548481778!3d32.33379818110237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d60b2e6b9a379d%3A0x5f73e64d3c7831d0!2s4239%20W%20Ina%20Rd%2C%20Tucson%2C%20AZ%2085741!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Round Table Church</h3>
            <p className="text-gray-600 mb-4">4239 W. Ina Rd, Tucson, AZ 85741</p>
            <Button 
              className="bg-navy-600 hover:bg-navy-700 text-white"
              onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=4239+W.+Ina+Rd,+Tucson,+AZ+85741', '_blank')}
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

