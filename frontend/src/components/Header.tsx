import React from 'react'
import {Link} from 'react-router-dom'
import { useAppContext } from '../context/Appcontext'
import SignOutButton from './SignOutButton'
const Header = () => {
  const {isLoggedIn}=useAppContext();
  return (
    <div className='bg-blue-800 py-5 '>
        <div className='container mx-auto flex justify-between '>
            <span className='text-3xl text-white font-bold tracking-tighter'>
                <Link to="/">Booking.com</Link>
            </span>
            <span className='flex space-x-7 pt-2 text-2xl font-bold  outline-none  '>
              {
                isLoggedIn ? <>
                <Link to={"/my-bookings"} className='flex item-center hover:text-blue-200 text-gray-300'>My Bookings</Link>
                <Link to={"/my-hotels"} className='flex items-center text-gray-300 hover:text-blue-200 '>My Hotels</Link>
                <SignOutButton/>
                </>:
                 <Link to="/sign" className='flex items-center p-2 rounded-lg font-bold hover:text-blue-500  bg-gray-100 text-blue-800'>Sign In</Link>
              }
              

            </span>


        </div>
      
    </div>
  )
}

export default Header
