const app = require('./src/app')
const port = 8080


app.listen(port, () => {
    console.log(`server runing at port ${port}`)
})