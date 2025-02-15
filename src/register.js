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
                <input type='text' placeholder='demo'></input>
            </div>
            </div>
            </div>
        </div>

    )
    

}
export default Register