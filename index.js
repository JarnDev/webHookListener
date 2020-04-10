const app = require('./src/config/custom-express')
const checkMem = require('./src/services/memWatcher')

setInterval(checkMem,60*1000)

const port = process.env.PORT || 9001

app.listen(port, ()=>{
    console.log(`Escutando porta ${port}`) 
})
