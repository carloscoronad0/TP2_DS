var mqtt = require('mqtt');
const dayjs = require('dayjs')

var broker = process.env.NOMBREBROK;
var port = process.env.PORT;
var topic = process.env.TOPIC;
var containerName = process.env.HOSTNAME;
var ip = process.env.IP

const protocol = 'mqtt'
const complete_host_URI = protocol.concat('://',broker, ':', port)

var client = mqtt.connect(complete_host_URI);

client.on('connect', function () {
  setInterval(function (){
    msg = {"time":dayjs().format("ddd MMM DD HH:mm:ss ZZ YYYY"), "container":containerName, "ip":ip}
    client.publish(topic, JSON.stringify(msg));
  }, 5000);
})