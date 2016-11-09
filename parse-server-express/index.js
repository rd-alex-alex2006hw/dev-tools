// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
// var S3Adapter = require('parse-server').S3Adapter;
var S3Adapter = require('parse-server-s3-adapter');
var FSFilesAdapter = require('parse-server-fs-adapter');
var path = require('path');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
console.log('databaseUri : ', databaseUri);
console.log('APP_ID : ', process.env.APP_ID);
console.log('MASTER_KEY : ', process.env.MASTER_KEY);
console.log('serverURL : ', process.env.SERVER_URL);
console.log('s3_accessKey :', process.env.S3_ACCESS_KEY);
console.log('s3_secretKey :', process.env.S3_SECRET_KEY);
console.log('s3_bucket :', process.env.S3_BUCKET)
console.log('upload :', process.env.PARSE_UPLOAD)

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var fsAdapter = new FSFilesAdapter({
      "filesSubDirectory": process.env.PARSE_UPLOAD
    });

var s3Adapter = new S3Adapter(
        process.env.S3_ACCESS_KEY, process.env.S3_SECRET_KEY, process.env.S3_BUCKET
);

var api = new ParseServer({
//  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  // Don't forget to change to https if needed
//  filesAdapter: fsAdapter,
  filesAdapter: S3Adapter,
  liveQuery: {
    classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('Make sure to star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
