import express from 'express'
import compression from 'compression'
import helmet from 'helmet'

const app = express()
const uuid = 'cldenz5o53s900auo8wumyspq'

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(compression())
app.use(helmet())
app.use(express.static('public'))

app.get('/', async (_req, res) => {
	let content = null

	await fetch(`https://whois.fdnd.nl/api/v1/member?id=${uuid}`)
		.then((response) => response.json())
		.then((data) => content = data.member)

	res.render('index', { content })
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), () => console.log(`Application started on http://localhost:${app.get('port')}`))
