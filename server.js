require('dotenv').config()
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults({ static: 'public' }) // Servir archivos desde la carpeta 'public'
server.use(middlewares)

const allowAccessFromAnywhere = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
}
server.use(allowAccessFromAnywhere)

const router = jsonServer.router('db.json')
server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`)
  console.log(`Local Access at http://localhost:${PORT}`)
})
