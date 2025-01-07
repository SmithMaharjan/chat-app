import React, { useContext, useEffect, useState } from 'react'
import { login } from '../../api/auth'
import { useUser } from '../../context/User'

const Login = () => {
    const { setToken } = useUser()
    const [formState, setFormState] = useState({
        usernameOrEmail: "",
        password: "",


    })
    const handleFormDate = (e) => {
        const { name, value } = e.target

        setFormState((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(formState, "form state data")

    }, [formState])

    const formSubmit = async (e) => {
        e.preventDefault()


        const response = await login(formState)
        setToken(response.data.response)
        console.log(response.data.response, "the backend response")
    }


    return (
        <div className=' flex items-center justify-center min-w-[350px] mx-auto'>
            <div className="h-full w-full bg-[#1F3A5F] rounded-md    flex flex-col items-center md:gap-4 px-4 py-9">
                <h1 className=' text-white text-4xl'>Login</h1>
                <div>
                    <form encType='multipart/form-data' onSubmit={formSubmit} className='md:grid  md:grid-cols-2 gap-7 p-8 '>

                        <label className=' '>
                            <span className='block text-white text-base'>Username</span>
                            <input name='usernameOrEmail' value={formState.usernameOrEmail} onChange={handleFormDate} className=' bg-white p-2 rounded-lg' type='text' placeholder='Enter Username' />
                        </label>

                        <label className='  '>
                            <span className='block text-white text-base'>Password</span>
                            <input name='password' value={formState.password} onChange={handleFormDate} className=' bg-white p-2 rounded-lg' type='password' placeholder='Enter Password' />
                        </label>


                        <button type='submit' className=' w-full bg-black text-white p-2'>submit</button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default Login