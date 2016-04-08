var express=require('express');
var app=express();

app.get('/', function(request, response){
  response.send('Hey World');
  })

  var server=app.listen(process.env.PORT || 3000, function() {
      var port=server.address(). port;
      console.log('Listening on port', port);
      })
