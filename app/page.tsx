import Header from './components/Header'
import Location from './components/Location'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Location />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

