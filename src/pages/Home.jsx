import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Postform } from '../components/index';


function Home() {
  const userStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate()

  useEffect(() => {
    if (!userStatus) {
      navigate('/login')
    }
  }, [userStatus])
 
  return (
    <div className='p-3'>
      <section className='bg-white w-full rounded-lg px-3 sm:px-5 py-4 shadow-md'>
        <Postform/>
      </section>

      <section>

      </section>

    </div>
  )
}

export default Home