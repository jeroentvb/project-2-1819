const app = require('express')

app()
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
  res.status(404).render('error', {
    message: 'Page not found'
  })
}
