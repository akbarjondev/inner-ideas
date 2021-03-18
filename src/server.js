const CONFIG = require('./config/config')

const run = async (express) => {

	const app = express()

	// == Routers
	const ideas = express.Router()


	// === Ideas Router
	app.use('/ideas', ideas)


	app.listen(CONFIG.PORT, () => console.log(`ready at http://localhost:${CONFIG.PORT} 🚀`))

}

module.exports.run = run
