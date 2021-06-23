var bluetoothDevice;
var customCharacteristic;
var myCharacteristic;

function messageReceived(received){
    
    //Do Something with incoming messages//
    console.log(received);
}

//call "sendToBLE(inputToSend)" to send message to Arduino via BLE//

function connectBLE(){

    var currentService = document.getElementById('serviceAddress').value;

    console.log(currentService);
    var currentCharacteristic = document.getElementById('characteristicAddress').value;

    document.getElementById('serviceAddress').disabled = 'disabled';
    document.getElementById('characteristicAddress').disabled = 'disabled';

    console.log("running");

    options = {};
    options.acceptAllDevices = true;

    bluetoothDevice = null;
    console.log('Requesting Bluetooth Device...');
    navigator.bluetooth.requestDevice({filters: [{services: [currentService]}]})
    .then(device => {
      bluetoothDevice = device;
      console.log('Connecting to GATT Server...');
      return device.gatt.connect();

    })
    .then(server => {
      console.log('Getting Service...');
      console.log(server.getPrimaryService(currentService));
      return server.getPrimaryService(currentService);
    })
    .then(service => {
      console.log('Getting Characteristics...');     
      service.getCharacteristic(currentCharacteristic);
      myCharacteristic = 
        service.getCharacteristic(currentCharacteristic);
      return service.getCharacteristic(currentCharacteristic);

    })
    .then(characteristic => {
      customCharacteristic = characteristic;

      return customCharacteristic.startNotifications().then(_ => {
      console.log('> Notifications started');
      customCharacteristic.addEventListener('characteristicvaluechanged',handleCustomChanged);
      });
  })

    .catch(error => {
      console.log(error);
    });

}

function disconnectBLE(){

  console.log(bluetoothDevice.gatt.connected);

  if (bluetoothDevice.gatt.connected) {
    bluetoothDevice.gatt.disconnect();

    console.log("Bluetooth disconnected");
  } else {
    console.log('> Bluetooth Device is already disconnected');
  }
}

function handleCustomChanged(event) {
    let value = event.target.value;

    let a = [];

    for (let i = 0; i < value.byteLength; i++) {
      a.push(String.fromCharCode(value.getUint8(i)));
    }
    //console.log(a.join(""));

    messageReceived(a.join(""));

  }

function sendToBLE(toSend){

  while(toSend.length < 4){

    toSend= toSend+"X";
  }
  const buffer = str2ab(toSend);

  const view = new Int16Array(buffer);

  console.log("sending message: "+ view);

  customCharacteristic.writeValue(view);
    //forked from https://gist.github.com/skratchdot/e095036fad80597f1c1a //

  function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
}

function detectDifficulty(){
  if($('#difficulty').val()=="easy"){
    sendToBLE('1');
  }else if($('#difficulty').val()=="normal"){
    sendToBLE('2');
  }else if($('#difficulty').val()=="hard"){
    sendToBLE('3');
  }
}


  


