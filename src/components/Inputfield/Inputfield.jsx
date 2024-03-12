import React, { useId } from 'react'

function Inputfield({
  label,
  type = "text",
  className = "",
  ...props

}, ref) {

  const id = useId()

  return (
    <div className='w-full flex flex-col gap-1'>

      {label && <label className={`w-fit bg-gradient-to-r from-purple-300 to-purple-500 px-3 py-1 text-white text-sm font-semibold rounded-lg z-10 inline-block mb-1`} htmlFor={id}>{label}</label>}


      <input type={type} className={`px-3 py-2 rounded-lg bg-transparent placeholder:text-purple-300 text-purple-500 outline-none border border-purple-300 focus:border-purple-400 duration-200 w-full ${className}`}
        ref={ref} id={id}
        {...props} />


    </div>
  )
}


export default React.forwardRef(Inputfield)