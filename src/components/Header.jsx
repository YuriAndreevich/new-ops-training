import React from 'react'
import menuSVG from '../img/menu.svg'

function Header() {
  return (
    <div className=' p-4 flex justify-between border-b bg-[#f2f2f2] '>
      <div>

      ops-training 

      </div>
    <img className=' w-6' src={menuSVG} alt='menu'/>
    </div>
  )
}

export default Header