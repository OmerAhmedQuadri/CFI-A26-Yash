import express from "express"

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.json({ staus : true, message : 'Server Base URL'})
})

app.get('/api/books', (req,res) => {
    res.json({status : true, message : 'done'})
})

app.use( (req, res) => {
    res.json({ status : false, message : 'Route Does Not Exist'})
})

app.listen(PORT, () => {
    console.log('Server Started at', PORT);
})