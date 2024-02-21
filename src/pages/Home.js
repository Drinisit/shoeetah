import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Brand from '../components/brand/Brand'
import Gallery from '../components/gallery/Gallery'
import Shoes from '../components/shoes/Shoes'
import Model from "../components/model/Model"

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Brand />
        <Gallery />
        <Shoes />
        <Model />
    </>
  )
}

export default Home