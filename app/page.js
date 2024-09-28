import Carousel from '@components/Carousel'
import Count from '@components/Count'
import Goal from '@components/Goal'
// import Navbar from '@components/Navbar'
import OurProducts from '@components/OurProducts'


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Carousel />
      <OurProducts />
      <Goal />
      <Count />
    </>
  )
}
