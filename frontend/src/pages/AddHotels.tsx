import ManageHotelForm from '../forms/ManageHotel';
import { useMutation } from 'react-query';
import { useAppContext } from '../context/Appcontext';
import * as apiClient from '../api-client';

const AddHotels = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: (error: any) => {
      console.error("Error saving hotel:", error);
      showToast({ message: `Error Saving Hotel: ${error.message || error}`, type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    // Log the FormData for debugging
    console.log("Submitting FormData:", Array.from(hotelFormData.entries()));
    mutate(hotelFormData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotels;
