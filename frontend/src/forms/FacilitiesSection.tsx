import { useFormContext } from 'react-hook-form';
import { hotelFacilities } from '../config/Hotel-options-config.tsx';
import { HotelFormData } from './ManageHotel';

const FacilitiesSection = () => {
  const { register, formState: { errors } } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className='text-2xl font-bold mb-3'>Facilities</h2>
      <div className='grid grid-cols-5 gap-3'>
        {hotelFacilities.map((type, index) => (
          <label key={index} className='text-sm flex gap-1 text-gray-700' htmlFor={`facility-${index}`}>
            <input
              id={`facility-${index}`}
              type='checkbox'
              value={type}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return 'At least one facility is required';
                  }
                }
              })}
            />
            {type}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className='text-red-500 font-bold text-sm'>{errors.facilities.message}</span>
      )}
    </div>
  );
};

export default FacilitiesSection;
