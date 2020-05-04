const http = require('http')

const url = require('url')
const querystring = require('querystring')

const server = http.createServer(function (request, response) {
    let postdata = ''
    request.on('data', function (data) {
        postdata = postdata + data
    })

    request.on('end', function () {
        const parsedQuery = querystring.parse(postdata)
        console.log(parsedQuery)
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end('var1의 값 = ' + parsedQuery.var1)
    })
})

server.listen(8080, function () {
    console.log('Server is running...')
})
