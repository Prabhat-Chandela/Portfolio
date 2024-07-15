import React from "react";
import { ScanFace,Signal } from "lucide-react";

function Header() {


  return (
    <div className='w-full px-2 lg:p-3 fixed'>
      <nav className='w-full h-[70px] bg-black  shadow-lg shadow-white/10 px-1 lg:px-3 lg:rounded-lg flex items-center justify-between '>

        <button className='w-fit text-black bg-white p-2 rounded-lg flex items-center justify-center'><ScanFace /></button>
        <div className="w-24 lg:w-[130px] overflow-hidden "><img className="w-full" src="/Logo.webp" alt="site-logo" /></div>
        <button className='w-fit text-black bg-white p-2 rounded-lg flex items-center justify-center'><Signal /></button>

      </nav>
    </div>
  )
}

export default Header;