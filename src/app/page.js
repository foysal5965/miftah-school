import Footer from '@/component/Footer'
import GalleryPage from '@/component/Gallery'
import HeroSection from '@/component/HeroSection'
import Navbar from '@/component/Navbar'
import NewsAndEventsPage from '@/component/NewsAndEvents'
import SliderPage from '@/component/Slider'
import TestimonialPage from '@/component/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar/>
    <SliderPage/>
    <HeroSection/>
    <TestimonialPage/>
    <GalleryPage/>
    <NewsAndEventsPage/>
    <Footer/>
    </>
  )
}
