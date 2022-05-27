var mqtt = require('mqtt');
var broker, port,topic,clientId;
var client = mqtt.connect({ host: broker, port: port, clientId: clientId});

setInterval(function (){

  msg = {"time":""}
  client.publish(topic, 'Hello mqtt ' + (num++),{qos:1, retain: true});
}, 5000);

function dateNow(){
  var d_t = new Date(year, month, day, hour, minute, second, millisecond);
  let year = d_t.getFullYear();
  let month = d_t.getMonth();
  let day = d_t.getDate();
  let hour = d_t.getHours();
  let minute = d_t.getMinutes();
  let second = d_t.get
}