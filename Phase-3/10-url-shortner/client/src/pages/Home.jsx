import React from 'react'
import api from '../api/axios.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [longUrl, setlongUrl] = useState('')
    const [shortUrl, setshortUrl] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [copy, setcopy] = useState(false)

    useEffect(() => {
        setError('')
        setshortUrl('')
    }, [longUrl])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setshortUrl('')
        try {
            const response = await api.post('/urls/create', { url: longUrl })
            setshortUrl(response.data.data.shortUrl)
            setLoading(false)
            console.log(response.data);
        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
            setLoading(false)
        }
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(shortUrl)
        setcopy(true)
        setTimeout(() => {
            setcopy(false)
        }, 2000);
    }


    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            <nav className='w-full max-w-4xl mx-auto flex items-center justify-between py-4 px-6 bg-white rounded-3xl shadow-md mb-8'>
                <h1 className='text-2xl font-bold text-blue-600'>URL Shortener</h1>
                <Link to='/profile' className='text-blue-600 hover:text-blue-800 font-medium'>Profile</Link>
                <Link to='/home' className='text-blue-600 hover:text-blue-800 font-medium'>Home</Link>
                <Link to='/my-urls' className='text-blue-600 hover:text-blue-800 font-medium'>My_Urls</Link>
                <Link to='/login' className='text-blue-600 hover:text-blue-800 font-medium'>Logout</Link>
            </nav>

            <div className='w-full max-w-xl bg-white rounded-3xl shadow-xl p-8'>

                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-blue-600'>URL Shortener</h1>
                    <p className='text-gray-500 mt-2'>Convert long URLs into short and shareable links</p>
                </div>

                {error && (
                    <div className='mb-4 bg-red-100 border border-red-300 text-red-700 rounded-xl p-3'>{error}</div>
                )}

                <div className='w-full flex flex-col gap-4'>
                    <input value={longUrl} onChange={e => setlongUrl(e.target.value)} type="text" placeholder='https://example.com/very-long-url' className='w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <button onClick={handleSubmit} disabled={loading}
                        className={`${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 cursor-pointer'} w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50`}>
                        {!loading ? 'Shorten URL' : 'Shortening...'} </button>
                </div>

                {shortUrl && (
                    <div className='pt-6'>
                        <h5 className='font-semibold text-gray-700 mb-3'> Your Short URL </h5>
                        <div className='flex'>
                            <input type="text" value={shortUrl} readOnly className='flex-1 border border-gray-300 bg-gray-50 p-3 rounded-l-xl outline-none' />
                            <button onClick={copyHandler} className={`px-5 rounded-r-xl text-white font-medium transition ${copy ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}> {copy ? 'Copied ✓' : 'Copy'} </button>
                        </div>

                        <a href={shortUrl} target='_blank' rel='noopener noreferrer' className='block mt-4 text-center text-blue-600 hover:text-blue-800 font-medium'>Open Link → </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home