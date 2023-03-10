import React from 'react'

function Button({title, type}) {
  return (
    <button 
        className='py-2 md:py-2 px-4 md:px-4
        bg-blue-600 hover:bg-blue-400 text-white 
        text-bold text-xl border-none hover:border-none'
        type={type}
        >
        {title}
    </button>
  )
}

export default Button