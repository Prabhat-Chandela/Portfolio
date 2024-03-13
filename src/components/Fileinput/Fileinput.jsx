import React from 'react'

function Fileinput({
    className="",
    children,
    ...props
},ref) {

  


  return (
    <div className={` ${className} w-5 h-5 p-5 border bg-orange-500  border-black rounded-full overflow-hidden cursor-pointer flex items-center justify-center`}>
        
         <input className='flex items-center justify-center' ref={ref} type="file" {...props}/>   

    </div>
  )
}

export default  React.forwardRef(Fileinput)