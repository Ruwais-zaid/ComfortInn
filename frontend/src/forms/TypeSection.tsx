import { useFormContext } from 'react-hook-form';
import { HotelFormData } from './ManageHotel';
import { hotelTypes } from '../config/Hotel-options-config';

const TypeSection = () => {
  const { register, watch, formState: { errors } } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type) => (
          <label key={type} className={`cursor-pointer ${typeWatch === type ? "bg-blue-300" : "bg-gray-300"} text-sm rounded-full py-2 px-4`}>
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 font-bold text-sm">{errors.type.message}</span>
      )}
    </div>
  );
};

export default TypeSection;
