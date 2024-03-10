import React from 'react'


function Button({
    children,
    className = "",
    bgColor = "bg-gradient-to-r from-pink-500 to-yellow-500",
    textColor = "text-black",
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