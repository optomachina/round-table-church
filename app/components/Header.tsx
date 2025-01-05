"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center md:flex-row md:justify-between">
        <div 
          className="cursor-pointer mb-4 md:mb-0" 
          onClick={() => scrollToSection('home')}
        >
          <Image
            src="/assets/logos/round-table-church-logo.jpg"
            alt="Round Table Church"
            width={150}
            height={75}
            priority
            className="dark:brightness-200"
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" onClick={() => scrollToSection('home')}>Home</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button></li>
            <li><Button variant="ghost" onClick={() => scrollToSection('events')}>Events</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

