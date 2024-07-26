const express = require('express')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use('/api', router)
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})