import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 p-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] transition ease-in-out duration-300 hover:scale-110`}>
      Get Started
    </button>
  )
}

export default Button