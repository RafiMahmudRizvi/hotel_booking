//react
import React from 'react'
//css
import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featured__item__row">

        <div className="featured__item">
            <img className='featured__item__img' src="https://www.golftripz.com/blog/wp-content/uploads/2019/06/BANGKOK.jpg"  />
            <div className="featured__title">
                <h2>Bangkok</h2>
                <p>4040 properties</p>
            </div>
        </div>

        <div className="featured__item">
            <img className='featured__item__img' src="https://www.holidify.com/images/bgImages/SINGAPORE.jpg"  />
            <div className="featured__title">
                <h2>Singapore</h2>
                <p>807 properties</p>
            </div>
        </div>

        </div>  
        
        <div className="featured__item__row">
        <div className="featured__item">
            <img className='featured__item__img__last__row' src="https://lh3.googleusercontent.com/M0rT-eYBXGdxibh2UrmwspSfoYPj8maowlmEgayCl-JYsi9eO45KyIWxCK5LK7Vy59KhWM4T_v5iUz6_cJibiekMIERyVKNkO6jLrJJllAQQyusOxyqQ_O1oLkV9=s1024"  />
            <div className="featured__title">
                <h2>Dhaka</h2>
                <p>258 properties</p>
            </div>
        </div>

        <div className="featured__item">
            <img className='featured__item__img__last__row' src="https://images.thrillophilia.com/image/upload/s--Bnw5EcnV--/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/179/030/original/1579787240_shutterstock_254944402.jpg.jpg"  />
            <div className="featured__title">
                <h2>Geneva</h2>
                <p>247 properties</p>
            </div>
        </div>
        <div  className="featured__item">
            <img className='featured__item__img__last__row' src="https://fullsuitcase.com/wp-content/uploads/2021/12/Places-to-see-and-things-to-do-in-Manchester-UK.jpg.webp"  />
            <div className="featured__title">
                <h2>Manchester</h2>
                <p>1088 properties</p>
            </div>
        </div>
        </div>  

    </div>
  )
}

export default Featured