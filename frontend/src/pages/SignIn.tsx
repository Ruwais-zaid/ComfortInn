import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import * as apiClient from '../api-client'
import { useAppContext } from '../context/Appcontext'
import { Link, useNavigate } from 'react-router-dom'

export type SignInformData={
    email:string,
    password:string
}

const SignIn = () => {
  const {showToast}=useAppContext();
  const queryClient=useQueryClient();
  const Navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}} =useForm<SignInformData>();
    const mutation = useMutation(apiClient.SignIn,{
      onSuccess: async ()=>{
        showToast({message:"Sign in Sucessful",type:"SUCCESS"})
        await queryClient.invalidateQueries("validateToken")
        Navigate("/")
        
      },
      onError:(error:Error)=>{
        //show the toast
        showToast({message:error.message,type:"ERROR"})

        
  
      }
    })
    const onSubmit = (data: SignInformData) => {
      mutation.mutate(data);
    };
  

  return (
    <form action="" className='flex flex-col gap-5 ' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-3xl font-bold '>Sign In</h2>

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
      <span className='flex item-center justify-between'>
        <span className='text-md ' >Not Registered? <Link to={"/register"} className='text-blue-600 underline'>Create an account here</Link></span>
        <button type="submit" className="bg-blue-600 rounded-lg text-md text-white p-2 font-bold hover:bg-blue-500 ">
          Login
        </button>
      </span>

        
    </form>
  )
}

export default SignIn
