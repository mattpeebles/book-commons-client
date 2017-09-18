module.exports = {
	PORT: process.env.PORT || 8080,

	API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 
	'http://localhost:4040/api',

	GUTENBERG_ID_URL: `https://gutenbergapi.org/search/title eq`,
	GUTENBERG_BOOK_URL: `https://gutenbergapi.org/texts`,
	GOOGLE_ID_URL: `https://www.googleapis.com/books/v1/volumes?q=intitle:`
}