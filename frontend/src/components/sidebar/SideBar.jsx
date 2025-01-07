import React from 'react'
import SeachInput from './SeachInput'
import Conversation from './Conversation'
import Logout from './Logout'
import Conversations from './Conversations'

const Sidebar = () => {
    return (
        <div className=' flex flex-col gap-6 border-r-2'>
            <SeachInput />
            <div>
                <Conversations />
            </div>
            <Logout />
        </div>
    )
}

export default Sidebar