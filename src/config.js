module.exports = {
	PORT: process.env.PORT || 8080,

	GOOGLE_KEY: 'AIzaSyDfAQ4X_e2kx8IC0K2bd0Um_pMnAHP2uus',

	 API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
	'http://localhost:4040/api',

	GUTENBERG_ID_URL: `https://gutenbergapi.org/search/title eq`,
	GUTENBERG_BOOK_URL: `https://gutenbergapi.org/texts`,
	GOOGLE_ID_URL: `https://www.googleapis.com/books/v1/volumes?q=intitle:`,
	GOOGLE_BOOK_URL: `https://www.googleapis.com/books/v1/volumes`,
	OPEN_LIBRARY_URL: `https://openlibrary.org/search.json?q=title:`
}