import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

//css
import './hotel.css'
import { computeHeadingLevel } from '@testing-library/react'
import { el, sl } from 'date-fns/locale'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos =[
    {src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'},
  {src: 'https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
  {src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1556&q=80'},
  {src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
  {src: 'https://images.unsplash.com/photo-1530311583484-ea8bf4c407fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'},
  {src: 'https://images.unsplash.com/photo-1615636027879-cb123581a284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80'},]
  const handelOpen = (i)=>{
    setSlideNumber(i)
    setOpen(true)
  }
  return (
    <div>
     {!open &&<><Navbar />
      <Header type='list' /></> }
      <div className="hotel__container">

      { open &&
        <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" 
            onClick={()=>setOpen(false)}
             />
            <FontAwesomeIcon icon={faCircleArrowLeft} className="left"
              onClick={()=>{
                if(slideNumber>0){
                  setSlideNumber(slideNumber-1);
                }else{
                  setSlideNumber(photos.length-1);

                }
              }}
            />
              <div className="slider__wrapper">
                <img src={photos[slideNumber].src} className="slider__img" />
              </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="right"

                onClick={()=>{
                if(slideNumber< photos.length-1){
                  setSlideNumber(slideNumber+1);
                }else{
                  setSlideNumber(0);

                }
              }}
            />
        </div>
      }


      {!open && <>
        <div className="hotel__wraper">
          <button className="book__now">Reserve or Book Now!</button>
          <h1 className="hotel__title">
            Grand Hotel
          </h1>
          <div className="hotel__address">
            
            <span className="hotel__distance">
            <FontAwesomeIcon icon={faLocationDot}/>145 Parkcenter Circle, Dublin, OH 43017, United States of America</span>
            <span className="hotel__price">Book a stay over $114 at this property and get a free airport taxi. </span>
          </div>

            <div className="hotel_imgs">
               {
                photos.map((photo, index)=>{
                    return(
                      <div className="hotel__img__wrapper">
                          <img
                          onClick={()=>handelOpen(index)}
                           src={photo.src} alt="" className='hotel__img'/>
                      </div>
                    )
                }
                 
                )
               }
               
            </div>

            <div className="hotel__details">
              <div className="hotel__details__text">
                <h1 className="hotel__titel">Stay in the heart of Bangkok</h1>
                <p className="hotel__desc">Located in the heart of Bangkok's entertainment and business area, Grand Business Inn offers accommodations with free WiFi in all guestrooms. The hotel is just steps away from the Nana BTS Skytrain Station.Rooms are well furnished and are all air-conditioned. Amenities inside include a flat-screen TV, refrigerator and a seating area. The private bathrooms are fitted with hot/cold shower facilities and slippers.</p>
              </div>
              <div className="hotel__details__price">
                <h1>Property Highlights</h1>
                <span>Located in the best-rated area in Bangkok, this hotel has an excellent location score of 9.0</span>
                <h2>
                  <b>$887</b>
                  (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
        </div>
        <MailList />
        <Footer />
      </>}
       


       
      </div>
    </div>
  )
}

export default Hotel