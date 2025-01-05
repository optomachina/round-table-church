"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Round Table Church</h3>
            <p>4239 W. Ina Rd, Tucson, AZ 85741</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@roundtablechurch.com</p>
          </div>
          <div>
            <Link href="/privacy-policy" className="text-white hover:text-gray-300 mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-white hover:text-gray-300">
              Terms of Use
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Round Table Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

