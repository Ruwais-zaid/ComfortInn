import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../config/Hotel-options-config";
import React from 'react'
import { HotelFormData } from "./ManageHotel";

const TypeSection = () => {
    const {register,watch,formState:{errors}} =useFormContext<HotelFormData>();
    const typeWatch=watch("type")
  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">Type</h2>
        <div className="grid grid-cols-5 gap-2 ">
            {
                hotelTypes.map((ans)=>(
                    <label className={typeWatch=== ans ? "cursor-pointer bg-blue-300 text-sm rounded-full py-2 px-4 " : " cursor-pointer bg-gray-300 text-sm rounded-full py-2 px-4 "}>
                        <input type="radio" value={ans} {...register("type", { required: "This field is required" })} className="hidden"/>
                        <span>{ ans}</span>
                    </label> 
                ))
            }
        </div>
        {errors.type && (<span className="text-red-500 font-bold text-sm">{errors.type.message}</span>)
}
      
    </div>
  )
}

export default TypeSection
