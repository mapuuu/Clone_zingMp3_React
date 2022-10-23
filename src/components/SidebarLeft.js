import React from 'react';
import logo from "../assets/logo-light.svg";
import { sidebarMenu } from '../ultis/menu';
import { NavLink } from 'react-router-dom';

const notActiveStyle = 'py-2 px-[25px] font-bold text-[#32323D] text-[13px] flex gap-2 items-center';
const activeStyle = 'py-2 px-[25px] font-bold text-[#0F7070] text-[13px] flex gap-2 items-center';

const SidebarLeft = () => {
  return (
    <div className='flex flex-col'>
      <div className="w-[240px] h-[70px] py-[25px] px-[28px] flex justify-start items-center">
        <img src={logo} alt="logo" className='w-[120px] h-10'/>
      </div>

      <div className='flex flex-col'>
        {sidebarMenu.map(item => (
          <NavLink
          to={item.path}
          key={item.path}
          end={item.end}
          className={({isActive}) => isActive ? activeStyle : notActiveStyle}
        >
          {item.icons}
          <span>{item.text}</span>
        </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft;