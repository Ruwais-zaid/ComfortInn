import React from 'react'
import {useFormContext} from 'react-hook-form'
import { hotelFacilities } from '../config/Hotel-options-config'
import { HotelFormData } from './ManageHotel'
const FacilitiesSection = () => {
    const {register,formState:{errors}}=useFormContext<HotelFormData>();
  return (
    <div>
      
    </div>
  )
}

export default FacilitiesSection
