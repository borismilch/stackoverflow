import React from 'react'

import TabItem from './tabs/TabItem'
import { useState } from 'react'

const Tabs = () => {

  const [selected, setSelected] = useState<string>('Profile')

  return (
    <div className='flex gap-3 items-center py-5'>

      <TabItem title='Profile' selected={selected} cb={setSelected} />

      <TabItem title='Activity' selected={selected} cb={setSelected} />

      <TabItem title='Settings' selected={selected} cb={setSelected} />
      
    </div>
  )
}

export default Tabs
