import React from 'react'

const ArrowIconTop: React.FC<{activeRule: boolean}> = ({activeRule}) => {
  return (
    <svg aria-hidden="true" className={"svg-icon fill-gray-500 transition-all duration-200 cursor-pointer hover:fill-amber-500 iconArrowUpLg " + (activeRule && 'fill-amber-600') } width="36" height="36" viewBox="0 0 36 36"><path d="M2 25h32L18 9 2 25Z"></path></svg>
  )
}

export default ArrowIconTop
