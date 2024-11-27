import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import profile from '../images/user.svg'
import cart from '../images/shopping-bag.svg'
import whishlist from '../images/heart.svg'
import bg from '../images/bg.jpg'

const FirstSection = () => {
	const [loggedInUser, setloggedInUser] = useState('')
	const [isProfile, setisProfile] = useState(true)
	useEffect(() => {
		setloggedInUser(localStorage.getItem('username'))
	}, [])

	const handleLogout = (e) => {
		localStorage.removeItem('token')
		localStorage.removeItem('username')
	}
	return (
		<div className='overflow-hidden select-none'>
			<div className='w-screen h-screen relative'>
				<img
					className='absolute'
					src={bg}
				/>
				<div className='relative'>
					<div className='pt-10 flex justify-between mx-32 items-center'>
						<div className='flex text-white text-sm mx-4 font-semibold gap-6'>
							<h1 className='transition-all duration-500 ease-linear cursor-pointer scale-105 text-[#004916] hover:font-bold noto_sans'>
								HOME
							</h1>
							<h1 className='transition-all duration-500 ease-linear cursor-pointer hover:scale-105 hover:text-[#004916] hover:font-bold noto_sans'>
								DESTINATIONS
							</h1>
							<h1 className='transition-all duration-500 ease-linear cursor-pointer hover:scale-105 hover:text-[#004916] hover:font-bold noto_sans'>
								ABOUT
							</h1>
							<h1 className='transition-all duration-500 ease-linear cursor-pointer hover:scale-105 hover:text-[#004916] hover:font-bold noto_sans'>
								BLOG
							</h1>
							<h1 className='transition-all duration-500 ease-linear cursor-pointer hover:scale-105 hover:text-[#004916] hover:font-bold noto_sans'>
								CONTACT
							</h1>
						</div>
						<div className='flex gap-5 items-center text-white'>
							<div className='group'>
								<img
									className='transition-all duration-200 ease-linear hover:scale-125 cursor-pointer'
									src={profile}
									onMouseEnter={() => {
										{
											setisProfile(!isProfile)
										}
									}}
								/>
								<div
									className={
										isProfile
											? 'h-0 '
											: 'transition-all ease-in-out duration-200 h-10 flex items-center w-56 absolute right-28 top-[70px] bg-white'
									}>
									<Link to='/login'>
										<button
											onClick={handleLogout}
											onMouseLeave={() => {
												setisProfile(true)
											}}
											className={
												isProfile
													? 'hidden'
													: 'block w-56 transition-all duration-300 text-black ease-linear h-10 hover:bg-[#257913] hover:text-white text-start px-5 noto_sans text-sm font-semibold'
											}>
											Log Out
										</button>
									</Link>
								</div>
							</div>
							<img
								className='transition-all duration-200 ease-linear hover:scale-125 cursor-pointer'
								src={whishlist}
							/>
							<img
								className='transition-all duration-200 ease-linear hover:scale-125 cursor-pointer'
								src={cart}
							/>
						</div>
					</div>
					<div className='flex flex-col justify-center items-center pt-10'>
						<div className=' flex flex-col items-center'>
							<h1 className='roboto_slab text-[#004916] text-[100px] font-normal'>
								LIVE
							</h1>
							<h1 className='mt-[-65px] dancing_script text-[#004916] text-[130px] font-bold'>
								Your Dream
							</h1>
							<h1 className='roboto_slab mt-[-65px] text-[#004916] text-[100px] font-normal'>
								TRIP
							</h1>
						</div>
						<h1 className='font-bold noto_sans text-[#004916] '>
							Hello {loggedInUser}
						</h1>
						<div className='w-[500px] flex justify-between h-[47px] bg-[#F3f3f3]'>
							<input
								className='noto_sans w-full bg-transparent px-3 outline-none text-[14px]'
								name='looking_for'
								type='text'
								placeholder='What are you looking for?'
							/>
							<button
								type='submit'
								className='transition-all ease-in-out duration-200 flex justify-center items-center text-[14px] cursor-pointer bg-[#003d00] w-[180px] h-full noto_sans tracking-[2px] hover:font-semibold hover:tracking-[3px] font-medium text-white'>
								SEARCH
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FirstSection
