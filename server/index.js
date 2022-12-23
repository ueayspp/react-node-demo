const express = require('express')
const app = express()
const port = 8000

app.get('/', (request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html>
    <head><title>Node.js</title></head>
    <body>
        <h3>Welcome to Express.js</h3>
        <b>Express.js Fast, unopinionated, minimalist ...</b>
    </body>
    </html>
    `)
})
app.listen(port, () => console.log('Server listening on port ' + port))
