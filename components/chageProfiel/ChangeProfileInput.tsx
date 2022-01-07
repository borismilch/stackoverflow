import React from 'react'

const ChangeProfileInput: React.FC<{name: string, onchange: any, isBig?: boolean, value: string, noLabel?: boolean}> = ({name, isBig, onchange, value, noLabel} ) => {
  return (
    <div className="mb-4">
   { !noLabel && <label className="block mb-2 text-sm font-bold text-text opacity-50" htmlFor={name}>
     {name[0].toUpperCase() + name.slice(1)}
    </label>}
   {
     isBig ? ( 

      <textarea
        className={"w-full px-3 py-3 bg-brown mb-3 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline " }
        id={name}
        rows={6}
        placeholder={name}
        name={name}
        onChange={onchange}
        value={value}
    />
      
     ) : ( 
     <input
        className={"w-full px-3 py-3 bg-brown mb-3 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline " }
        id={name}
        type="text"
        placeholder={name}
        name={name}
        onChange={onchange}
        value={value}
      />
     )
   }
  </div>
  )
}

export default ChangeProfileInput
