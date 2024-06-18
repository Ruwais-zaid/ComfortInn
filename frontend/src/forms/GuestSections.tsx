import { useFormContext } from 'react-hook-form';
import { HotelFormData } from './ManageHotel';

const GuestSections = () => {
  const { register, formState: { errors } } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className='text-2xl mb-3 font-bold'>Guest</h2>
      <div className='grid grid-cols-2 gap-6 p-6 bg-gray-300 rounded-lg'>
        <label className='text-gray-700 text-sm font-semibold'>
          Adults
          <input
            className='border rounded w-full py-2 px-3 font-normal'
            type='number'
            min={1}
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.adultCount && <p className="text-red-500 text-xs">{errors.adultCount.message}</p>}
        </label>
        <label className='text-gray-700 text-sm font-semibold'>
          Children
          <input
            className='border rounded w-full py-2 px-3 font-normal'
            type='number'
            min={0}
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.childCount && <p className="text-red-500 text-xs">{errors.childCount.message}</p>}
        </label>
      </div>
    </div>
  );
};

export default GuestSections;
