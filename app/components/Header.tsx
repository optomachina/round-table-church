"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
        <div 
          className="cursor-pointer mb-4 md:mb-0" 
          onClick={() => handleNavigation('/')}
        >
          <Image
            src="/assets/logos/round-table-logo.svg"
            alt="Round Table Church"
            width={200}
            height={100}
            className="dark:invert"
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => handleNavigation('/')}>Home</Button></li>
            <li><Button variant="ghost" onClick={() => handleNavigation('/about')}>About</Button></li>
            <li><Button variant="ghost" onClick={() => handleNavigation('/events')}>Events</Button></li>
            <li><Button variant="ghost" onClick={() => handleNavigation('/contact')}>Contact</Button></li>
          </ul>
        </nav>
      </div>
      <div className="bg-navy-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Engage. Establish. Equip. Empower.</h2>
        <p className="text-xl mb-8">Creating Disciples Together</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
          <Button className="bg-white text-navy-600 hover:bg-gray-100" onClick={() => handleNavigation('/visit')}>Join Us This Sunday</Button>
          <Button variant="outline" className="text-white border-white hover:bg-navy-700" onClick={() => handleNavigation('/donate')}>Donate</Button>
          <Button variant="outline" className="text-white border-white hover:bg-navy-700" onClick={() => handleNavigation('/login')}>Log In</Button>
        </div>
      </div>
    </header>
  )
}

