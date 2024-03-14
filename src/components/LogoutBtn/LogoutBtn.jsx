import React from 'react'
import { Button } from '../index'
import authService from '../../appwrite/authService'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { FaChevronCircleRight } from "react-icons/fa";

function LogoutBtn() {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logOut()
      .then(() => {
        dispatch(logout());
      })
  }

  return (
    <Button onClick={logoutHandler}><span className='hidden sm:block'>Logout</span><FaChevronCircleRight /></Button>
  )
}

export default LogoutBtn