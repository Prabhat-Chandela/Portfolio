import React, { useRef, useState } from 'react'
import { FaVideo, FaImage } from "react-icons/fa";
import { Button, Inputfield, Select } from '../index';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import databaseService from '../../appwrite/databaseService';
import bucketService from '../../appwrite/bucketService';

function Postform() {
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const loggedInUserData = useSelector((state) => state.auth.loggedInUserData);

    const videoInputRef = useRef(null);
    const imageInputRef = useRef(null);
    const [imageInputValue, setImageInputValue] = useState(null);
    const [videoInputValue, setVideoInputValue] = useState(null);

    const handleVideoButtonClick = () => {
        videoInputRef.current.click();
    };

    const handleImageButtonClick = () => {
        imageInputRef.current.click();
    };

    const createPost = async (data) => {
        let postimage ;
        let postvideo ;

        if (imageInputValue) {
            const postImageFile = await bucketService.uploadImageFile(imageInputValue);
            if (postImageFile) {
                const postImageId = postImageFile.$id;
                postimage = postImageId;
            }
        }

        if (videoInputValue) {
            const postVideoFile = await bucketService.uploadVideoFile(videoInputValue);
            if (postVideoFile) {
                const postVideoId = postVideoFile.$id;
                postvideo = postVideoId;
            }
        }

        if (!postimage && !postvideo) {
            console.log('Please select either a postImage or a postVideo. Both cannot be empty.');
            return;
        }

            const dbpost = await databaseService.createPost({ ...data, postImage: postimage ? postimage : null, postVideo: postvideo ? postvideo : null, userId: loggedInUserData.$id })
            console.log(dbpost);
            if (dbpost) {
                console.log(dbpost);
            }   
    }

    return (
        <form onSubmit={handleSubmit(createPost)}>
            <div className='flex flex-col gap-3 '>
                <div className='w-full'>
                    <Inputfield label={"Caption"}
                        {...register('caption', { required: true })} />
                </div>

                <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-7 w-full'>

                    <div className='w-full sm:w-[70%]'>
                        <Inputfield label={"Location"}
                            {...register('location', { required: true })} />
                    </div>

                    <div className='flex flex-wrap items-center justify-start w-full gap-2 sm:gap-3'>

                        <div className='p-2 sm:p-3 rounded-lg bg-orange-500'>
                            <input type="file" ref={imageInputRef} style={{ display: 'none' }}
                                onChange={(e) => { setImageInputValue(e.target.files[0]) }} />
                            <Button onClick={handleImageButtonClick}><FaImage /></Button>
                        </div>

                        <div className='p-2 sm:p-3 rounded-lg bg-orange-500'>
                            <input type="file" ref={videoInputRef} style={{ display: 'none' }}
                                onChange={(e) => { setVideoInputValue(e.target.files[0]) }} />
                            <Button onClick={handleVideoButtonClick}><FaVideo /></Button>
                        </div>

                        <Select label={'status'}
                            options={['public', 'private']}
                            {...register('status', { required: true })} />

                        <Button type='submit'>Post</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Postform