import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button';


function Visaprof() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center bg-none'>
            <h1 
                className='text-blue-600 font-bold text-2xl md:text-4xl '
            >
                    Visaprof
            </h1>
            <p className='text-black text-xl md:text-2xl mt-4'>Payment don't have to be stressful</p>
            <div className='flex justify-center items-center mt-8'>
              <Link
                to='/payment'
              >
                <Button title={"New Payment"} />
              </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Visaprof