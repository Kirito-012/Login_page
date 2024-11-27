import React from 'react'
import arrow from '../images/arrow-right.svg'
import Featured_block from './Featured_block'
import img1 from '../images/featured1.jpg'
import img2 from '../images/featured2.jpg'
import img3 from '../images/featured3.jpg'
import img4 from '../images/featured4.jpg'

const Second_Section = () => {
	return (
		<>
			<div className='relative flex h-[20rem]  items-center my-10 ml-64'>
				<div className='flex flex-col'>
					<h1 className='text-[#257913] dancing_script text-4xl font-bold w-[12rem]'>
						Featured
					</h1>
					<h1 className='text-[#257913] dancing_script text-4xl font-bold w-[12rem]'>
						Things To Do
					</h1>
					<p className='mt-4 w-[12rem]'>
						Popular things to do that eSanchari recommends for you
					</p>
					<div className='mt-10 flex items-center '>
						<div className='flex justify-center items-center h-[34px] aspect-square rounded-full bg-[#257913]'>
							<img
								className='h-5 aspect-square'
								src={arrow}
							/>
						</div>
						<button className=' ml-4 roboto_slab text-[#257913] font-semibold text-sm'>
							EXPLORE MORE
						</button>
					</div>
				</div>

				<div
					onClick={() => {
						console.log('Functionality yet to be completed')
					}}
					className='absolute right-6 z-50 cursor-pointer rounded-full bg-[#257913] h-14 aspect-square flex justify-center items-center '>
					<img src={arrow} />
				</div>
			</div>
		</>
	)
}

export default Second_Section

const data = [
	{
		img: img1,
		name: 'Prestige 69',
		main_criteria: 'Yacht',
	},
	{
		img: img2,
		name: 'South Goa',
		main_criteria: 'Sightseeing',
	},
	{
		img: img3,
		name: 'Diving from Hell',
		main_criteria: 'Scuba Diving',
	},
	{
		img: img4,
		name: 'Dine Out',
		main_criteria: 'Cruise Dining',
	},
	{
		img: img1,
		name: 'Prestige 69',
		main_criteria: 'Yacht',
	},
	{
		img: img2,
		name: 'South Goa',
		main_criteria: 'Sightseeing',
	},
	{
		img: img3,
		name: 'Diving from Hell',
		main_criteria: 'Scuba Diving',
	},
	{
		img: img4,
		name: 'Dine Out',
		main_criteria: 'Cruise Dining',
	},
	{
		img: img1,
		name: 'Prestige 69',
		main_criteria: 'Yacht',
	},
	{
		img: img2,
		name: 'South Goa',
		main_criteria: 'Sightseeing',
	},
	{
		img: img3,
		name: 'Diving from Hell',
		main_criteria: 'Scuba Diving',
	},
	{
		img: img4,
		name: 'Dine Out',
		main_criteria: 'Cruise Dining',
	},
]
