import React from 'react'
import api from '../api/axios.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MyUrls = () => {
  const [urls, setUrls] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const openUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  useEffect(() => {
    fetchUrls()
  }, [])

  const fetchUrls = async (e) => {
    setLoading(true)
    setError('')
    try {
      const response = await api.get('/urls/')
      setUrls(response.data.data)
      setLoading(false)
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
      setLoading(false)
    }
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
      <div className='flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>My URLs</h2>
        {/* <button onClick={fetchUrls} className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 mb-4'>
          {loading ? 'Loading...' : 'Fetch My URLs'}
        </button> */}
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6 overflow-x-auto">
          {urls.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="p-3 text-left">Short URL</th>
                  <th className="p-3 text-left">Long URL</th>
                  <th className="p-3 text-left">Created At</th>
                  <th className="p-3 text-left">Clicks</th>
                  <th className="p-3 text-left">Last Updated</th>
                </tr>
              </thead>

              <tbody>
                {urls.map((url) => (
                  <tr key={url._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <button
                        onClick={() =>
                          openUrl(`http://localhost:3000/${url.shortUrl}`)
                        }
                        className="text-blue-600 hover:underline"
                      >
                        {url.shortUrl}
                      </button>
                    </td>

                    <td className="p-3 max-w-md">
                      <div className="overflow-x-auto whitespace-nowrap">
                        <button
                          onClick={() => openUrl(url.longUrl)}
                          className="text-blue-600 hover:underline"
                        >
                          {url.longUrl}
                        </button>
                      </div>
                    </td>

                    <td className="p-3 text-sm text-gray-500">
                      {new Date(url.createdAt).toLocaleString()}
                    </td>

                    <td className="p-3 text-sm text-gray-500">
                      {url.clicks}
                    </td>

                    <td className="p-3 text-sm text-gray-500">
                      {url.updatedAt
                        ? new Date(url.updatedAt).toLocaleString()
                        : "Never"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No URLs found</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default MyUrls