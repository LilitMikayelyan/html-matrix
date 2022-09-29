var http = require('http'),
    fs = require('fs'),
    url = require('url');
var n= 10;
var m = 10;
http.createServer(function (req, res) {
    var html = '<html><head><style>table, td {border:  1px solid black;} td{width: 40px; height: 40px;}</style></head><body><table>';
    for (let i = 0; i < n; i++) {
        html += '<tr>';
        for (let j = 0; j < m; j++) {
            html += '<td ';
            var a = Math.floor(Math.random() * 7 + 1);
            console.log(a);
            if (a == 1 || a == 2 || a == 3) 
                html += 'style="background-color: brown;">';
            else if (a == 4 || a == 5 || a == 6) 
                html += 'style="background-color: grey;"';
            else 
                html += 'style="background-color: blue;"';
            html += '</td>';
        }
        html += '</tr>';
    }
    html += '</table></body></html>';
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(html);
}).listen(3000);
console.log("Server running at http://localhost:3000/");