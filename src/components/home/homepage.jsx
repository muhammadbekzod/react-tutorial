import React from 'react'
import Kurslar from './kurslar/kurslar'
import './homeStyle.css'
const Homepage = () => {
    return (
        <div>
            <p className='container'>

                Coffee
            </p>
            <Kurslar />
        </div>
    )
}

export default Homepage