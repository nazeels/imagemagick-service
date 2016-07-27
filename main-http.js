var http = require('http');
var easyimg = require('easyimage');

//Lets define a port we want to listen to
const PORT=11000; 

//We need a function which handles requests and send response
function handleRequest(request, response){

	var pic = 'http://wariyum.com/wp-content/uploads/2015/02/wariyum-copy.png';

	easyimg.info(pic).then(
	  function(file) {
	    console.log(file);
	    debugger;
	  }, function (err) {
	    console.log(err);
	  }
	);


easyimg.rescrop({
     src:pic, dst:'test.png',
     width:500, height:500,
     cropwidth:128, cropheight:128,
     x:0, y:0
  }).then(
  function(image) {
     console.log('Resized and cropped: ' + image.width + ' x ' + image.height);
  },
  function (err) {
    console.log(err);
  }
);

    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});