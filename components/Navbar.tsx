import { navLinksData } from '@/constants'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-[#494848] text-white'>
      <section className='max-w-[1240px] px-8 py-4 mx-auto flex justify-between flex-row'>
        
        <ul className='flex flex-row gap-8 items-center'>
          {navLinksData.map((item) =>(
            <li key={item.id}><a href="">{item.title}</a></li>
          ))}
        </ul>
       
      </section>
    </nav>
  )
}

export default Navbar