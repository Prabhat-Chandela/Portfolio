import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Inputfield , Button} from '../index';
import { createProfile as storeCreateProfile , updateProfile as storeUpdateProfile} from '../../store/authSlice'
import databaseService from '../../appwrite/databaseService';
import bucketService from '../../appwrite/bucketService';

function Profileform({ profile }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signedUpUserData = useSelector((state) => state.auth.signedUpUserData);
    console.log(signedUpUserData)

    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: profile?.username || '',
            bio: profile?.bio || ''
        }
    })

    const createProfile = async (data) => {
        if (profile) {
            const profileImageFile = await bucketService.uploadProfileImage(data.profileimage[0]);

            if(profileImageFile){
                await bucketService.deleteProfileImage(profile.profileimage);
            }

            const updatedUserProfileData = await databaseService.updateUserProfile({...data , name:profile.name, email:profile.email, userId:profile.userId});

            if(updatedUserProfileData){
                dispatch(storeUpdateProfile({updatedUserProfileData}));
                navigate('/user');
            }


        } else {
            const profileImageFile = await bucketService.uploadProfileImage(data.profileimage[0]);

            if (profileImageFile) {
                const profileimageId = profileImageFile.$id
                data.profileimage = profileimageId;
                const userProfileData = await databaseService.createUserProfile({ ...data, name: signedUpUserData.name, email: signedUpUserData.email, userId: signedUpUserData.$id });

                if (userProfileData) {
                    dispatch(storeCreateProfile({ userProfileData }));
                    navigate('/');
                }
            }
        }
    }

    return (

        <div className='flex flex-col gap-2'>

            <form onSubmit={handleSubmit(createProfile)}>

                <div className='space-y-5'>

                    <Inputfield
                        label="ProfileImage"
                        placeholder="Choose a profile image"
                        type="file"
                        accept="image/*"
                        className={"file:bg-transparent file:text-orange-500 file:border-none file:text-sm file:cursor-pointer"}
                        {...register("profileimage", {
                            required: true
                        })}
                    />

                    <Inputfield
                        label="UserName"
                        placeholder="Enter your user name"
                        {...register("username", {
                            required: true
                        })}
                    />

                    <Inputfield
                        label="Bio"
                        placeholder="Tell us about yourself"
                        {...register("bio")}
                    />


                    <Button type='submit' >Create</Button>

                </div>
            </form>
        </div>

    )
}

export default Profileform