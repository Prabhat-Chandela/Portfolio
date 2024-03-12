import React, {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {

    const id = useId()
  return (
    <div className='w-fit flex items-center'>

        {label && <label className='' htmlFor={id} ></label>}
        <select {...props} id={id} ref={ref} 
        className={` px-3 py-5 rounded-lg bg-orange-500 border-none text-white outline-none   duration-200 border w-fit  ${className}`}>

            {options?.map((option)=>(
                <option className='bg-orange-500 text-white ' key={option} value={option}>{option}</option>
            ))}

        </select>
    </div>
  )
}

export default React.forwardRef(Select)