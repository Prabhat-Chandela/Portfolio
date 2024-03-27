import React from 'react';
import { useSelector } from 'react-redux';
import bucketService from '../appwrite/bucketService'

function User() {

  const userProfileData = useSelector((state)=>state.auth.userProfileData);

  return (
    <div className='w-full p-5'>
      <div className='w-full bg-white rounded-lg shadow-md flex p-5'>

        <section className='flex sm:gap-9'>

        <div className='sm:w-[7vw] sm:h-[9vh]'><img className='w-full' src={bucketService.profileImagePreview(userProfileData.profileimage)} alt="profile-image" /></div>

        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-orange-500'>{userProfileData.email}</h3>
          <h4 className='font-semibold text-orange-500'>{userProfileData.username}</h4>
          <p className='text-orange-500/85 flex gap-2'><span className='font-bold underline underline-offset-4 '>About me :</span>{userProfileData.bio}</p>
        </div>
        

        </section>

        <section>

        </section>

      </div>

    </div>
  )
}

export default User