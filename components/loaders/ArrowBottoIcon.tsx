import React from 'react'

const ArrowBottoIcon: React.FC<{activeRule: boolean}> = ({activeRule}) => {
  return (
    <svg aria-hidden="true" className={"svg-icon fill-gray-500 transition-all duration-200 cursor-pointer hover:fill-amber-500 iconArrowUpLg " + (activeRule && '') }  width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>
  )
}

export default ArrowBottoIcon
