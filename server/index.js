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
    publicPath: config.output.publicPath,
    stats: {colors: true},
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    }
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', api);
app.use('*', function (req, res) {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function (err, result) {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(3000, function () {
    console.log('Server up and running on port 3000');
});