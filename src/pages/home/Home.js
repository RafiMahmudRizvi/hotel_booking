//react
import React from 'react'

//components
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/Featured/Featured'
import PropertiList from '../../components/propertiList/PropertiList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

//css
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <div className="home__container">
          <Featured />
         <h2 className="home__title">Destinations we love</h2>
         <PropertiList />
         <h2 className="home__title">Browse by property type</h2>
         <FeaturedProperties />
         <MailList />
         <Footer />
      </div>
    </div>
  )
}

export default Home