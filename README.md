# Book Commons
[![Build Status](https://travis-ci.org/mattpeebles/book-commons-client.svg?branch=integration%2FuserAPI)](https://travis-ci.org/mattpeebles/book-commons-client)

## Table of Contents

1. [Introduction](#introduction)
2. [Screenshots](#screenshot)
3. [Technology](#technology)
 	1. [Front End](#techFront)
 	2. [Back End](#techBack)
4. [API](#api)

## Introduction <a name="introduction"></a>

`A public domain book search that aggregates a variety of databases to display results in one convenient page. Allows users to create wishlists of public domain books to download them at their convenience.`

Book Commons aggregates public domain ebooks from three different databases - Google Books, Open Library, and Project Gutenberg. Europeana and Feedbooks integration are planned for future versions. Each result has a list of formats available for download and a link to the database. While these links very often point to the correct version, there are times (especially with Open Library results) that the links point to non-existant pages. Future work is aimed at refining these results and always returning correct links. 

In the case of no or very few public domain results, Book Commons provides a list of Amazon book links for purchase. The goal with book commons is to provide a link to the book if it exists. 

Desktop users can also very supplemental information about the book and author next to the results.

Registered users are able to create wishlists to store ebooks for later reference or download. Users can create as many wishlists and add as many ebooks to them as they please. 


## Screenshots <a name="screenshot"></a>

## Technology <a name="technology"></a>

### Front End <a name="techFront"></a>
Hosted on Netlify
- React/Redux
- HTML
- CSS
- Bootstrap 4
- Javascript/ES6
- Jquery
- Testing
	- Enzyme
	- Mocha/Chai
	- Jest

### Back End <a name="techBack"></a>
Server hosted on heroku
Database hosted on mlab
- Node
- Express
- MongoDB/Mongoose
- Testing
	-Mocha/Chai
- ES6

## API <a name="api"></a>

For an explanation of the back-end api, checkout the [Book Commons API Repository](https://github.com/mattpeebles/book-commons-api)

## Future Plans <a name="future"></a>

- [ ] Refine format links to always provide a good linke
- [ ] Integrate Europeana and Feedbooks database results
- [ ] Allow users to recover account in case of lost password