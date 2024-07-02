/* eslint-disable react/prop-types */
// import React from 'react'

export default function CommonCard({className, children}) {
  return (
    <div className={`bg-white border-t-[2px] border-l-[2px] border-r-[5px] border-b-[5px] rounded-[16px] min-w-[50px] min-h-[50px] border-[#172739] ${className} `}>
      {children}
    </div>
  )
}
