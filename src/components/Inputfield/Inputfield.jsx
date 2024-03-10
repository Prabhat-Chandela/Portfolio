import React, { useId } from 'react'

function Inputfield({
  label,
  type = "text",
  className = "",
  ...props

}, ref) {

  const id = useId()

  return (
    <div className='w-full flex relative flex-col gap-3'>

      {label && <label className={`w-fit absolute -top-3 left-3 bg-white bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent px-3 py-1 text-sm font-semibold rounded-lg  inline-block mb-1`} htmlFor={id}>{label}</label>}

      <input type={type} className={`px-3 py-7 rounded-lg bg-transparent placeholder:text-orange-300 text-black outline-none border-3 border-gradient-to-r from-pink-500 to-yellow-500  duration-200  w-full ${className}`}
        ref={ref} id={id}
        {...props} />

    </div>
  )
}


export default React.forwardRef(Inputfield)