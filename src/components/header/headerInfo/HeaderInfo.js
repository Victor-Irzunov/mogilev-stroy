import React, { useState } from 'react'
import { Image, Button, Affix, Tooltip } from 'antd'
import logo from '../../../images/logo/logo.webp'
import logo2 from '../../../images/logo/logo2.webp'
import telegram from '../../../images/social-icon/telegram.svg'
import viber from '../../../images/social-icon/viber.svg'
import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import instagram from '../../../images/social-icon/instagram.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined, InstagramOutlined } from '@ant-design/icons'
import { useScreens } from '../../../constants/Constants'
import { DrawerComp } from '../../drawer/DrawerComp'
import { motion } from "framer-motion"
import { yAnimation3 } from '../../../constants/animation/AnimationConst'

export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	return (
		<>
			{
				screens.md
					?
					<div className='bg-gray-100'>
						<div className='container mx-auto px-10 flex justify-between items-center'>
							<div className='flex justify-start items-center'>
								<Image src={logo2} preview={false} width='220px' />
							</div>


							<div className='flex text-xl items-center font-light text-[#000]'>
								<ClockCircleOutlined />
								<span className='uppercase ml-2  mr-0.5'>принимаем звонки 09:00</span>
								<span>-</span>
								<span className='uppercase ml-0.5'>21:00</span>
							</div>


							<div className=''>
								<div className='flex text-lg text-[#000]'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl' />
									<div className='flex items-end'>
										<a href='tel:80293613612' className='text-2xl'>+375 (29) 308-90-91</a>
										<span className='ml-1.5 font-extralight'>A1</span>
									</div>
								</div>
							</div>

							{/* <div className='flex flex-col items-center'>
								<p className='text-sm text-[#000] mb-1 font-light'></p>
							</div> */}
						</div>
					</div>
					:
					<motion.div
						initial="hidden"
						whileInView="visible"
					>
						<motion.div
							className='flex flex-col 
						justify-between items-center
						 text-[#AFD93B] pt-24 pb-3 
						 relative z-10 bg-[#042A3F]'
							variants={yAnimation3}
						>
							<div className='flex items-center'>
								<ClockCircleOutlined />
								{/* text-[#fdd158] */}
								<span className='uppercase ml-2 font-semibold mr-0.5'>принимаем звонки 09:00</span>
								<span>-</span>
								<span className='uppercase ml-0.5 font-semibold'>21:00</span>
							</div>
							<div className='mt-2 mb-2'>
								<div className='text-lg '>
									<div className='flex items-end pl-7 text-[#F4F4F4]'>
										<a href='tel:80293613612' className='text-2xl'>+375 (29) 308-90-91
											<span className='ml-2 font-extralight text-[12px]'>A1</span>
										</a>
									</div>
								</div>
								<div className='text-lg '>
									<div className='flex items-end pl-7 text-[#F4F4F4]'>
										<a href='tel:80293613612' className='text-2xl'>+375 (29) 842-33-98
											<span className='ml-2 font-extralight text-[12px]'>МТС</span>
										</a>
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm mb-2 uppercase text-yellow-500' onClick={() => showDrawer('top', 'Заказать звонок')}>
									<ShakeOutlined /> Заказать звонок</p>
								<div>
									<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`}>
										<Image src={telegram} preview={false} style={{ width: '30px' }} />
									</a>
									{/* <a href='http://wa.me/375290000000?text=нужен%ремонт%20'>
										<Image src={whatsapp} style={{ width: '30px', marginLeft: '1.5em' }} preview={false} />
									</a> */}
									<a href='viber://chat?number=%2B375293089091'>
										<Image src={viber} style={{ width: '32px', marginLeft: '1.5em' }} preview={false} />
									</a>
									<a href='https://www.instagram.com/remont.mogilev'
										target='_blank'
									>
										{/* <InstagramOutlined style={{ width: '30px', marginLeft: '1.5em' }} className='text-purple-600' /> */}
										<Image src={instagram} style={{ width: '30px', marginLeft: '1.5em' }} preview={false} />
									</a>
								</div>
							</div>

							{/* <div className='relative'>
								<Button type='primary' className='mt-3' style={{ backgroundColor: '#fff' }}>
									<a href='tel:80293613612'>
										<PhoneOutlined className='rotate-90 animate-pulse text-red-600' />
										<span className='uppercase text-red-600'>
											{' '}Аварийная бригада 24/7
										</span>
									</a>
								</Button>
								<Tooltip placement="topRight" title='Выездная оперативная круглосуточная аварийная служба по ремонту электрооборудования.'>
									<QuestionCircleOutlined className='absolute top-5 -right-8' />
								</Tooltip>
							</div> */}


							<Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix>
						</motion.div>
					</motion.div>
			}
			<DrawerComp open={open} placement={'top'} title={'Заказать звонок'} setOpen={setOpen} isActiveForm={{ tel: true }} />
		</>
	)
}
