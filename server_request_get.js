const http = require('http')

const url = require('url')
const querystring = require('querystring')

const server = http.createServer(function (request, response) {
    console.log('--- log start ---')
    const parsedUrl = url.parse(request.url)
    console.log(parsedUrl)
    const parsedQuery = querystring.parse(parsedUrl.query, '&', '=')
    console.log(parsedQuery)
    console.log('--- log end ---')

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(parsedQuery.var1)
})

server.listen(8080, function () {
    console.log('Server is running...')
})
