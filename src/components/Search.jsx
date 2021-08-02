import { useState } from 'react';

export default function Search({search, handleClick, handleCloseClick, isOnFocus}) {
	const [inputValue, setInputValue] = useState('')

	return (
		<div className='article-search container container-column'>
			<a
				className='random-article none-decorated-link underline-hover'
				href='https://en.wikipedia.org/wiki/Special:Random'
				target='_blank'
				rel="noreferrer"
			> Click here for a random article
			</a>

			<form
				className='magnifier container underline-hover'
				onSubmit={search}
				style={isOnFocus ? {width: '240px'}: {width: '20px'}}>
				<div className='magnifier_pen'
				style={isOnFocus ? {height: '0'}: {height: '20px'}}
				></div>
				<input
					onClick={handleClick}
					className='search'
					type='text'
					title='Enter search title'
					onInput={setInputValue.bind(this, inputValue)}
					onBlur={(e) => {
						e.target.value = ''
						setInputValue('')
					}}
					/>
				<div className='eks container' onClick={handleCloseClick}>
					&#10006;
				</div>
			</form>

			<p>Click icon to search</p>
		</div>
	)
}
