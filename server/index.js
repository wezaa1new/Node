const express = require('express')
const app = express()
const port = 8000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/api/server-time',(request,response) =>{
    let now = new Date()
    let time = {
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
    }
    response.json(time)
})

function rd(min,max){
    let x = (max-min)+1
    return min + Math.floor(Math.random()*x)
}

app.get('/api/football-result',(request,response) => {
    let table = `
        <table border = "1" style = "margin: 7px auto">
        <tr><td>ManU</td><td>${rd(0,5)}-${rd(0,5)}</td><td>Liverpool</td></tr>
        <tr><td>Chelsea</td><td>${rd(0,5)}-${rd(0,5)}</td><td>Mancity</td></tr>
        <tr><td>Arsenal</td><td>${rd(0,5)}-${rd(0,5)}</td><td>Spur</td></tr>
        </table>
    `

    response.send(table)
})

app.listen(port, () =>{
    console.log('Server listening on port' + port)
})