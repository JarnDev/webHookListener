const app = require('./src/config/custom-express')

const port = process.env.PORT || 9001

app.listen(port, ()=>{
    console.log(`Escutando porta ${port}`) 
})
