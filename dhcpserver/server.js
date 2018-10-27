var dhcpd = require('dhcp');
///////////////////////////////
var INTERFACE='192.168.3.1'
var RANGE = [ "192.168.3.100", "192.168.3.200"]
var STATIC = {
   "0:1c:c2:17:b2:f3": "192.168.3.11"
}
var HOST_COUNTER = 0
///////////////////////////////
var s = dhcpd.createServer({
  // System settings
  range: RANGE,
  forceOptions: ['hostname'], // Options that need to be sent, even if they were not requested
  static: STATIC ,
  // Option settings
  netmask: '255.255.255.0',
  router: [ INTERFACE ],
  dns: ["75.75.75.75", "8.8.8.8"],
  server: INTERFACE, // This is us
  hostname: hostname()
});
function hostname () {
  var name = '225lee-' + ++HOST_COUNTER
  console.log('1.hostname : ', name)
  return name
}

s.listen(INTERFACE);
