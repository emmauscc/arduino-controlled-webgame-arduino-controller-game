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
    }
    /*function keyPress(e){
        if(e.key=="a"){
            if($(".player").attr('gridNum')==0){

            }else if($(".player").attr('gridNum')==10){

            }else if($(".player").attr('gridNum')==20){

            }else{
                x=$('.player').attr('gridNum');
                if(x<9 && x>0){
                    $('.player').removeClass().addClass('top');
                }else if(x==19){
                    $('.player').removeClass().addClass('holeRight');
                }else if(x<19 && x>10){
                    $('.player').removeClass().addClass('middle');
                }else if(x<29 && x>20){
                    $('.player').removeClass().addClass('bottom');
                }else if(x==29){
                    $('.player').removeClass().addClass('holeRight');
                }
                x=x-1;
                $('.player').attr('gridNum', x);
            }
        }
    }*/
    for(var i=1;i<3;i++){
        $('body').append('<div></div>').children().last().addClass('rowBorder').attr('id', 'row'+i);
    }
    $('body').append('<div></div>').children().last().addClass('lives');
    for(var i=0;i<3;i++){
        $('.lives').append('<div></div>').children().last().addClass('alive').attr('life', i);
    }
    /*for(var i=0;i<30;i++){
        if(i>=0 && i<10){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', '1').addClass('grid').addClass('empty');
        }else if(i==10){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', '1').addClass('player');
        }else{
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', '1').addClass('grid').addClass('empty');
        }
    }*/

    for(var j=1;j<3;j++){
        for(var i=0;i<30;i++){
            if(j==1){
                if(i<2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==2){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>2 && i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('player');
                }else if(i>10 && i<12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==12){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>12 && i<14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==14){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>14 && i<19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==19){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'hole').addClass('grid').addClass('gridStyle');
                }else if(i>19 && i<24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'obstacle').addClass('grid').addClass('obstacle');
                }else if(i>24){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }
            }else if(j % 2==0){
                if(i<10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'empty').addClass('grid').addClass('gridStyle');
                }else if(i==10){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', j).attr('status', 'hole').addClass('grid').addClass('gridStyle');
                }else if(i>10){
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
    /*for(var i=0;i<30;i++){
        if(i==0){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('holeLeft').addClass('grid');
        }else if(i>0 && i<9){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('top').addClass('grid');
        }else if(i==9){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('topRight').addClass('grid');
        }else if(i==10){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('player').addClass('grid');
        }else if(i>10 && i<19){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('middle').addClass('grid');
        }else if(i==19){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('holeRight').addClass('grid');
        }else if(i==20){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('bottomLeft').addClass('grid');
        }else if(i>20 && i<29){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('bottom').addClass('grid');
        }else if(i==29){
            $('#row1').append('<div></div>').children().last().attr('gridNum', i).attr('rowNum', 1).addClass('holeRight').addClass('grid');
        }
    }

    /*for(var j=1;j<4;j++){
        for(var i=0;i<30;i++){
            if(j==2){
                if(i==20){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                }else if(i==9){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                }else{
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                }
            }else{
                if(i==0){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                }else if(i==29){
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                }else{
                    $('#row'+j).append('<div></div>').children().last().attr('gridNum', +i).attr('rowNum', j);
                }
            }
        }
    }*/
    

    /*for(var i=0; i<39; i++){
        for(var j=0;j<3;j++){
            if(i==10){
                if($('#grid'+i).attr('rowNum', j)>0){
                    $('#grid'+i).css('float', 'none');
                }
            }else if(i==20){
                if($('#grid'+i).attr('rowNum', j)>0){
                    $('#grid'+i).css('float', 'none');
                }
            }else if(i==30){
                if($('#grid'+i).attr('rowNum', j)>0){
                    $('#grid'+i).css('float', 'none');
                }
            }else{
    
            }
        }
    }*/
});

var x;
var y;
var lifeNum=0;
function statusCheck(){
    setTimeout(function(){
        if($('.player').attr('status')=="hole"){
            y=y+1
            $('.player').removeClass().addClass('gridStyle').addClass('grid');
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
        }else if($('.player').attr('status')=="obstacle"){
            $('.player').removeClass().addClass('obstacle').addClass('grid');
            x=x-1;
            $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
            $('.alive[life='+lifeNum+']').removeClass().addClass('dead');
            lifeNum=lifeNum+1;
        }else{

        }
    }, 1000);
}
function keyIn(e){
    x=parseInt($('.player').attr('gridNum'));
    y=parseInt($('.player').attr('rowNum'));
    setTimeout (function(){
        if(e=="a"){
            if(x==0){

            }else if(x==10){

            }else if(x==20){

            }else{
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x-1;
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
                statusCheck();
            }
        }else if(e=="d"){
            if(x==9){

            }else if(x==19){

            }else if(x==29){

            }else{
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x+1;
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
                statusCheck();
            }
        }else if(e=="w"){
            if(x>=0 && x<=9){

            }else if(x>=20 && x<=29){
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                    x=x-10;
                    $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
                    statusCheck();
            }else{
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x-10;               
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
                setTimeout(function(){
                    $('.player').removeClass().addClass('gridStyle').addClass('grid');
                    x=x+10;                  
                    $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
                }, 1000);
                statusCheck();
            }
        }else if(e=="s"){
            if(x<20){
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x+10;
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
                statusCheck();
            }else if(x>=20 && x<=29){
                $('.player').removeClass().addClass('gridStyle').addClass('grid');
                x=x-10;
                $('#row'+y).children('.grid[gridNum='+x+']').removeClass().addClass('player');
                statusCheck();
            }
        }
    }, 500);
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