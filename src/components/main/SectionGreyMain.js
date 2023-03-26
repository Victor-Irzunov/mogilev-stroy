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
					remontmogilev.by
				</motion.h4>
				<motion.p
					className='font-light leading-6 text-lg tracking-wide'
					variants={titleAnimation2}
				>
					Наш опыт строительства более чем 10 лет, за это время мы получили огромный опыт и собрали команду настоящих профессионалов. 
					Обращаясь к нам Вы получаете качественный сервис по доступным ценам.
				</motion.p>
			</motion.div>
		</section>
	)
}
