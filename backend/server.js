const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const fs = require('fs')
const path = require('path'); //GET FILENAME WITH NO EXTENSION
const app = express()
app.use(cors())
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(fileUpload())

app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded' })
    }
    const file = req.files.file
    file.mv(`${__dirname}/uploads/${file.name}`, err => {
        if (err) {
            console.error(err)
            return res.status(500).send(err)
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
    })
})

app.get('/uploads', (req, res) => {
    //iterate uploads folder and get each one without zipping

    fs.readdir('./uploads', function (error, list) {
        if (error) {
            console.log(error)
        }
        list.forEach((file, index) => {
            if (file) {
                // get the file name without extension
                list[index] = path.parse(file).name
            }
        })
        res.send(list)
    })
})

app.get('/download/:name', async (req, res) => {
    var file = __dirname + `/uploads/${req.params.name}` + '.wav'
    var stat = fs.statSync(file)
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    })
    var readStream = fs.createReadStream(file)
    readStream.pipe(res)

})
app.listen(3001, () => console.log("run"))
