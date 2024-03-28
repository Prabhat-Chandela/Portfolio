import React from 'react';
import { useSelector } from 'react-redux';
import bucketService from '../appwrite/bucketService'
import { Button } from '../components/index';
import { IoIosMail } from "react-icons/io";
import { FaUserAstronaut, FaInfoCircle, FaEdit } from "react-icons/fa";

function User() {

  const userProfileData = useSelector((state) => state.auth.userProfileData);
  const profileimage = userProfileData && userProfileData.profileimage
    ? bucketService.profileImagePreview(userProfileData.profileimage)
    : null;

  return (
    <div className='w-full py-3 sm:p-5 flex flex-col gap-9'>

      <div className='flex justify-between w-full bg-white sm:rounded-lg shadow-md p-3 sm:p-5'>

        <section className='flex'>

          <div className='w-[32vw] h-[20vh] sm:w-[15vw] lg:h-[25vh] rounded-lg overflow-hidden'>
            <img className='w-full h-full object-cover' src={profileimage} alt="profile-image" />
          </div>

        </section>

        <section className='flex  w-[60%]  items-center justify-between sm:px-5'>

            <div className='flex flex-col items-center gap-9 text-xs text-orange-500 sm:text-lg font-semibold'><span>0</span>Posts</div>
            <div className='flex flex-col gap-9 items-center text-xs text-orange-500  sm:text-lg font-semibold'><span>0</span>Followers</div>
            <div className='flex flex-col gap-9 items-center text-xs text-orange-500  sm:text-lg font-semibold'><span>0</span>Following</div>
         
        </section>

      </div>

      <div className='w-full bg-white sm:rounded-lg shadow-md flex flex-col gap-7 p-3 sm:p-5'>

        <div className='flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center sm:justify-between'>

          <div className='flex gap-7'>
            <h3 className='flex items-center justify-center gap-2 font-semibold text-orange-500 text-sm sm:text-lg '><span><IoIosMail /></span> {userProfileData && userProfileData?.email}</h3>
            <h4 className='flex items-center justify-center gap-2 font-semibold text-orange-500 text-sm sm:text-lg'><span><FaUserAstronaut /></span> {userProfileData && userProfileData?.username}</h4>
          </div>

          <div >
            <Button><span><FaEdit /></span> Edit Profile</Button>
          </div>

        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='flex items-center justify-center gap-2 font-semibold text-orange-500 text-sm sm:text-lg w-fit '><span><FaInfoCircle /></span> User Bio : </h3>
          <h5 className='text-black flex gap-2 text-sm sm:text-md'><span>Name :</span>{userProfileData && userProfileData?.name}</h5>
          <p className='text-black flex gap-2 text-sm sm:text-md'>{userProfileData && userProfileData?.bio}</p>
        </div>

      </div>

    </div>
  )
}

export default User