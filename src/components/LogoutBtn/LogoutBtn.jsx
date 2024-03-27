import React from 'react'
import { Button } from '../index'
import authService from '../../appwrite/authService'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { FaChevronCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logOut()
      .then(() => {
        dispatch(logout());
        navigate('/login');
      })
  }

  return (
    <Button onClick={logoutHandler}><span className='hidden sm:block'>Logout</span><FaChevronCircleRight /></Button>
  )
}

export default LogoutBtn