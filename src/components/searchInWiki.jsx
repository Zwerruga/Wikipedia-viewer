async function searchInWiki(titleWikiPage) {
	const api = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=8&srsearch=${titleWikiPage}&utf8=&format=json&origin=*`
	const link = 'https://en.wikipedia.org/?curid='

	return await fetch(api)
		.then(res => res.json())
		.then(({ query }) => {
			return query.search.map(article => ({
				href: link + article.pageid,
				text: article.snippet,
				title: article.title,
			}))
		})
}

export default searchInWiki
