import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

const Home = () => {
    return (
        <div className=' flex md:h-[550px] sm:h-[450px]'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home