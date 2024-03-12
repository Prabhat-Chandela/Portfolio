import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Inputfield, Select, Button } from '../index'
import bucketService from '../../appwrite/bucketService'
import databaseService from '../../appwrite/databaseService'
import { useSelector } from 'react-redux'

function PostForm({ post }) {

    const [selectedOption, setSelectedOption] = useState('image')

    const onSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const { register, handleSubmit } = useForm({
        defaultValues: {
            caption: post?.caption || '',
            location: post?.location || '',
            status: post?.status || 'public',
            filetype: post?.filetype || 'image'

        }
    })


    const userData = useSelector(state => state.auth.userData)


    const submit = async (data) => {

        if (data.featuredimage) {

            const file = await bucketService.uploadImageFile(data.featuredimage[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredfile = fileId;

                await databaseService.createPost({ ...data, userId: userData.$id })
            }

        } else {

            file = await bucketService.uploadVideoFile(data.featuredvideo[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredfile = fileId;

                await databaseService.createPost({ ...data, userId: userData.$id })
            }
        }
    }



    return (

        <div className='w-full sm:px-6 '>

            <form onSubmit={handleSubmit(submit)} className="flex flex-wrap flex-col sm:flex-row   bg-white backdrop-filter backdrop-blur-md bg-opacity-50 shadow-lg  rounded-b-lg p-2">

                <div className="w-full flex p-3 gap-7 ">

                    <Inputfield
                        label="Caption :"
                        placeholder="Enter a caption."
                        {...register("caption", { required: true })}
                    />

                    <Inputfield
                        label="Location :"
                        placeholder="Enter location related to the post."
                        {...register("location", { required: true })}
                    />

                </div>

                <div className="w-full  p-3 flex sm:gap-3">

                    <Select
                        options={["public", "private"]}
                        label="Status"
                        {...register("status", { required: true })}
                    />

                    <Select
                        options={["image", "video"]}
                        label="File"
                        onChange={onSelectChange}
                        {...register("file", { required: true })}
                    />

                    {selectedOption == 'image' &&
                        (<Inputfield
                            label="Featured Image :"
                            type="file"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("featuredimage", { required: true })}
                        />)}
                       
                       {selectedOption == 'video' &&
                        (<Inputfield
                            label="Featured Video :"
                            type="file"
                            accept="image/png, image/jpg, image/jpeg, image/gif"
                            {...register("featuredvideo", { required: true })}
                        />)}



                    <Button type="submit">
                        Post
                    </Button>

                </div>
            </form>

        </div>
    );
}
export default PostForm