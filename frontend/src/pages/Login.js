import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {handleSuccess, handleError} from '../utils'
const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: '',
	})
	const navigate = useNavigate()

	const handleChange = (e) => {
		const {name, value} = e.target
		console.log(name, value)
		const copyLoginInfo = {...loginInfo}
		copyLoginInfo[name] = value
		setLoginInfo(copyLoginInfo)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const {email, password} = loginInfo
		if (!email || !password) return handleError('All input fields are required')

		try {
			const url = 'https://login-page-api-peach.vercel.app/auth/login'
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(loginInfo),
			})

			const result = await response.json()
			const {success, jwtToken, name, error, message} = result
			if (success) {
				handleSuccess(message)
				localStorage.setItem('token', jwtToken)
				localStorage.setItem('username', name)
				setTimeout(() => {
					navigate('/home')
				}, 500)
			} else if (error) {
				const details = error?.details[0].message
				handleError(details)
			} else if (!success) {
				handleError(message)
			}
		} catch (error) {
			handleError(error)
		}
	}

	return (
		<>
			<div className='w-screen h-screen flex justify-center items-center flex-col'>
				<div className='flex justify-center items-center shadow-lg shadow-black rounded-2xl overflow-hidden'>
					<div className='bg-[#004916] w-80 h-full text-white flex flex-col justify-center items-center'>
						<h1 className=' font-bold tracking-wide text-3xl'>Hello, there!</h1>
						<p className='mt-3 font-normal'>Start your journey with us.</p>
						<Link to='/signup'>
							<button className='mt-10 bg-transparent font-semibold outline-white outline outline-1 rounded-full py-2 px-10 transition-all duration-200 ease-linear hover:bg-white hover:text-[#004916]'>
								Sign up
							</button>
						</Link>
					</div>
					<div className=' px-28 py-24 pr-20 flex flex-col  items-center'>
						<h1 className='text-4xl font-bold '>Login</h1>
						<form
							className='mt-8 flex flex-col items-center gap-4'
							onSubmit={handleSubmit}>
							<div className='flex gap-1 justify-center  flex-col'>
								<label htmlFor='email'></label>
								<input
									onChange={handleChange}
									className='border-b-[2.5px] border-[#004916] outline-none pl-2 py-[2px] px-1 w-80 rounded-sm'
									autoFocus
									name='email'
									type='email'
									placeholder='Email'
									value={loginInfo.email}
								/>
							</div>
							<div className='flex gap-1 justify-center  flex-col'>
								<label htmlFor='password'></label>
								<input
									onChange={handleChange}
									className='border-b-[2.5px] border-[#004916] outline-none pl-2 py-[2px] px-1 w-80 rounded-sm'
									autoFocus
									name='password'
									type='password'
									placeholder='Password'
									value={loginInfo.password}
								/>
							</div>
							<button className='bg-[#004916] rounded-full py-3 px-10 mt-4 text-white transition-all duration-200 ease-linear hover:font-bold '>
								Login
							</button>
							<div>
								Don't have an account?{' '}
								<span className='font-semibold transition-all duration-200 ease-linear hover:underline'>
									<Link to='/signup'>Sign up</Link>
								</span>
							</div>
						</form>
					</div>
				</div>
				<ToastContainer />
			</div>
		</>
	)
}

export default Login
