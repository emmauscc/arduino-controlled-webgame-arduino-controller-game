var maxRowNum;
$(document).ready(function(){
    /*for(var i=1;i<4;i++){
        $('body').append('<div></div>').children().last().addClass('row').attr('id', 'row'+i);
    }    
    for(var j=1;j<4;j++){
        for(var i=0;i<30;i++){
            if(j==2){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('grid').addClass('gridStyle');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('middle').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('right').addClass('grid').addClass('gridStyle');
                }
            }else if(j==1){
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle').addClass('gridStyle');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('grid').addClass('gridStyle');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('player').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('middle').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }
            }else{
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>0 && i<9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('grid').addClass('gridStyle');
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('top').addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>10 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('middle').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }else if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('left').addClass('grid').addClass('gridStyle');
                }else if(i>20 && i<29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('bottom').addClass('grid').addClass('gridStyle');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).addClass('right').addClass('grid').addClass('gridStyle');
                }//else{
                //  $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                //}
                
            }
        }
    }*/
    for(var i=1;i<4;i++){
        $('body').append('<div></div>').children().last().addClass('rowBorder').attr('id', 'row'+i);
        maxRowNum=i;
        console.log(maxRowNum);
    }
    $('body').append('<div></div>').children().last().addClass('lives');
    for(var i=0;i<3;i++){
        $('.lives').append('<div></div>').children().last().addClass('alive').attr('life', i);
    }
    $('body').append('<div></div>').children().last().addClass('coins');
    for(var i=0;i<3;i++){
        $('.coins').append('<div></div>').children().last().addClass('tBF').attr('coinsFound', i);
    }
    for(var j=1;j<4;j++){
        for(var i=0;i<30;i++){
            if(j==1){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('player');
                }else if(i>10 && i<12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>14 && i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'coin').addClass('grid').addClass('coin');
                }else if(i>19 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>24 && i<28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==28){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle').addClass('hole');
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }else if(j % 2==0){
                if(i<8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle').addClass('upperHole');
                }else if(i<10 && i>8){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'dropDown').addClass('grid').addClass('gridStyle');
                }else if(i>10 &&i<15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==15){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'heart').addClass('grid').addClass('heart');
                }else if(i>15 &&i<18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'jumpUp').addClass('grid').addClass('gridStyle');
                }else if(i>18){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }else if(j % 2!=0){
                if(i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'hole').addClass('grid').addClass('gridStyle');
                }else if(i>19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }
        }
    }
});

var x;
var y;
var lifeNum=0;
var numOfCoinsFound=0;
function statusCheck(){
    /*if($('.player').attr('status')=="hole"){
        y=y+1
        $('.player').removeClass().addClass('gridStyle').addClass('grid');
        $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
    }else */if($('.player').attr('status')=="obstacle"){
        setTimeout(function(){
            $('.player').removeClass('player').addClass('obstacle');
            x=x-1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('obstacle').addClass('player');
            $('.alive[life='+lifeNum+']').removeClass().addClass('dead');
            lifeNum=lifeNum+1;
        }, 850);
    }else if($('.player').attr('status')=="heart"){
        $('#row'+y).children('.grid[gridNum='+x+']').removeClass('heart').addClass('player');
        lifeNum=lifeNum-1
        $('.dead[life='+lifeNum+']').removeClass().addClass('alive');
        $('.player').attr('status', 'empty');
    }else if($('.player').attr('status')=="coin"){
        $('#row'+y).children('.grid[gridNum='+x+']').removeClass('coin').addClass('player');
        $('.player').attr('status', 'empty');
        $('.tBF[coinsFound='+numOfCoinsFound+']').removeClass().addClass('found');
        numOfCoinsFound=numOfCoinsFound+1;
    }else{

    }
}
function keyIn(e){
    x=parseInt($('.player').attr('gridNum'));
    y=parseInt($('.player').attr('rowNum'));
    if(e=="a"){
        if(x==0){

        }else if(x==10){

        }else if(x==20){

        }else{
            $('.player').removeClass('player').addClass('gridStyle');
            x=x-1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }
    }else if(e=="d"){
        if(x==9){

        }else if(x==19){

        }else if(x==29){

        }else{
            $('.player').removeClass('player').addClass('gridStyle');
            x=x+1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }
    }else if(e=="w"){
        if($('.player').attr('status')=="jumpUp"){
            if($('.player').attr('rowNum')==1){

            }else{
                y=y-1
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
            }
        }else if($('.player').attr('status')=="dropDown"){

        }else if(x>=0 && x<=9){

        }else if(x>=20 && x<=29){
            $('.player').removeClass('player').addClass('gridStyle');
                x=x-10;
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
                statusCheck();
        }else{
            $('.player').removeClass('player').addClass('gridStyle');
            x=x-10;               
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            setTimeout(function(){
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x+10;                  
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
            }, 1000);
            statusCheck();
        }
    }else if(e=="s"){
        if($('.player').attr('status')=="dropDown"){
            if($('.player').attr('rowNum')==maxRowNum){

            }else{
                y=y+1
                $('.player').removeClass('player').addClass('gridStyle');
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            }
        }else if($('.player').attr('status')=="jumpUp"){

        }else if(x<20){
            $('.player').removeClass('player').addClass('gridStyle');
            x=x+10;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }else if(x>=20 && x<=29){
            $('.player').removeClass('player').addClass('gridStyle');
            x=x-10;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass('gridStyle').addClass('player');
            statusCheck();
        }
    }
}

var bluetoothDevice;
var customCharacteristic;
var myCharacteristic;

function messageReceived(received){
    
    //Do Something with incoming messages//
    console.log(received);
    keyIn(received);
}

//call "sendToBLE(inputToSend)" to send message to Arduino via BLE//

function connectBLE(){

    var currentService = "0000ffe0-0000-1000-8000-00805f9b34fb";

    console.log(currentService);
    var currentCharacteristic = "0000ffe1-0000-1000-8000-00805f9b34fb"

    /*document.getElementById('serviceAddress').disabled = 'disabled';
    document.getElementById('characteristicAddress').disabled = 'disabled';*/

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