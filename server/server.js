const server = require('./app')
const port = 4000

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
