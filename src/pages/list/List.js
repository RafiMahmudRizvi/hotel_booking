import React, { useState} from 'react'

//components
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

//css
import './list.css'

//date
import { DateRange } from 'react-date-range';
import { format} from 'date-fns';

import {useLocation} from 'react-router-dom'
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const [openDate, setOpenDate]= useState(false)
  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);


  return (
    <div>
      <Navbar />
      <Header type = 'list'/>
      <div className="list__container">

        <div className="list__wrapper">

          <div className="list__search">
            <h1 className="list__search__title">Search</h1>
            <div className="list__search_item">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="list__search_item">
              <label>Check-in Date</label>
              <span  onClick={()=>{setOpenDate(!openDate)}}> 
                {`${format(date[0].startDate, 'dd/MM/yyyy') } to ${format(date[0].endDate, 'dd/MM/yyyy') }`}
              </span>
              {openDate &&     <DateRange
                        
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        minDate= {new Date()}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                       
                 />}
            </div>

            <div className="list__item">
              <label >Options</label>
              
              <div className="list__items__option">
                  <div className="list__option__item">
                    <span className="list__option__text">
                      Min price <small>per night</small>
                    </span>
                    <input type="text" className="list__option__input" />
                  </div>

                  <div className="list__option__item">
                    <span className="list__option__text">
                      Max price <small>per night</small>
                    </span>
                    <input type="text" className="list__option__input" />
                  </div>

                  <div className="list__option__item">
                    <span className="list__option__text">
                    Adult
                    </span>
                    <input type="number" 
                    min={1} className="list__option__list__option__input" placeholder={options.adult}/>
                  </div>

                  <div className="list__option__item">
                    <span className="list__option__text">
                      Children
                    </span>
                    <input type="number" 
                    min={0} className="list__option__input" placeholder={options.children} />
                  </div>

                  <div className="list__option__item">
                    <span className="list__option__text">
                      Room
                    </span>
                    <input  type="number" 
                    min={1}  className="list__option__input" placeholder={options.room}/>
                  </div>
              </div>

            </div>

            <button className="search__btn">
              Search
            </button>
          </div>

          <div className="list__result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          
          </div>

        </div>
      </div>
    </div>
  )
}

export default List