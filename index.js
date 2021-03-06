const gzipStatic = require('connect-gzip-static')
const app = require('express')
const path = require('path')

app()
  .use((req, res, next) => {
    res.setHeader('Cache-Control', 'max-age=' + 30 * 24 * 60 * 60)
    next()
  })

  .use(gzipStatic(path.join(__dirname, '/static')))
  .set('views', 'templates/pages')
  .set('view engine', 'ejs')
  .use(app.static('static'))

  .get('/', index)

  .use(notFound)
  .listen(process.env.PORT || 3000, () => console.log(`[server] listening on port ${process.env.PORT || 3000}`))

function index (req, res) {
  res.render('index')
}

function notFound (req, res) {
  res.status(404).send('Page not found')
}
