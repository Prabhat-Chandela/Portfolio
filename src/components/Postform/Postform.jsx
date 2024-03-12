import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Inputfield, Select, Button, Fileinput } from '../index'
import bucketService from '../../appwrite/bucketService'
import databaseService from '../../appwrite/databaseService'
import { useSelector } from 'react-redux'
import { FaVideo ,  FaImage } from "react-icons/fa6";

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

        <div className='w-full sm:p-6 '>

            <form onSubmit={handleSubmit(submit)} className="flex flex-wrap flex-col bg-white rounded-lg p-2">

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

                <div className="w-full justify-center items-center p-3 flex  sm:gap-9">

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

                    <Fileinput><FaImage /></Fileinput>
                    <Fileinput><FaVideo /></Fileinput>



                    <Button type="submit">
                        Post
                    </Button>

                </div>
            </form>

        </div>
    );
}
export default PostForm