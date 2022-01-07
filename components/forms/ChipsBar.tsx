import { useState } from 'react'


const ChipsBar = () => {

  const [chips, setChips] = useState<string[]>([])

  const chageHandler = (chips) => {
    setChips(chips)
  }

  return (
    <div>

  
      
    </div>
  )
}

export default ChipsBar
