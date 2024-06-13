import React from 'react'
import {FormProvider, useForm} from 'react-hook-form'
import DetailsSection from './DetailsSection'
import TypeSection from './TypeSection'

export type HotelFormData={
    name:string,
    city:string,
    country:string,
    desciption:string,
    type:string,
    pricePerNight:number,
    starRating:number,
    facilities:string[],
    imageFiles:FileList,
    adultCount:number,
    childCount:number
}
const ManageHotel = () => {
    const formMethods=useForm<HotelFormData>()
  return (
    <FormProvider {...formMethods}>
    <form className='flex flex-col gap-4'>
        <DetailsSection/>
        <TypeSection/>

    </form>
    </FormProvider>
  )
}

export default ManageHotel
