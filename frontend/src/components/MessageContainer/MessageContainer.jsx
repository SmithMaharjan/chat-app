import React, { useState } from 'react'
import Header from './Header'
import Messages from './Messages'
import Input from './Input'
import DefaultContent from './DefaultContent'

const MessageContainer = () => {
    const [noChatSelected, setNoChatSelected] = useState(true)

    return (
        <div className='relative min-w-[500px] flex flex-col p-4'>
            {noChatSelected ? <DefaultContent /> : <>
                <Header />
                <Messages />
                <Input /></>}


        </div>
    )
}

export default MessageContainer