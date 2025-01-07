import React from 'react'
import { FaSearch } from "react-icons/fa";

const SeachInput = () => {
    return (
        <>
            <form className=' flex gap-8 items-center mx-3'>
                <input className=' p-2 rounded-lg' type='text' placeholder='type to search' />
                <button className=' text-2xl text-white'><FaSearch /></button>
            </form>

        </>
    )
}

export default SeachInput