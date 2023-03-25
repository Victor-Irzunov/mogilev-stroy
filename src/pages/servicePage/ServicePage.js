import React, { useEffect, useState } from 'react'
import { Divider, Image, Tag, FloatButton } from 'antd'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { titleAnimation, titleAnimation2, yAnimation } from '../../constants/animation/AnimationConst'
import {
	dataBani,
	dataKaminy,
	dataKrysha,
	dataPlumber,
	dataPlitka,

} from '../../constants/service/ServiceConst'
import {
	useLocation,
} from 'react-router-dom'
// import hours from '../../images/service/24-hours.svg'
import { ModalComp } from '../../components/modal/ModalComp'

export const ServicePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [data, setData] = useState([])

	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}
	// let data
	let location = useLocation()

	useEffect(() => {
		switch (location.pathname) {
			case '/uslugi/bani-i-sauni':
				setData(dataBani)
				break
			case '/uslugi/pechi-i-kamini':
				setData(dataKaminy)
				break
			case '/uslugi/remont-krishi':
				setData(dataKrysha)
				break
			case '/uslugi/santekhnik':
				setData(dataPlumber)
				break
			case '/uslugi/plitochnik':
				setData(dataPlitka)
				break
			
		}
	}, [location.pathname])

	return (
		<section className='pt-10'>

			<FloatButton.BackTop />
			{
				data.length && data.map(el => {
					return (
						<React.Fragment key={el.id}>
							<Helmet>
								<title>{el.h1}</title>
								<meta name="description" content={el.h2} />
							</Helmet>
							<div className='xyy:px-5 pb-20 sm:container sm:mx-auto'>
								<motion.div
									className=''
									initial="hidden"
									whileInView="visible"
								>
									<motion.h1
										className='text-2xl uppercase font-black'
										variants={titleAnimation}
									>
										{el.h1}
									</motion.h1>
									<motion.h2
										className='text-gray-700 font-light text-sm'
										variants={titleAnimation2}
									>
										{el.h2} {' '}
										{/* <Image src={hours} style={{width:'25px', marginTop:'5px'}} /> */}

									</motion.h2>

								</motion.div>
								<motion.div>
									<Image
										src={el.img}
										preview={false}
										className='shadow-2xl'
									/>
								</motion.div>

								<motion.div
									className='mt-10 overflow-hidden'
									initial="hidden"
									whileInView="visible"
								>
									<motion.div
										variants={yAnimation}
									>

										<h3 className='text-lg tracking-wider'>
											{el.h3}
										</h3>
										<ul className='font-light list-disc'>

											{el.list.map((elem, idx) => {
												return (
													<li className='mb-2' key={idx}>
														{elem}
													</li>
												)
											})}
										</ul>
										<p className='text-xs text-gray-600 font-light mt-10'>
											<InfoCircleTwoTone /> Стоимость и сроки Вы можете узнать позвонив по телефону +375 (29) 308-90-91 либо отправив нам сообщение (кнопка ниже). Выполняем работы как под ключ, так и частями.
										</p>
										<Tag
											color="green"
											onClick={() => showModal('Стоимость и сроки')}

										>
											узнать стоимость и сроки
										</Tag>

									</motion.div>
								</motion.div>

								{el.list2 ?
									<>
										<Divider />
										<motion.div>
											<Image
												src={el.img2}
												preview={false}
												className='shadow-2xl'
											/>
										</motion.div>
										<motion.div
											className='mt-10 overflow-hidden'
											initial="hidden"
											whileInView="visible"
										>
											<motion.div
												variants={yAnimation}
											>
												<h3 className='font-medium text-lg tracking-wider'>
													{el.h3_2}
												</h3>
												<ul className='font-light list-disc'>
													{
														el.list2.map((item, i) => {
															return (
																<li className='mb-2' key={i}>
																	{item}
																</li>
															)
														})
													}
												</ul>
												<p className='text-xs text-gray-600 font-light mt-10'>
													<InfoCircleTwoTone /> Стоимость и сроки Вы можете узнать позвонив по телефону (указан выше) либо отправив нам сообщение (кнопка ниже). Выполняем работы как под ключ так и отдельными частями.
												</p>
												<Tag
													color="green"
													onClick={() => showModal('Стоимость и сроки')}

												>
													узнать стоимость и сроки
												</Tag>
											</motion.div>
										</motion.div>
									</>
									:
									undefined
								}
								{el.list3 ?
									<>
										<Divider />
										<motion.div
											className='mt-10 overflow-hidden'
											initial="hidden"
											whileInView="visible"
										>
											<motion.div
												variants={yAnimation}
											>
												<h3 className='font-medium text-lg tracking-wider'>
													{el.h3_3}
												</h3>
												<ul className='font-light list-disc'>
													{
														el.list3.map((item, i) => {
															return (
																<li className='mb-2' key={i}>
																	{item}
																</li>
															)
														})
													}
												</ul>
												<p className='text-xs text-gray-600 font-light mt-10'>
													<InfoCircleTwoTone /> Стоимость и сроки Вы можете узнать позвонив по телефону (указан выше) либо отправив нам сообщение (кнопка ниже). Выполняем работы как под ключ так и отдельными частями.
												</p>
												<Tag
													color="green"
													onClick={() => showModal('Стоимость и сроки')}
												>
													узнать стоимость и сроки
												</Tag>
											</motion.div>
										</motion.div>
									</>
									:
									undefined
								}
							</div>


							{
								el.content.map(elem => {
									return (
										<motion.div
											className='bg-[#042A3F] px-5 py-7 leading-6'
											initial="hidden"
											whileInView="visible"
										>
											<motion.div
												variants={yAnimation}
											>
												<h3 className='font-bold text-[#AFD93B]'>
													{elem.h4}
												</h3>
												<p className='font-light text-[#F4F4F4] text-sm'>
													{elem.p}
												</p>
											</motion.div>
										</motion.div>
									)
								})
							}


						</React.Fragment>
					)
				})
			}

			<ModalComp question={true} isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} />
		</section>
	)
}
