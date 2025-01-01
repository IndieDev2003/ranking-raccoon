import React from 'react'

function Button({buttonText='',className=''}) {
  return (
      <button className={`${className} px-6 text-nowrap sm:px-8 py-2 sm:py-3 text-lg  bg-black text-white rounded-full`}>{!buttonText?'Dummy Text':buttonText }</button>
  )
}

export default Button