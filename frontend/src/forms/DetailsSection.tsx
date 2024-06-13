import React from 'react'
import { useFormContext } from 'react-hook-form'
import { HotelFormData } from './ManageHotel';

const DetailsSection = () => {
    const {register,formState:{errors}}=useFormContext<HotelFormData>();
  return (
    <div className='flex flex-col gap-4 '>
        <h1 className='text-3xl  font-bold mb-3 '>Add Hotel</h1>
        <label className="text-gray-700 text-sm font-bold flex-1">
       Name
        <input
          type="text"
          className="border border-black rounded mt-1 w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
      </label>
      <div className='flex gap-3 '>
      <label className='text-gray-700 text-sm font-bold flex-1'>
        City
        <input type='text' className='border border-black rounded mt-1 w-full py-1 px-2 font-normal'
        {...register("city", { required: "This field is required" })}/>

      </label>
      <label className='font-bold text-sm text-gray-700 flex-1'>Country
       <select   {...register("starRating", { required: "This field is required" })} className='border rounded w-full p-2 text-gray-700 font-normal'>
        <option value="" className='text-sm font-bold '>Select Country</option>
        {["India","USA","Afghanistan","Albania","Algeria","Argentina",
            'Australia',"Austria","	Azerbaijan","Bahamas","Germany",'Hungary',"	Iran","	Jordan","Japan","Kuwait",'Libya',"Malaysia","Mexico"]
        .map((num)=>(
            <option key={num}>{num}</option>
        ))}
       </select>
            {errors.starRating && <p className="text-red-500 text-xs">{errors.starRating.message}</p>}
            </label>
      </div>
      <label className='text-gray-700 text-sm font-bold flex-1'>Desciption
        <textarea rows={10} className='border border-black text-sm text-gray-700 w-full  py-1 px-2 font-normal'
          {...register("desciption", { required: "This field is required" })}></textarea>
          {errors.desciption && <p className="text-red-500 text-xs">{errors.desciption.message}</p>}
          </label>
        <label className='font-bold text-sm text-gray-700  max-w-[50%]'>Price Per Night 
        <input type='number' min={1} className='border rounded w-full py-1 px-2 font-normal'
          {...register("pricePerNight", { required: "This field is required" })}/>
            {errors.pricePerNight && <p className="text-red-500 text-xs">{errors.pricePerNight.message}</p>}
            </label>
            <label className='font-bold text-sm text-gray-700  max-w-[50%]'>Star Rating
       <select   {...register("starRating", { required: "This field is required" })} className='border rounded w-full p-2 text-gray-700 font-normal'>
        <option value="" className='text-sm font-bold '>Select as Rating</option>
        {[1,2,3,4,5].map((num)=>(
            <option key={num}>{num}</option>
        ))}
       </select>
            {errors.starRating && <p className="text-red-500 text-xs">{errors.starRating.message}</p>}
            </label>
          
         
         
          
 

      
    </div>
  )
}

export default DetailsSection
