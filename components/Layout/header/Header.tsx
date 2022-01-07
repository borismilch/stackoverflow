import React from 'react';

import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline';
import Headerctions from './Headerctions';

import { XIcon } from '@heroicons/react/outline';

import { useRouter } from 'next/router';

const Header: React.FC<{isBack?: boolean }> = ({isBack}) => {


  const router = useRouter()

  const pushRouter = () => {
    router.push('/')
  }

  const backRouter = () => {
    router.back()
  }

  return (
    <header className='py-1  flex-col sticky top-0 z-50 bg-gray-light shadow-lg '>

      <div className='absolute w-full bg-primary h-[2px] top-0 z-10' />

      <div className='page_container flex items-center gap-4'>

        <div className='flex items-center '>

          { isBack && 
            <XIcon
              className='text-text hover:text-white transition-all duration-20- cursor-pointer h-9 w-9 mr-4 ' 
              onClick={backRouter}
            />
          }

          <Image 
            onClick={pushRouter.bind(null)}
            src={'https://logodix.com/logo/379543.png'}
            width={146}
            height={28}
            className='cursor-pointer hidden md:flex'
          />

          <p className='text-text hidden md:flex ml-8 items-center hover:text-white smoose cursor-pointer text-xs font-semibold'>

            Products

          </p>

        </div>

        <div className='flex  items-center gap-2 flex-grow bg-brown px-2 border-gray-500 border  rounded-md'>

          <span>d</span>

          <SearchIcon className='h-6 text-gray-400' />

          <input
            type="text"
            className='text-white h-9  test-sm bg-transparent focus:outline-none smooth outline-none focus:ring-0 border-transparent focus:border-gray-100 placeholder-slate-400'
            placeholder='Search...'
           />

        </div>

        <div className=''>

        <Headerctions />

        </div>

        

      </div>

     
      
    </header>
  );
};

export default Header;
