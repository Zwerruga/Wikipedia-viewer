import { useState } from 'react'

import searchInWiki from './components/searchInWiki';
import Search from './components/Search'
import Article from './components/Article';

export default function App() {
	const [articles, setArticles] = useState([])
	const [isSearchOnFocus, setSearchOnFocus] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()
		setArticles(await searchInWiki(e.target['0'].value || ' '))
	}
	function handleClick(e) {
		setSearchOnFocus(true)
	}
	function handleCloseClick(e) {
		setSearchOnFocus(false)
		setArticles([])
	}

	return (
		<div className='main-container container container-column'>
			<Search
				isOnFocus={isSearchOnFocus}
				search={handleSubmit}
				handleClick={handleClick}
				handleCloseClick={handleCloseClick}
			/>
			{articles.map(art => {
				return (
					<Article
						key={art.href}
						address={art.href}
						title={art.title}
						text={{ __html: art.text }}
					/>
				)
			})}
		</div>
	)
}