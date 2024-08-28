import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoaderPage from './LoaderPage'

const LocationInput = ({ pincode, setPincode, setValidPin, setApiData }) => {

    const handleChange = (e) => {
        setPincode(e.target.value)
    }
    return (
        <div className='p-5 select-none'>
            <p className='font-bold mb-5 text-3xl'>Enter Pincode</p>
            <input type='text' placeholder='Pincode' className='border rounded-lg p-2 border-slate-500 w-full'
                onChange={handleChange}
            />
            <Link to='/PostalCode_varification/Details'><button className='font-bold bg-black text-white block mt-5 w-28 p-2 border rounded-lg'
                onClick={() => {
                    if (pincode.length !== 6) {
                        alert('Please Enter Valid Pincode of 6 Digits')
                    }
                    else if (pincode.trim() === '') {
                        setValidPin('');
                    }
                    else {
                        setValidPin(pincode);
                    }
                }}
            >Lookup</button></Link>
            
        </div>
    )
}

export default LocationInput
