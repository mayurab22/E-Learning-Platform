import React from 'react'
import courseimg from '../../images/contact.png'


export default function header() {
    return (
        <div><div className=''>
            <img
                src={courseimg}
                className="inset-0 object-cover w-full h-full"
                alt=""
            />
        </div> </div>
    )
}
