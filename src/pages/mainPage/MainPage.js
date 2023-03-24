import React from 'react'
import CarouselComp from '../../components/carousel/CarouselComp'
import { SectionGreyMain } from '../../components/main/SectionGreyMain'
import { SectionServiceMainPageComp } from '../../components/main/SectionServiceMainPageComp'
import { useScreens } from '../../constants/Constants'
import {  FloatButton } from 'antd'
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constants/animation/AnimationConst'
import { Helmet } from "react-helmet"

export const MainPage = () => {
	const screens = useScreens()

	return (
		<div className=''>
			<Helmet>
				<title>{`
				
				
				
				
				
				
				`}</title>
				<meta
					name="description"


					content={''}
				
				
				
				/>
			</Helmet>
			{
				screens.md ?
					<div className=''>
						<div className='container mx-auto px-10'>
							<CarouselComp />
							<div className='pt-6'>
								<h1 className='text-2xl font-black uppercase tracking-wide'>Строительство и ремонт</h1>

								<p className='mt-6 font-light'>
									Оказываем полный комплекс услуг на любых объектах под ключ в<span className='font-bold'> Минске и Минской области</span>
								</p>
							</div>

						</div>
					</div>
					:
					<div className=''>
						<CarouselComp />
						<div className='container px-5 mt-12'>
							<motion.div
								className=''
								initial="hidden"
								whileInView="visible"
							>
								<motion.h1
									className='text-3xl font-black uppercase tracking-wide'
									variants={titleAnimation}
								>
									Строительство и ремонт
								</motion.h1>

								<motion.h2
									className='mt-6 text-lg font-light tracking-wide leading-6'
									variants={titleAnimation2}
								>
									Оказываем полный комплекс услуг по строительству и ремонту <span className='underline font-normal'>крыш</span>, <span className='underline font-normal'>бань</span>, <span className='underline font-normal'>печей</span> и <span className='underline font-normal'>каминов</span> под ключ в<span className='font-semibold'> Могилеве и Могилевской области</span>
								</motion.h2>
								<motion.h3
									className='mt-6 font-light leading-5'
									variants={titleAnimation2}
								>
									Услуга <span className='uppercase'>сантехника</span> с выездом к клиенту в<span className='font-medium'> Могилеве и Могилевском районе</span>
								</motion.h3>
								<motion.h3
									className='mt-6 font-light leading-5'
									variants={titleAnimation2}
								>
									Услуга <span className='uppercase'>плиточника</span> в<span className='font-medium'> Могилеве и Могилевском районе</span>
								</motion.h3>
							</motion.div>

							{/* <p className='text-center'>
								У нас самые низкие цены, позвоните и убедитесь в этом!
							</p>

							<Divider /> */}
						</div>


					</div>
			}



			<SectionServiceMainPageComp />

			<SectionGreyMain />


			<FloatButton.BackTop />
		</div>
	)
}
