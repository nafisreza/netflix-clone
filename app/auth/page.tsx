'use client';
import axios from "axios";
import { useCallback, useState } from "react";
import Input from "@/components/Input";
import { log } from "console";


const auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    const register = useCallback(async()=> {
        try {
            await axios.post('api/register', {
                email,
                name,
                password 
            }) 
        } catch (err){
            console.log(err) 
        }
    }, [email, name, password])


    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="images/logo.png" alt="Netflix" className="h-8" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-75 px-16 py-8 self-center mt-2 lg:w-2/5 lg:mg-w-md rounded-md w-full">
                        <h2 className="text-white text-3xl mb-8 font-semibold">
                            {
                                variant === 'login' ? 'Sign in' : "Register"
                            }
                        </h2>
                        <div className="flex flex-col gap-4">
                            {
                                variant === 'register' &&(
                                    <Input
                                    label="Username"
                                    onChange={(e) => {setName(e.target.value)}}
                                    id="name"
                                    type="text"
                                    value={name}
                                />
                                )
                            }
                            <Input
                                label="Email"
                                onChange={(e) => {setEmail(e.target.value)}}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(e) => {setPassword(e.target.value)}}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {
                                variant === 'login' ? 'Login' : 'Sign up'
                            }
                        </button>
                        <p className="text-neutral-500 mt-6">
                            {
                                variant === 'login' ? 'First time using Netflix?' : 'Already an user?'
                            }
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an Account' : 'Login'}
                                </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default auth;