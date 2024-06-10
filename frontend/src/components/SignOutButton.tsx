import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import * as apiClient from '../api-client'
import { useAppContext } from '../context/Appcontext'

const SignOutButton = () => {
    const queryClient=useQueryClient();

    const {showToast} =useAppContext();
    const mutation =useMutation(apiClient.SignOut,{
        onSuccess:async ()=>{
            //show toast
            await queryClient.invalidateQueries("validateToken")
            
            showToast({message:"Sign Out !",type:"SUCCESS"})
        },
        onError:(error:Error)=>{
            showToast({message:error.message,type:"ERROR"})

        }
    })
    const handleClick=()=>{
        mutation.mutate();
    }
  return (
    <div>
        <button onClick={handleClick} className='text-blue-600 p-1 px-2 font-bold  text-[20px] bg-white rounded-lg hover:bg-gray-200'>Sign Out</button>

      
    </div>
  )
}

export default SignOutButton
