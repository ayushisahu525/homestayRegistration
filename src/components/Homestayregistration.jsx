import React from 'react';
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className= 'h-screen w-full '>
    <div className='bg-gray-800 h-max grid place-items-center' >
            <form className='max-w-[600px] mx-auto h-max w-full rounded-lg bg-gray-900 p-8 px-8'>
    
                <h2 className='text-4xl dark:text-white font-bold text-center'>Homestay</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Name</label>
                    <input className='p-1 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Phone no</label>
                    <input className='p-1 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Location</label>
                    <input className='p-1 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                
                
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>No of rooms</label>
                    <input className='p-1 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Facilities</label>
                    <input className='p-1 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className=' text-gray-400 py-2'>
                    <label>From</label>
                    <input className='p-1 mx-3 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="date" />
                    <label>To</label>
                    <input className='p-1 mx-3 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="date" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Rent</label>
                    <input className='p-1 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>

                <div className='flex flex-col text-gray-400 py-2' >
                <input type="image" className='w-3/5 h-3/5 mt-2 ' src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20201116185103/Srinikethana-Homestay.jpg" alt="Submit" />
                </div>
    
                
            </form>
        </div>
        </div>
    
  )
};
export default Registration;
