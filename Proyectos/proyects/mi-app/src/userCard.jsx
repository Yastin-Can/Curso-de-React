import './App.css'
import { useState } from 'react'

export function UserCard({ children, img, prof, ubi, descript }) {
    return (
        <div className='section-container'>
            <img src={`https://www.freecodecamp.org/static/${img}`} alt="" className='section-img'/>
            <div className='section-container-info'>
                <p className="section-p name">{children} in {ubi}</p>
                <p className="section-p profec">{prof}</p>
                <p className="section-p-descrip">{descript}</p>
            </div>
        </div>
    );
}