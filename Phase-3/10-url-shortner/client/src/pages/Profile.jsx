import React from 'react'
import api from '../api/axios.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchProfile = async () => {
        setLoading(true)
        setError('')
        try {
            const response = await api.get('/users/')
            setData(response.data.data)
            setLoading(false)
            // console.log(response.data);
        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            <nav className='w-full max-w-4xl mx-auto flex items-center justify-between py-4 px-6 bg-white rounded-3xl shadow-md mb-8'>
                <h1 className='text-2xl font-bold text-blue-600'>URL Shortener</h1>
                <Link to='/profile' className='text-blue-600 hover:text-blue-800 font-medium'>Profile</Link>
                <Link to='/home' className='text-blue-600 hover:text-blue-800 font-medium'>Home</Link>
                <Link to='/my-urls' className='text-blue-600 hover:text-blue-800 font-medium'>My_Urls</Link>
                <Link to='/login' className='text-blue-600 hover:text-blue-800 font-medium'>Logout</Link>
            </nav>

            {data && <div className='w-full max-w-xl bg-white rounded-3xl shadow-xl p-8'>
                <label className='block text-gray-700 font-semibold mb-2'>Username</label>
                <input type="text" value={data.fullname} readOnly className='w-full border border-gray-300 bg-gray-50 p-3 rounded-xl outline-none mb-6' />

                <label className='block text-gray-700 font-semibold mb-2'>Email</label>
                <input type="text" value={data.email} readOnly className='w-full border border-gray-300 bg-gray-50 p-3 rounded-xl outline-none mb-6' />

                <label className='block text-gray-700 font-semibold mb-2'>Account</label>
                <input type="text" value={data.status} readOnly className='w-full border border-gray-300 bg-gray-50 p-3 rounded-xl outline-none mb-6' />
            </div>}
        </div>
    )
}

export default Profile