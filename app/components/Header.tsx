import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="text-2xl font-bold text-navy-600 mb-4 md:mb-0">Round Table Church</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost">Home</Button></li>
            <li><Button variant="ghost">About</Button></li>
            <li><Button variant="ghost">Events</Button></li>
            <li><Button variant="ghost">Contact</Button></li>
          </ul>
        </nav>
      </div>
      <div className="bg-navy-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Engage. Establish. Equip. Empower.</h2>
        <p className="text-xl mb-8">Creating Disciples Together</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
          <Button className="bg-white text-navy-600 hover:bg-gray-100">Join Us This Sunday</Button>
          <Button variant="outline" className="text-white border-white hover:bg-navy-700">Donate</Button>
          <Button variant="outline" className="text-white border-white hover:bg-navy-700">Log In</Button>
        </div>
      </div>
    </header>
  )
}

