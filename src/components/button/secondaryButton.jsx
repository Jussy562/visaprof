import React from 'react'

function SecondaryButton({name}) {
  return (
    <button 
        className='py-2 md:py-2 px-4 md:px-4 shadow
        bg-gray-100 hover:bg-blue-400 text-blue-500 hover:text-white 
        text-bold text-xl border-none hover:border-none'
       
        >
        {name}
    </button>
  )
}

export default SecondaryButton