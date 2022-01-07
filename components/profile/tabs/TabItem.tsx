import React, { Dispatch, SetStateAction } from 'react'

const TabItem: React.FC<{title: string, selected: string, cb: Dispatch<SetStateAction<string>>}> = ({title, selected, cb}) => {
  return (
    <button 
        onClick={cb.bind(null, title)}
        className={'tabs_button px-4 py-[5px] text-sm ' + (title === selected && 'bg-primary hover:bg-opacity-100  text-black hover:bg-primary' )}
      > 

        {title}

    </button>
  )
}

export default TabItem
