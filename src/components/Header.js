import React from 'react';
import icons from '../ultis/icons';
import { Search } from './';

const { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} = icons;

const Header = () => {
  return (
    <div className='flex justify-between w-full items-center'>
        <div className='flex gap-5 w-full items-center'>
            <div className='flex gap-5 text-gray-400'>
                <span><HiOutlineArrowNarrowLeft size={24}/></span>
                <span><HiOutlineArrowNarrowRight size={24}/></span>
            </div>
            <div className='w-1/2'>
                <Search />
            </div>
        </div>

        <div>
            login
        </div>
    </div>
  )
}

export default Header;