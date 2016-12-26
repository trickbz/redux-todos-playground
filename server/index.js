var express = require('express');
var path = require('path');
var app = express();
var config = require('./../webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var api = require('./api');

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    stats: {colors: true},
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    }
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.listen(3000, function () {
    console.log('Server up and running on port 3000');
});