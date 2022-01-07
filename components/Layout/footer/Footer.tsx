
import React from 'react'
import StackIcon from '../../../assets/icons/StackIcon'
import { footerData } from '../../../utils/footer'

import FooterCell from './FooterCell'

const Footer = () => {

  return (
    <footer className='py-6 bg-[#232629] w-full '>

      <div className='page_container flex gap-8'> 

      <div>
        <StackIcon />
      </div>

        <div className='grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>

        {
          footerData.map(foot => (
              <FooterCell key={foot.title} col={foot} />
          ))
        }

        </div>

      </div>

    </footer>
  )
}

export default Footer
