var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var helmet = require('helmet');
var cors = require('cors');
var path = require('path');
var RateLimit = require('express-rate-limit');
var compression = require('compression');

var app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var PORT = process.env.PORT || 3000;

// Rate limiting
var limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMS
  delayMs: 0, // disable delaying - full speed until the max limit is reached
});

// App middleware
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
// Somehow it needs this line also to serve static files (ie jpg)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(limiter);

mongoose.connect(process.env.DB_URI);

require('./routes')(app);

// To make browserHistory work for ReactJS
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(PORT, function() {
  console.log(`Server running on PORT: ${PORT}`)
});
