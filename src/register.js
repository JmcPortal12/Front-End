import React from 'react';
import Image from './images/jmc_logos.jpg';

function Register() {
    return(
        <div className=" min-h-screen bg-no-repeat bg-[url('E:\jmc\src\images\jmc_main.jpg')]">
            < div className='flex items-center justify-center p-6  '>
            <div className=' h-96 w-2/4 mt-20 p-11 bg-white '>
                <img  src={Image} className="jmc_logos"  />
            <div>
                <h2>JMC STAFF ASSOCIATION</h2>
                <h2>UPADTE THE RECORDS</h2>
                </div>
                <div>
                    <select className="w-full p-2 border rounded-md">
                        <option>Teaching</option>
                        <option>Non-Teaching</option>
                    </select>
                    </div>

                    <div className=''>
                        <textarea placeholder='Address ' className='w-full rounded-lg' rows="2"></textarea>
                    </div>
                    
                    <input type='text' placeholder='Enter Your name' className='p-2 rounded-lg'></input>
                    <input type='text' placeholder='Enter Your name' className='p-2 rounded-lg '></input>

                    <input type='text' placeholder='Enter Your name' className='p-2 rounded-lg'></input>
                    <input type='text' placeholder='Enter Your name' className='p-2 rounded-lg '></input>

                    <input type='number' placeholder='Enter Mobile Number' className='p-2 rounded-lg '></input>
                    <input type='date' className='p-2 '></input>

                    <select className="h-11 mt-1 p-2 rounded-lg">
                        <option>Aided</option>
                        <option>Slef-Finance</option>
                    </select>

                    <select className='p-2 h-11 mt-1 rounded-lg'>
                        <option>Compute Scienece</option>
                        <option>Computer Application</option>
                        <option>Maths</option>
                        <option>Business Administrasion</option>
                    </select>

                    <div className='mt-1'>
                        <input type='email' placeholder='@gmail.com' className='p-2 w-full h-11 rounded-lg'></input>
                    </div>

                    <div className='mt-3'>
                        <button className='bg-blue-800 text-white p-2 w-full rounded-lg'>Back</button>
                    </div>

                    <div className='mt-3'>
                        <button className='bg-blue-800 text-white p-2 w-full rounded-lg'>Update</button>
                    </div>

                    <div className='mt-3'>
                        <button className='bg-blue-800 text-white p-2 w-full rounded-lg'>Cancel</button>
                    </div>

                </div>
            </div>
        </div>

    )
    

}
export default Register