import React from 'react'

export default function Article({address, title, text}) {
	return (
		<a
			href={address}
			className='wrapper none-decorated-link'
			target='_blank'
			rel="noreferrer"
		>
			<div className='article'>
				<p className='article__title'>{title}</p>
				<div
					className='article__text'
					dangerouslySetInnerHTML={text}
				></div>
			</div>
		</a>
	)
}
