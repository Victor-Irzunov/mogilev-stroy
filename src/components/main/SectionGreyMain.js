import React from 'react'
import { motion } from "framer-motion"
import { titleAnimation2, titleAnimation } from '../../constants/animation/AnimationConst'

export const SectionGreyMain = () => {
	return (
		<section className='bg-[#042A3F] text-[#F4F4F4] px-5 py-10 mt-20'>
			<motion.div
				className=''
				initial="hidden"
				whileInView="visible"
			>
				<motion.h4
					className='text-2xl text-[#AFD93B]'
					variants={titleAnimation}
				>
					remont-brigada.by
				</motion.h4>
				<motion.p
					className='font-light leading-6 text-lg tracking-wide'
					variants={titleAnimation2}
				>
					Наша компания основана в 2010 году, за более чем 12 лет мы получили огромный опыт и собрали команду настоящих профессионалов. 
					Обращаясь в нашу компанию Вы получаете качественный сервис по доступным ценам. Мы даём гарантию на свои работы.
				</motion.p>
			</motion.div>
		</section>
	)
}
