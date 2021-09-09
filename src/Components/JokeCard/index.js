import React from 'react'
import './index.css'

export default function index({joke}) {
    return (
        <>
            <img src="./Shape.svg" id="shape-1" />
            <div className="result">
                {joke}
            </div>
            <img src="./Shape-1.svg" id="shape-2" />
        </>
    )
}
