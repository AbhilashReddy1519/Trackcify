import React from 'react'

const Button = ({className , children, ...props}) => {
  return (
    <button className={`text-xl border rounded-[50px] ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button;