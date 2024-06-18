import { useFormContext } from 'react-hook-form';
import { HotelFormData } from './ManageHotel';

const DetailsSection = () => {
  const { register, formState: { errors } } = useFormContext<HotelFormData>();

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold mb-3'>Add Hotel</h1>

      <label className="text-gray-700 text-sm font-bold flex-1" htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          className="border border-black rounded mt-1 w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
      </label>

      <div className='flex gap-3'>
        <label className='text-gray-700 text-sm font-bold flex-1' htmlFor="city">
          City
          <input
            id="city"
            type='text'
            className='border border-black rounded mt-1 w-full py-1 px-2 font-normal'
            {...register("city", { required: "This field is required" })}
          />
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1" htmlFor="country">
          Country
          <input
            id="country"
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>

      <label className='text-gray-700 text-sm font-bold flex-1' htmlFor="description">
        Description
        <textarea
          id="description"
          rows={10}
          className='border border-black text-sm text-gray-700 w-full py-1 px-2 font-normal'
          {...register("description", { required: "This field is required" })}
        ></textarea>
        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
      </label>

      <label className='font-bold text-sm text-gray-700 max-w-[50%]' htmlFor="pricePerNight">Price Per Night
        <input
          id="pricePerNight"
          type='number'
          min={1}
          className='border rounded w-full py-1 px-2 font-normal'
          {...register("pricePerNight", { required: "This field is required" })}
        />
        {errors.pricePerNight && <p className="text-red-500 text-xs">{errors.pricePerNight.message}</p>}
      </label>

      <label className='font-bold text-sm text-gray-700 max-w-[50%]' htmlFor="starRating">Star Rating
        <select
          id="starRating"
          {...register("starRating", { required: "This field is required" })}
          className='border rounded w-full p-2 text-gray-700 font-normal'
        >
          <option value="" className='text-sm font-bold '>Select a Rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        {errors.starRating && <p className="text-red-500 text-xs">{errors.starRating.message}</p>}
      </label>
    </div>
  );
};

export default DetailsSection;
