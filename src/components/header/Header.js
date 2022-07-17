//react
import React, {useState} from 'react'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faMapLocation, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'

//date
import { DateRange } from 'react-date-range';
import { format} from 'date-fns';

//css
import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

import { useNavigate } from 'react-router-dom';

//----------------------------------------------------------------//
const Header = ({type}) => {
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    }) 
    
    const handleOptions = (name, method) => {
          setOptions(prev =>{
            return {
                ...prev,
                [name]: method === 'i' ? options[name] + 1 : options[name] - 1
                }
          })
        
        }
     const navigate = useNavigate()
    const handelClick = () => {
            navigate('/hotels', {state: {destination,date,options}})
    }    
    return (
        
        <div className="header">

          {/* header__container  */}
          <div className={type === 'list' ?"header__container list--mode" : "header__container"} >

            {/* header__list  */}
            <div className="header__list">

                <div className="header__list__item active">
                    <FontAwesomeIcon icon={faBed}  />
                    <span>Stays</span>
                </div>

                <div className="header__list__item">
                    <FontAwesomeIcon icon={faPlane}  />
                    <span>Flights</span>
                </div>

                <div className="header__list__item">
                    <FontAwesomeIcon icon={faCar}  />
                    <span>Car rentals</span>
                </div>

                <div className="header__list__item">
                    <FontAwesomeIcon icon={faMapLocation}  />
                    <span>Attractions</span>
                </div>

                <div className="header__list__item">
                    <FontAwesomeIcon icon={faTaxi}  />
                    <span>Airport taxis</span>
                </div>

            </div>
            {/* header__list end */}

           { type !== 'list' && <> {/* header__titel */}
            <h1 className="header__titel">
                 Find your next stay
            </h1>
            
            {/*header__description*/}
            <p className="header__description">
                 Search low prices on hotels, homes and much more...
            </p>
            
            {/*header__btn*/}
            <button className="header__btn">
                Signin / Register
            </button>  

            {/*header__search*/}  
            <div className="header__search">

                <div className="header__search__item">
                    <FontAwesomeIcon icon={faBed} className='header__search__icon'/>
                    <input type="text" 
                    placeholder='Where are you going?' className='header__search__input'
                    value={destination}
                    onChange={(e)=>{setDestination(e.target.value);}}
                     />
                </div>

                <div className="header__search__item">
                    <FontAwesomeIcon icon={faCalendarDays} className='header__search__icon' />
                    {/*Date*/}
                    <span className="header__search__text" onClick={()=>{setOpenDate(!openDate)}}> 
                        {`${format(date[0].startDate, 'dd/MM/yyyy') } to ${format(date[0].endDate, 'dd/MM/yyyy') }`}
                    </span>
                    {/*Calendar*/}
                    { openDate &&    <DateRange
                        
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        minDate= {new Date()}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                        />}
                </div>

                <div className="header__search__item">
                    <FontAwesomeIcon icon={faPerson} className='header__search__icon'/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className="header__search__text">
                    { 
                        `${options.adult} adult • ${options.children} children • ${options.room} room`
                     }
                    </span>

                    {/*options*/}
                    {openOptions && <div className="options">
                        <div className="options_item">
                            <span className="options__text">Adult</span>
                            <div className="option__counter">
                                <button
                                  disabled={options.adult<=1}
                                 className="option__counter__button" onClick={()=>{
                                    handleOptions('adult','d')
                                }}>-</button>
                                <spna className="option__counter__number">{options.adult}</spna>
                                <button 
                                
                                className="option__counter__button" onClick={()=>{
                                    handleOptions('adult','i')
                                }}>+</button>
                            </div>
                        </div>
                        <div className="options_item">
                            <span className="options__text">Children</span>
                            <div className="option__counter">
                                <button 
                                  disabled={options.children<=0}
                                 
                                className="option__counter__button" onClick={()=>{
                                    handleOptions('children','d')
                                }}>-</button>
                                <spna className="option__counter__number">{options.children}</spna>
                                <button className="option__counter__button" onClick={()=>{
                                    handleOptions('children','i')
                                }}>+</button>
                            </div>
                        </div>
                        <div className="options_item">
                            <span className="options__text">Room</span>
                            <div className="option__counter">
                                <button
                                  disabled={options.room<=1}
                                 
                                 className="option__counter__button" onClick={()=>{
                                    handleOptions('room','d')
                                }}>-</button>
                                <spna className="option__counter__number">{options.room}</spna>
                                <button className="option__counter__button" onClick={()=>{
                                    handleOptions('room','i')
                                }}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>

                <div className="header__search__item">
                    <button className="header__btn" onClick={handelClick}> Search</button>
                </div>

            </div>
            {/*header__search*/} 
            </> 
            } 
          </div>  
          {/* header__container  end */}

        </div>
        )
    }
    
export default Header
//----------------------------------------------------------------//