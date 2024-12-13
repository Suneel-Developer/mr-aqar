import React from 'react'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import Ads from '../../components/Ads'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Categories />


      <div className='px-4 py-10 bg-[#f5f7f9]'>
        <div className='max-w-[1000px] mx-auto w-full'>
          <h1 className='text-[#242424] font-bold text-lg md:text-2xl mb-6'>أحدث إعلانات العقارات في الكويت</h1>
          <Ads />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home