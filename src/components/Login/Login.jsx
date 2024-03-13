import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as storeLogin } from '../../store/authSlice'
import authService from '../../appwrite/authService'
import { Inputfield, Button } from '../index'

function Login() {
    const { handleSubmit, register } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async (data) => {
        try {
            const userData = await authService.logIn(data);
            if (userData) {
                const userData = await authService.getUser();
                if (userData) {
                    dispatch(storeLogin({ userData }));
                    navigate('/');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex w-full border border-yellow-400 px-5 sm:px-9 pt-9'>

            <section className='hidden sm:block w-1/2 bg-orange-500 p-5 rounded-l-lg'>
                <div><img src="" alt="login page image" /></div>
            </section>

            <section className='w-full sm:w-1/2 bg-white flex flex-col sm:p-5 p-3 rounded-lg sm:rounded-l-none '>

                <div className='w-full flex flex-col gap-5'>

                    <div className='w-full flex items-center justify-center'>
                        Logo
                    </div>

                    <div>
                        <h2 className="text-center text-xl sm:text-2xl text-orange-400 font-bold leading-tight">Log-In to your account</h2>

                        <p className="mt-2 text-center text-base text-black/70">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>

                </div>

                <div className='flex flex-col gap-2'>

                    <form onSubmit={handleSubmit(login)} className='mt-8'>
                        <div className='space-y-5'>
                            <Inputfield
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be a valid address",
                                    }
                                })}
                            />

                            <Inputfield
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                {...register("password", {
                                    required: true,
                                })}
                            />

                            <Button type='submit'>LogIn</Button>

                        </div>

                    </form>

                </div>

            </section>

        </div>
    )
}

export default Login