/* eslint-disable react/prop-types */
// import React from 'react'

export default function CommonCard({className, children}) {
  return (
    <div className={`bg-red-400 min-w-[50px] min-h-[50px] ${className} `}>
      {children}
    </div>
  )
}
