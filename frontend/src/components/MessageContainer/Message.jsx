import React from 'react'

const Message = () => {
    return (
        <>
            <div className=' flex justify-end items-center gap-3'>
                <div className='flex items-end flex-col mt-3'>
                    <div className=' bg-blue-600  p-2 rounded-xl'>
                        <p className='text-white'>some text</p>
                    </div>
                    <p className=' text-gray-400'>12:45</p>
                </div>
                <img src='' alt='img' />
            </div>
        </>
    )
}

export default Message