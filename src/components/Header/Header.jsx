import React from 'react'
import {  LogoutBtn } from '../index'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

    const authStatus = useSelector((state) => state.auth.status)

    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true
        },
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
        },
        {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
        },
        {
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus,
        },
        {
          name: "Your Posts",
          slug: "/your-posts",
          active: authStatus,
        },
        {
          name: "Add Post",
          slug: "/add-post",
          active: authStatus,
        },
      ]

  return (
    <header className='bg-amber-100 text-black w-full mx-auto py-7'>
   
      <nav className='flex justify-between w-full items-center'>

        <div>

          <div>
            {/* <Logo  width={"w-3"} className={'px-20 sm:px-24'} /> */}
            logo
          </div>

        </div>

        <ul className='flex gap-7 px-3 text-sm font-bold items-center justify-center '>
          {navItems.map((item) => item.active ? (

            <li className='hidden sm:block' key={item.name}>

              <NavLink
                to={item.slug}
                className={({ isActive }) => `${isActive ? 'bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent underline underline-offset-4 ' : 'bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent'}`}

              >{item.name}</NavLink>
            </li>

          ) : null)}

          {authStatus && (<li><LogoutBtn /></li>)}

        </ul>

      </nav>
   
  </header>
  )
}

export default Header