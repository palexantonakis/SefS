const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, './')

app.use(express.static(publicDirectoryPath))
app.get('/', (req, res) => res.sendFile(publicDirectoryPath))

app.listen(port, () => console.log(`Server listening on port ${port}!`))
