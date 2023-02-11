const functions = require("firebase-functions");
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')

const app = express()
const uuid = 'cldenz5o53s900auo8wumyspq'

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(compression())
app.use(helmet())
app.use(express.static('static'))

app.get('/', async (_req, res) => {
	let content = null

	await fetch(`https://whois.fdnd.nl/api/v1/member?id=${uuid}`)
		.then((response) => response.json())
		.then((data) => content = data.member)

	res.render('index', { content })
})

exports.app = functions.https.onRequest(app)