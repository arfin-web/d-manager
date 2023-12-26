import Faqs from '@/components/views/landingPage/Faqs'
import Features from '@/components/views/landingPage/Features'
import Footer from '@/components/views/landingPage/Footer'
import Hero from '@/components/views/landingPage/Hero'
import MainNav from '@/components/views/landingPage/MainNav'

export default function Home() {
  return (
    <>
      <MainNav />
      <Hero />
      <Features />
      <Faqs />
      <Footer />
    </>
  )
}
