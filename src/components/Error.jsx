import React from 'react'

const Error = ({children}) => {
    return (
        <div className='bg-red-600 text-white text-center pt-3 pb-3 rounded-md uppercase mb-3'>
            {children}
        </div>
    )
}

export default Error