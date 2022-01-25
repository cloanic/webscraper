//const port and three different packages we used (npm i (package))
const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

//defined express in our app variable
const app = express()

//made the url changeable in the future
const url = 'https://www.theguardian.com/'

//use axios package to get articles from the site via href and a tags and push them to articles list
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.fc-item__title', html).each(function() {
           const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

//determine what port express needs to listen and run on
app.listen(PORT, () => console.log('server running on PORT ${PORT}'))




