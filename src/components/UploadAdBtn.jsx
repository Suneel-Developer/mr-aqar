import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";

const UploadAdBtn = () => {
    return (
        <Link to="/create-ad" className='w-12 h-12 rounded-full z-40 bg-[#3a7bb7] text-white flex items-center justify-center fixed bottom-6 left-5 nd:left-10'>
            <FiPlus size={25} />
        </Link>
    )
}

export default UploadAdBtn