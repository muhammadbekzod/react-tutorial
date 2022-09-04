import React from 'react'
import './kurslarStyle.css'
const Kurslar = () => {
    return (
        <div className='wrapper'>
            <img src={require('./logo.png')} alt="logo" />
            <div className='menuWrapper'>
                <p>kurslar</p>
                <p>ochiq darslar</p>
                <p>Biz bilan bog'laning</p>
            </div>
        </div>
    )
}

export default Kurslar