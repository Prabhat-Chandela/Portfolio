import React, { useId } from 'react'

function Inputfield({
  label,
  type = "text",
  className = "",
  ...props

}, ref) {

  const id = useId()

  return (
    <div className='w-full flex relative flex-col gap-1'>

      {label && <label className={`w-fit absolute bg-white text-orange-500 -top-3 left-3 px-2 py-1 text-sm font-semibold rounded-lg z-10 inline-block mb-1`} htmlFor={id}>{label}</label>}


      <input type={type} className={`p-2 sm:p-3 rounded-lg bg-transparent placeholder:text-orange-300 text-black outline-none border border-orange-300 focus:border-orange-600 duration-200 w-full ${className}`}
        ref={ref} id={id}
        {...props} />


    </div>
  )
}


export default React.forwardRef(Inputfield)