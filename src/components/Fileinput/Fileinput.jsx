import React from 'react'

function Fileinput({
    className="",
    children,
    ...props
}) {
  return (
    <div className={`relative bg-orange-500 ${className} w-[10%] px-3 py-5 rounded-md overflow-hidden cursor-pointer`}>
        
        <div className='w-full bg-orange-500 inset-0 absolute z-20 text-black font-bold flex items-center justify-center'>{children}</div>
         <input className='absolute inset-0 z-0 w-full' type="file" {...props}/>   

    </div>
  )
}

export default Fileinput