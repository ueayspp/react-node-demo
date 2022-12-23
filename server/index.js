const { request, response } = require('express')
const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/server-time', (request, response) => {
  let now = new Date()
  let time = {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  }
  response.json(time)
})

function r(min, max) {
  let x = max - min + 1
  return min + Math.floor(Math.random() * x)
}

app.get('/api/football-result', (request, response) => {
  let table = `
    <table border="1" style="margin: 7px auto">
        <tr><td>MU</td><td>${r(0, 5)}-${r(0, 5)}</td><td>Lp</td></tr>
        <tr><td>Ch</td><td>${r(0, 5)}-${r(0, 5)}</td><td>Mc</td></tr>
        <tr><td>Ar</td><td>${r(0, 5)}-${r(0, 5)}</td><td>Sp</td></tr>
    </table>
    `
  response.send(table)
})

app.listen(port, () => console.log('Server listening on port ' + port))
