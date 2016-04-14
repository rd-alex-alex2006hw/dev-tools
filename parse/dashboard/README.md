➜  parse-server git:(master) ✗ parse-server

  Usage: parse-server [options] <path/to/configuration.json>

  Options:

    -h, --help                                             output usage information
    --appId <appId>                                        Your Parse Application ID
    --masterKey <masterKey>                                Your Parse Master Key
    --port [port]                                          The port to run the ParseServer. defaults to 1337.
    --databaseURI [databaseURI]                            The full URI to your mongodb database
    --serverURL [serverURL]                                URL to your parse server with http:// or https://.
    --clientKey [clientKey]                                Key for iOS, MacOS, tvOS clients
    --javascriptKey [javascriptKey]                        Key for the Javascript SDK
    --restAPIKey [restAPIKey]                              Key for REST calls
    --dotNetKey [dotNetKey]                                Key for Unity and .Net SDK
    --cloud [cloud]                                        Full path to your cloud code main.js
    --push [push]                                          Configuration for push, as stringified JSON. See https://github.com/ParsePlatform/parse-server/wiki/Push
    --oauth [oauth]                                        Configuration for your oAuth providers, as stringified JSON. See https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide#oauth
    --fileKey [fileKey]                                    Key for your files
    --facebookAppIds [facebookAppIds]                      Comma separated list for your facebook app Ids
    --enableAnonymousUsers [enableAnonymousUsers]          Enable (or disable) anon users, defaults to true
    --allowClientClassCreation [allowClientClassCreation]  Enable (or disable) client class creation, defaults to true
    --mountPath [mountPath]                                Mount path for the server, defaults to /parse
    --databaseAdapter [databaseAdapter]                    Adapter module for the database sub-system
    --filesAdapter [filesAdapter]                          Adapter module for the files sub-system
    --loggerAdapter [loggerAdapter]                        Adapter module for the logging sub-system
    --maxUploadSize [maxUploadSize]                        Max file size for uploads.

  Configure From Environment:

    $ PARSE_SERVER_APPLICATION_ID='appId'
    $ PARSE_SERVER_MASTER_KEY='masterKey'
    $ PORT='port'
    $ PARSE_SERVER_DATABASE_URI='databaseURI'
    $ PARSE_SERVER_URL='serverURL'
    $ PARSE_SERVER_CLIENT_KEY='clientKey'
    $ PARSE_SERVER_JAVASCRIPT_KEY='javascriptKey'
    $ PARSE_SERVER_REST_API_KEY='restAPIKey'
    $ PARSE_SERVER_DOT_NET_KEY='dotNetKey'
    $ PARSE_SERVER_CLOUD_CODE_MAIN='cloud'
    $ PARSE_SERVER_PUSH='push'
    $ PARSE_SERVER_OAUTH_PROVIDERS='oauth'
    $ PARSE_SERVER_FILE_KEY='fileKey'
    $ PARSE_SERVER_FACEBOOK_APP_IDS='facebookAppIds'
    $ PARSE_SERVER_ENABLE_ANON_USERS='enableAnonymousUsers'
    $ PARSE_SERVER_ALLOW_CLIENT_CLASS_CREATION='allowClientClassCreation'
    $ PARSE_SERVER_MOUNT_PATH='mountPath'
    $ PARSE_SERVER_DATABASE_ADAPTER='databaseAdapter'
    $ PARSE_SERVER_FILES_ADAPTER='filesAdapter'
    $ PARSE_SERVER_LOGGER_ADAPTER='loggerAdapter'
    $ PARSE_SERVER_MAX_UPLOAD_SIZE='maxUploadSize'

  Get Started guide:

    Please have a look at the get started guide!
    https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide


  Usage with npm start

    $ npm start -- path/to/config.json
    $ npm start -- --appId APP_ID --masterKey MASTER_KEY --serverURL serverURL
    $ npm start -- --appId APP_ID --masterKey MASTER_KEY --serverURL serverURL


  Usage:

    $ parse-server path/to/config.json
    $ parse-server -- --appId APP_ID --masterKey MASTER_KEY --serverURL serverURL
    $ parse-server -- --appId APP_ID --masterKey MASTER_KEY --serverURL serverURL

