import React from 'react'
import { LogoutBtn } from '../index'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaHome, FaUser, FaBookmark } from "react-icons/fa";
import { BiLogIn, BiLogInCircle } from "react-icons/bi";
import { RiUserSettingsFill } from "react-icons/ri";

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  console.log(authStatus)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
      span: <span><FaHome /></span>
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      span: <span><BiLogIn /></span>
    },
    {
      name: "Singup",
      slug: "/signup",
      active: !authStatus,
      span: <span><BiLogInCircle /></span>
    },
    {
      name: "Profile",
      slug: "/user",
      active: authStatus,
      span: <span><FaUser /></span>
    },
    {
      name: "Saved",
      slug: "/saved",
      active: authStatus,
      span: <span><FaBookmark /></span>
    },
    {
      name: "Settings",
      slug: "/settings",
      active: authStatus,
      span: <span><RiUserSettingsFill /></span>
    },
  ]

  return (

    <>
      <header className='hidden sm:block bg-transparent w-full h-full py-7'>

        <nav className='flex flex-col items-start justify-center px-5 py-3 gap-y-16 w-full '>

          <ul className='flex flex-col gap-10 px-3 text-sm font-semibold items-center justify-center '>
            {navItems.map((item) => item.active ? (

              <li className='w-full' key={item.name}>

                <NavLink
                  to={item.slug}
                  className={({ isActive }) => ` tracking-wide rounded-lg px-3 py-1 flex items-center justify-center gap-2 duration-200 ${isActive ? 'text-orange-600 bg-black backdrop-filter backdrop-blur-md bg-opacity-10' : 'text-black hover:text-orange-500'}`}

                >{item.span} {item.name}</NavLink>
              </li>

            ) : null)}

            {authStatus && (<li><LogoutBtn /></li>)}

          </ul>

        </nav>

      </header>

      <header className='sm:hidden bg-white fixed bottom-0 left-0 right-0'>

        <nav className='flex flex-col items-start justify-center px-5 py-3 gap-y-16 w-full '>

          <ul className='flex w-full px-3 text-sm font-semibold items-center justify-between '>
            {navItems.map((item) => item.active ? (

              <li className='w-full' key={item.name}>

                <NavLink
                  to={item.slug}
                  className={({ isActive }) => ` tracking-wide rounded-lg p-1 flex items-center justify-center  duration-200 ${isActive ? 'text-orange-600 bg-black backdrop-filter backdrop-blur-md bg-opacity-10' : 'text-black hover:text-orange-500'}`}

                >{item.span}</NavLink>
              </li>

            ) : null)}

            {authStatus && (<li><LogoutBtn /></li>)}

          </ul>

        </nav>
      </header>
    </>
  )
}

export default Header