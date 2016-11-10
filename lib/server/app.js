var express = require("express");
var app = express();
var index = require('./routes/index');
var welcome = require('./routes/welcome');
var parts = require('./routes/parts');
var bodyParser = require('body-parser');
//var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 8000);


app.get('/hello', welcome);

app.get('/', index);

app.use('/parts', parts);

app.use(express.static('lib/public'));

app.listen(app.get('port'), function() {
  console.log('Server is listening on port ' + app.get('port'));
});;
//console.log("Listening on port: ", port);
