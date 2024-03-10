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
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap flex-col sm:flex-row text-black  p-2">
            <div className="w-full sm:w-2/3 p-3 ">
                <Inputfield
                    label="Caption :"
                    placeholder="Caption must be within 300 characters."
                    className="mb-4"
                    {...register("caption", { required: true })}
                />

                <Inputfield
                    label="Location :"
                    placeholder="Enter location related to the post."
                    className="mb-4"
                    {...register("location", { required: true })}
                />

            </div>

            <div className="w-full mb-5 sm:mb-0 sm:w-1/3 p-3 flex flex-col gap-5">

                <Select
                    options={["public", "private"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <Select
                    options={["image", "video"]}
                    label="File"
                    onChange={onSelectChange}
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                {selectedOption === 'image' ?
                    (<Inputfield
                        label="Featured Image :"
                        type="file"
                        className="mb-4 py-20  "
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("featuredimage", { required: true })}
                    />)
                    :
                    (<Inputfield
                        label="Featured Video :"
                        type="file"
                        className="mb-4 py-20  "
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("featuredvideo", { required: true })}
                    />)}

               

                <Button type="submit">
                    Submit
                </Button>

            </div>
        </form>
    );
}
export default PostForm