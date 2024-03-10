import React from 'react';
import bucketService from '../../appwrite/bucketService'

function Postcard({$id , caption , location , featuredfile}) {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full flex flex-col  bg-orange-400 rounded-lg overflow-hidden p-2'>
      <div className='w-full h-[25vh] overflow-hidden rounded-lg '>
        <img className='object-cover w-full h-full ' src={bucketService.getFile(featuredfile)} alt='postfile' />
      </div>
      <div className='w-full flex justify-between items-center px-5 py-3'>
        <h2 className='text-center font-semibold flex  text-amber-100 text-md  rounded-md'>{caption}</h2>
        <div className='bg-black text-orange-400 px-2 py-1 rounded-md'></div>
      </div>
    </div>
  </Link>
  )
}

export default Postcard