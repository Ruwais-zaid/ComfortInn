import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../api-client'
import { useAppContext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
};

const Register = () => {
  const queryClient =useQueryClient();
  const navigate=useNavigate();
  const {showToast}=useAppContext();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const mutation = useMutation(apiClient.register,{
    onSuccess: async ()=>{
      showToast({message:"Registration Sucess",type:"SUCCESS"})
      await queryClient.invalidateQueries("validateToken");
      
      navigate("/")
    },
    onError:(error:Error)=>{
      showToast({message:error.message,type:"ERROR"})

    }
  })

  const onSubmit = (data: RegisterFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            type="text"
            className="border border-black rounded w-full py-1 mt-1 px-2 font-normal"
            {...register("firstname", { required: "This field is required" })}
          />
          {errors.firstname && <p className="text-red-500 text-xs">{errors.firstname.message}</p>}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            type="text"
            className="border border-black rounded mt-1 w-full py-1 px-2 font-normal"
            {...register("lastname", { required: "This field is required" })}
          />
          {errors.lastname && <p className="text-red-500 text-xs">{errors.lastname.message}</p>}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border border-black rounded mt-1 w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border border-black rounded mt-1 w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters."
            }
          })}
        />
        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
        <input
          type="password"
          className="border border-black rounded mt-1 w-full py-1 px-2 font-normal"
          {...register("confirmpassword", {
            validate: (value) => {
              if (!value) {
                return "This field is required";
              } else if (watch("password") !== value) {
                return "Passwords do not match";
              }
            }
          })}
        />
        {errors.confirmpassword && <p className="text-red-500 text-xs">{errors.confirmpassword.message}</p>}
      </label>
      <span>
        <button type="submit" className="bg-blue-600 rounded-lg text-md text-white p-2 font-bold hover:bg-blue-500 ">
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
