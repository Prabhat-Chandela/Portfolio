import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as storeLogin } from '../../store/authSlice'
import authService from '../../appwrite/authService'
import Inputfield from '../Inputfield/Inputfield'

function Login() {
    const {handleSubmit , register} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async (data)=>{
        try {
            const userData = await authService.logIn(data);
            if(userData){
                const userData = await authService.getUser();
                if(userData){
                    dispatch(storeLogin({userData}));
                    navigate('/');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <section>
                <div><img src="" alt="login page image" /></div>
            </section>

            <section>

                <div>

                    <div>
                        Logo
                    </div>

                    <h2 className="text-center text-xl sm:text-2xl text-orange-400 font-bold leading-tight">Log-In to your account</h2>

                    <p className="mt-2 text-center text-base text-amber-100/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>

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