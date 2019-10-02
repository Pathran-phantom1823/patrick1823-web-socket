var btnConnect = document.getElementById('connectbtn');
var btnDisConnect = document.getElementById('disconnectbtn');
var btnPublish = document.getElementById('publish');
var btnSubscribe = document.getElementById('subscribe');
var btnUnSubscribe = document.getElementById('unsubscribe');
var conRes = document.getElementById('connectresult');
var timestamp = new Date()
var data;

// basic functionalities

alert("PLEASE CONNECT THE BROKER FIRST")
btnConnect.addEventListener('click', function (e) {
      e.preventDefault();
      client = mqtt.connect(document.getElementById('brokerAdd').value);
      console.log(document.getElementById('brokerAdd').value)
      client.on("connect", function () {
            conRes.value = "Successfully connected";
            conRes.style.backgroundColor = 'rgb(0, 204, 0)';
            conRes.style.color = 'yellow';
            console.log("Successfully connected");

      });
      client.on("message", function (topic, payload) {
            var table = document.getElementById('tbody');
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = topic;
            cell2.innerHTML = payload;
            cell3.innerHTML = timestamp;
      })
});

btnPublish.addEventListener('click', function (e) {
      e.preventDefault();
      // topic = document.getElementById('topic').value

      client.publish(document.getElementById('topic').value, document.getElementById('payload').value)
})

btnSubscribe.addEventListener('click', function (e) {
      e.preventDefault();
      client.subscribe(document.getElementById('subscribetopic').value);
      console.log(document.getElementById('subscribetopic').value)
})

btnDisConnect.addEventListener('click', function () {
      console.log(client.end());
      client.end();
      conRes.value = "Successfully Disconnected";
      conRes.style.backgroundColor = 'rgb(204, 0, 0)';
      conRes.style.color = 'yellow';
})

btnUnSubscribe.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('unsubscribe')
      client.unsubscribe(topic, payload);

})
















































