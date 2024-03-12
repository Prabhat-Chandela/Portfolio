import React from 'react'


function Button({
    children,
    className = "",
    bgColor = "bg-gradient-to-r from-purple-300 to-purple-500",
    textColor = "text-white",
    type = "button",
    ...props

}) {
    return (
        <button className={`w-fit px-3 py-1 rounded-md ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button