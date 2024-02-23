import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Brand from '../components/brand/Brand'
import Gallery from '../components/gallery/Gallery'
import Shoes from '../components/shoes/Shoes'
import Model from "../components/model/Model"
import Trends from "../components/trends/Trends"

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Brand />
        <Gallery />
        <Shoes />
        <Model />
        <Trends />
    </>
  )
}

export default Home