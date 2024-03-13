import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

function Home() {
  const userStatus = useSelector((state)=>state.auth.status);
  const navigate = useNavigate()

  useEffect(()=>{
    if(!userStatus){
      navigate('/login')
    }
  },[userStatus])

  return (
    <div className='p-3 grid gird-col-12 grid-row-12'>

    </div>
  )
}

export default Home