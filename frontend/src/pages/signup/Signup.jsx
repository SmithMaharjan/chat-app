import React, { useEffect, useState } from 'react'
import { signUp } from '../../api/auth'

const Signup = () => {
    const [imgPreview, setImgPreview] = useState(null)
    const [formState, setFormState] = useState({
        fullName: "",
        username: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: "",
        profilePic: ""

    })
    const handleFormDate = (e) => {
        const { name, value, files } = e.target

        if (name === "profile") {
            const file = files[0]
            setFormState((prev) => ({
                ...prev, profilePic: file
            }))

            const render = new FileReader()
            render.onload = () => {
                setImgPreview(render.result)
            }
            if (file) {
                render.readAsDataURL(file)
            }


        }
        else {

            setFormState((prev) => ({
                ...prev,
                [name]: value
            }))

        }


    }
    useEffect(() => {
        console.log(formState, "form state data")

    }, [formState])

    const formSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("fullName", formState.fullName)
        form.append("username", formState.username)
        form.append("email", formState.email)
        form.append("password", formState.password)
        form.append("confirmPassword", formState.confirmPassword)
        form.append("profilePic", formState.profilePic)
        form.append("gender", formState.gender)
        form.append("profile", formState.profile)

        const response = await signUp(form)
        console.log(response, "the backend response")






    }


    return (
        <div className=' flex items-center justify-center min-w-[350px] mx-auto'>
            <div className="h-full w-full bg-[#1F3A5F] rounded-md    flex flex-col items-center md:gap-4 px-4 py-9">
                <h1 className=' text-white text-4xl'>SignUp</h1>
                <div>
                    <form encType='multipart/form-data' onSubmit={formSubmit} className='md:grid  md:grid-cols-2 gap-7 p-8 '>
                        <label className='  '>
                            <span className='block text-base text-white'>FullName</span>
                            <input value={formState.fullName} onChange={handleFormDate} name='fullName' className=' bg-white p-2 rounded-lg' type='text' placeholder='Enter Fullname' />
                        </label>
                        <label className=' '>
                            <span className='block text-white text-base'>Username</span>
                            <input name='username' value={formState.username} onChange={handleFormDate} className=' bg-white p-2 rounded-lg' type='text' placeholder='Enter Username' />
                        </label>
                        <label className=' '>
                            <span className='block text-white text-base'>Email</span>
                            <input name='email' value={formState.email} onChange={handleFormDate} className=' bg-white p-2 rounded-lg' type='text' placeholder='Enter Email' />
                        </label>
                        <label className='  '>
                            <span className='block text-white text-base'>Password</span>
                            <input name='password' value={formState.password} onChange={handleFormDate} className=' bg-white p-2 rounded-lg' type='password' placeholder='Enter Password' />
                        </label>
                        <label className='  '>
                            <span className='block text-white text-base'>Confirm Password</span>
                            <input name='confirmPassword' value={formState.confirmPassword} onChange={handleFormDate} className=' bg-white p-2 rounded-lg' type='password' placeholder='Confirm Password' />
                        </label>
                        <label className="">
                            <span className='block text-white text-base'>Gender</span>
                            <select className='block p-2 bg-white rounded-lg' name='gender' onChange={handleFormDate}>
                                <option value={""}>Choose Gender</option>
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                            </select>
                        </label>
                        <label className=" flex flex-col items-center justify-center md:col-span-2">
                            <span className='block text-white text-base'>Profile Picture</span>
                            <input name='profile' onChange={handleFormDate} type='file' className=' bg-[#4d648d] text-white p-2 rounded-lg' />

                        </label>
                        {imgPreview && (
                            <div className="mt-4">
                                <img
                                    src={imgPreview}
                                    alt="Profile Preview"
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                            </div>
                        )}
                        <button type='submit' className=' w-full bg-black text-white p-2'>submit</button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default Signup