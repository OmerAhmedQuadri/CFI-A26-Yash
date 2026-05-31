import { useState } from 'react'
import api from '../api/axios.js'

const Login = () => {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')
    const [step, setstep] = useState('form')
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        setloading(true)
        seterror('')
        setsuccess('')
        try {
            const response = await api.post('/auth/login', formData)
            setsuccess(response.data.message)
            setloading(false)
            console.log(response.data.message);

        } catch (error) {
            console.log(error);
            seterror(error.response.data.message)
            setloading(false)
        }
    }
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
            <div className='w-full max-w-md bg-white rounded-3xl shadow-xl p-8'>
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Sign in to your account
                    </p>
                </div>
                {error && <div className='mb-4 rounded-lg bg-red-100 border border-red-300 text-red-700 p-3'>
                    {error}
                </div>}

                <div>
                    <form onChange={onChangeHandler} className='space-y-3'>
                        <input type="email" name='email' placeholder='Email' className='w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition' />
                        <input type="password" name='password' placeholder='Password' className='w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition' />
                        <button type="button" className="text-sm text-blue-600 hover:text-blue-800">Forgot Password?</button>
                        <button type='submit' onClick={loginHandler} className='w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50'>Login</button>
                        <p className="text-center text-gray-500 text-sm">
                            Don't have an account?{' '}
                            <span className="text-blue-600 cursor-pointer hover:text-blue-800 font-medium">
                                Register
                            </span>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login