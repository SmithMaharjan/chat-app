import React from 'react'

const Input = () => {
    return (
        <form className='  my-3 relative'>
            <div className=' w-full flex gap-3'>
                <input className=' block p-2 w-full rounded-lg' type='text' placeholder='send a message' />
                <button className=' absolute bottom-0 inset-y-0 end-1 '>send</button>
            </div>

        </form>
    )
}

export default Input