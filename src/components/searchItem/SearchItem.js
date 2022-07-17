import React from 'react'
//css
import './searchItem.css'


const SearchItem = () => {
  return (
    <div className='search__item'>
       <img 
        src="https://r-xx.bstatic.com/data/mm/index_banner_getaway22_summer_2.jpg"
        alt=""
        className='search__item__img'
       /> 
       <div className="search__description">
            <h2 className="search__item__title">Tower Street Apartments</h2>
            <span className='search__item__distance'>500m from center</span>
            <span className='search__item__Taxi'>Free airport taxi</span>
            <span className='search__item__subTitle'>Studio Apartments with Air conditioning </span>
            <span className='search__item__features'> Entire stuio • 1 bathroom • 21m <sup>2</sup> 1 full  bed </span>
            <span className='search__item__cancel'>Free cancellation</span>
            <span className='search__item__cancel__title'>You can cancel later, so lock in this great price today!</span>
        </div>    

        <div className="search__details">
            <div className="search__details__rating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>

            <div className="search__details__text">
                <span className='search__details__price '>$112</span>
                <span className='search__details__txt'>Includes taxes and fees</span>
                <button className='search__details__btn'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem