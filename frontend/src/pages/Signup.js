import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {handleSuccess, handleError} from '../utils'

const Signup = () => {
	const [signupInfo, setSignupInfo] = useState({
		name: '',
		email: '',
		password: '',
	})
	const navigate = useNavigate()
	const handleChange = (e) => {
		const {name, value} = e.target
		console.log(name, value)
		const copySignupInfo = {...signupInfo}
		copySignupInfo[name] = value
		setSignupInfo(copySignupInfo)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const {name, email, password} = signupInfo
		if (!name || !email || !password)
			return handleError('All values are required')

		try {
			const url = 'https://login-page-api-peach.vercel.app/auth/signup'
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(signupInfo),
			})
			const result = await response.json()
			console.log(result)

			const {success, error, message} = result
			if (success) {
				handleSuccess(message)
				setTimeout(() => {
					navigate('/login')
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
					<div className=' px-28 py-24 pr-20 flex flex-col  items-center'>
						<h1 className='text-4xl font-bold '>Sign Up</h1>
						<form
							className='mt-8 flex flex-col items-center gap-4'
							onSubmit={handleSubmit}>
							<div className='flex gap-1 justify-center flex-col'>
								<label htmlFor='name'></label>
								<input
									onChange={handleChange}
									className='border-b-[2.5px] border-[#004916] outline-none pl-2 py-[2px] px-1 w-80 rounded-sm'
									autoFocus
									name='name'
									type='name'
									value={signupInfo.name}
									placeholder='Name'
								/>
							</div>
							<div className='flex gap-1 justify-center  flex-col'>
								<label htmlFor='email'></label>
								<input
									onChange={handleChange}
									className='border-b-[2.5px] border-[#004916] outline-none pl-2 py-[2px] px-1 w-80 rounded-sm'
									autoFocus
									name='email'
									type='email'
									placeholder='Email'
									value={signupInfo.email}
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
									value={signupInfo.password}
								/>
							</div>
							<button className='bg-[#004916] rounded-full py-3 px-10 mt-4 text-white transition-all duration-200 ease-linear hover:font-bold '>
								Sign Up
							</button>
							<div>
								Already have an account?{' '}
								<span className='font-semibold transition-all duration-200 ease-linear hover:underline'>
									<Link to='/login'>Login</Link>
								</span>
							</div>
						</form>
					</div>

					<div className='bg-[#004916] w-80 h-full text-white flex flex-col justify-center items-center'>
						<h1 className=' font-bold tracking-wide text-3xl'>Hello, there!</h1>
						<p className='mt-3 font-normal'>Start your journey with us.</p>
						<Link to='/login'>
							<button className='mt-10 bg-transparent font-semibold outline-white outline outline-1 rounded-full py-2 px-10 transition-all duration-200 ease-linear hover:bg-white hover:text-[#004916]'>
								Login Now
							</button>
						</Link>
					</div>
				</div>
				<ToastContainer />
			</div>
		</>
	)
}

export default Signup
