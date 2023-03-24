import React, { useState } from 'react'
import { Button, Popover, Rate, Avatar, Image,FloatButton } from 'antd'
import { ExclamationCircleOutlined, LineOutlined, UserOutlined } from '@ant-design/icons'
import { Helmet } from "react-helmet"
import { FormOtzyvy } from '../../components/form/FormOtzyvy'
import img1 from '../../images/otzyvy/1.webp'
import img2 from '../../images/otzyvy/2.webp'
import img3 from '../../images/otzyvy/3.webp'
import img4 from '../../images/otzyvy/4.webp'
import img5 from '../../images/otzyvy/5.webp'


const content = (
	<div>
		<p>Отзыв будет опубликован только если это отзыв клиента нашей службы и после проверки модератора.</p>
	</div>
)

export const OtzyvyPage = () => {
	const [add, setAdd] = useState(false)



	return (
		<section className='py-12 w-full z-10 min-h-[60vh]' id='otzyvy'>
			<Helmet>
				<title>{''}</title>
				<meta name="description" content={''} />
			</Helmet>
			<FloatButton.BackTop />
			<div className='container'>
				<div className='text-center mb-12 text-[#042A3F]'>
					<h2 className='text-4xl uppercase'>Наши<span className=''> отзывы</span></h2>
					<LineOutlined style={{ color: '#AFD93B', fontSize: '3rem' }} />
				</div>

				<div className='px-5'>
					<div className='border-b pb-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Луцевич Максим</p>
								<p className='text-xs mb-1'>услуги плиточника</p>
								<p className='text-[10px] text-gray-400'>23.08.2019</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4 ml-6'>
								<Image src={img1} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Обратились для укладки плитки в ванной. Приехали и всё понятно объяснили, назвали сроки и стоимость, сделали всё аккуратно, немного сроки сместились, не критично, главное результатом мы довольны. Работу приняли, нас всё устраивает, будем рекомендовать.
							</p>
						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' className='shadow-xl' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за Ваш отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									С
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Лукашевич Сергей</p>
								<p className='text-xs mb-1'>кладка печи</p>
								<p className='text-[10px] text-gray-400'>11.12.2020</p>
								<Rate allowHalf defaultValue={4.5} />

							</div>
							<div className='w-1/4 ml-6'>
								<Image src={img2} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Живу за городом, устал от старой печки, постоянно дым в доме, посоветовали соседи, покласть печку, сделали такую красоту, ни дыма, ни запаха, я очень даволен и благодарен.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв. Мы делали свою работу.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									В
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Бакун Виктор</p>
								<p className='text-xs mb-1'>Ремонт кровли</p>
								<p className='text-[10px] text-gray-400'>10.04.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img3}  preview={false} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Заказал монтаж металлочерепицы и водосточки. Сам я в прошлом строитель, смотрел как делали, нареканий нет, ребята знают своё дело. Я человек требовательный, много просил доп. работ делать. Цена по итогу не поменялась, приятно. Рекомендую!
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>

					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									С
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Кравчинко Семён</p>
								<p className='text-xs mb-1'>Строительство бани</p>
								<p className='text-[10px] text-gray-400'>02.09.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img4} preview={false} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Не знаю, что писать, построили баню, сделали в срок, позже заметил маленькие недоделки, позвонил, приехали быстро, все исправили. Банька получилась классная. Спасибо. Рекомендую.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за рекомендацию и отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Ходосевич Марина</p>
								<p className='text-xs mb-1'>Ванная под ключ</p>
								<p className='text-[10px] text-gray-400'>22.11.2022</p>
								<Rate allowHalf defaultValue={4.7} />

							</div>
							<div className='w-1/4'>
								<Image src={img5} preview={false} className='rounded-sm shadow-xl' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Сделали красивую ванную, как я мечтала. Очень удобно и сантехник и плиточник в одном месте. По электрике помогли, не пришлось искать электриков. Ценой и качеством я давольна. Спасибо!
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-14'>
					<div
						style={{
							marginBottom: 16,
						}}
						className='flex items-center justify-end'
					>

						<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-orange-500 ml-3' /></div>} trigger="click">
							<ExclamationCircleOutlined className='text-xl mr-5 text-orange-400' />
						</Popover>
						<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
					</div>
				</div>

				{

					add &&
					<div className='px-5'>
						<FormOtzyvy setAdd={setAdd} />
					</div>
				}

			</div>
		</section>
	)
}
