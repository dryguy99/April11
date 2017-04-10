
var http = require("http");
var PORT = 7000;
var PORT2 = 7500;
function handleRequest(request, response) {
	  response.end("It Works!! You Look Fabulous!!! ");
	 }
function handleRequest2(request, response) {
	  response.end("It Works!! Maybe you should lose some weight ");
	 } 
	var server1 = http.createServer(handleRequest);
	var server2 = http.createServer(handleRequest2);

	server1.listen(PORT, function() {
		  console.log("Server listening on: http://localhost:%s", PORT);
		});
	server2.listen(PORT2, function() {
		  console.log("Server listening on: http://localhost:%s", PORT);
		});

