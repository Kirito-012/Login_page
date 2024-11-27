import React, {useState} from 'react'
import arrow from '../images/arrow-right.svg'

const Featured_block = ({img, name, main_criteria}) => {
	const [hover, setHover] = useState(true)
	return (
		<>
			<div
				className='relative rounded-2xl overflow-hidden mr-5'
				onMouseEnter={() => {
					setHover(!hover)
				}}
				onMouseLeave={() => {
					setHover(!hover)
				}}>
				<div
					className={
						hover
							? `h-0 `
							: `absolute overflow-hidden transition-all duration-200 ease-linear h-[320px] cursor-pointer w-[240px] z-10 bg-[#004916]`
					}>
					<div className='pl-6 '>
						<h1 className='pt-10 outfit text-white font-semibold text-2xl'>
							{name}
						</h1>
						<h1 className='outfit text-white text-[14px]'>{main_criteria}</h1>
						<div className='mt-40 flex text-white items-center'>
							<button className='hover:underline roboto_slab text-base font-medium'>
								VIEW MORE
							</button>
							<img
								className='h-5 aspect-square'
								src={arrow}
							/>
						</div>
					</div>
				</div>
				<div className='cursor-pointer relative bg-black h-[320px] rounded-2xl overflow-hidden w-[240px]'>
					<img
						className='absolute h-[320px] object-cover'
						src={img}
					/>
					<div
						className={
							hover
								? `relative transition-all tracking-wider duration-200 ease-linear font-semibold text-lg roboto_slab text-white ml-3 mt-[17rem]`
								: 'hidden transition-all duration-200 ease-linear]'
						}>
						{main_criteria}
					</div>
				</div>
			</div>
		</>
	)
}

export default Featured_block
