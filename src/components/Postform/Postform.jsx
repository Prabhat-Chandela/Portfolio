import React, { useRef } from 'react'
import { FaVideo, FaImage } from "react-icons/fa";
import { Button, Inputfield } from '../index';

function Postform() {
    const videoInputRef = useRef(null);
    const imageInputRef = useRef(null);

    const handleVideoButtonClick = () => {
        videoInputRef.current.click();
    };

    const handleImageButtonClick = () => {
        imageInputRef.current.click();
        console.log(imageInputRef.current.value)
    };


    return (
        <div className='flex flex-col gap-3 '>
            <div className='w-full'>
                <Inputfield label={"Caption"} />
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-7 w-full'>

                <div className='w-full sm:w-[70%]'>
                    <Inputfield label={"Location"} />
                </div>

                <div className='flex items-center justify-start w-full gap-2 sm:gap-5'>

                    <div className='p-2 sm:p-3 rounded-lg bg-orange-500'>
                        <input type="file" ref={imageInputRef} style={{ display: 'none' }} />
                        <Button onClick={handleImageButtonClick}><FaImage /></Button>
                    </div>

                    <div className='p-2 sm:p-3 rounded-lg bg-orange-500'>
                        <input type="file" ref={videoInputRef} style={{ display: 'none' }} />
                        <Button onClick={handleVideoButtonClick}><FaVideo /></Button>
                    </div>

                    <Button>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default Postform