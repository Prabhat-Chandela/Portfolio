import React , {useRef} from 'react'
import { FaVideo, FaImage } from "react-icons/fa";
import { Button, Inputfield} from '../index';

function Postform() {
    const videoInputRef = useRef(null);
    const imageInputRef = useRef(null);

    const handleVideoButtonClick = () => {
        videoInputRef.current.click();
      };
    
      const handleImageButtonClick = () => {
        imageInputRef.current.click();
      };

    return (
        <div className='flex flex-col gap-3 '>
            <div className='w-full'>
                <Inputfield label={"Caption"} />
            </div>

            <div className='flex items-center gap-3 sm:gap-7 w-full'>

                <div className='sm:w-[70%]'>
                    <Inputfield label={"Location"} />
                </div>

                <div className='flex items-center gap-2 sm:gap-5'>

                    <div>
                        <input type="file" ref={videoInputRef} style={{ display: 'none' }} />
                        <Button onClick={handleVideoButtonClick}><FaVideo /></Button>
                    </div>
                    <div>
                        <input type="file" ref={imageInputRef} style={{ display: 'none' }} />
                        <Button onClick={handleImageButtonClick}><FaImage /></Button>
                    </div>

                    <Button>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default Postform