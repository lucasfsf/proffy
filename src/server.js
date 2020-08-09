//Server - to run = npm run dev
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configure nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})
//server config
server
//receive data from req.body, also needs to create the post below just as in HTML
.use(express.urlencoded({ extended: true }))
//configure static files (CSS, SCRIPTS, IMAGES, )
.use(express.static("public"))
//Application paths
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//starts server
.listen(5500)