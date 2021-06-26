#include <SoftwareSerial.h>
int seconds;
int minutes;
int over;
int countdownStatus;

// Bluetooth TX -> Arduino D8
const int BLUETOOTH_TX = 8;
// Bluetooth RX -> Arduino D7
const int BLUETOOTH_RX = 7;

SoftwareSerial bt(BLUETOOTH_TX, BLUETOOTH_RX);

void setup() {
  Serial.begin(9600);
  bt.begin(9600);
  Serial.println("Ready to Receive and Send");
  seconds=1;
  minutes=2;
  over=0;
  countdownStatus=0;
}

void loop() {
  if (bt.available()) {

    while (bt.available()) {

      int incoming = bt.read();

      //sample -> if message is A, do something

      if(incoming ==99){ //acsii code for "c"

        Serial.println("Start Countdown"); //Write to Serial Monitor

        delay(100);

        bt.print("Start Countdown"); //Write to Browser

        //DO SOMETHING
        countdownStatus = 1;
      }
    }
  }
  if(countdownStatus==1){
    if(over==0){
      if(seconds!= 0 && minutes!= 0 || seconds==0 && minutes!=0 || seconds!= 0 && minutes==0){
        if(seconds==0 && minutes!=0){
          seconds=59;
          minutes=minutes-1;
  
          bt.print("0");
          bt.print(minutes); 
          bt.print(":");
          bt.print(seconds);
          bt.println();
          
          Serial.print("0");
          Serial.print(minutes); 
          Serial.print(":");
          Serial.print(seconds);
          Serial.println();
        }else if(seconds<=10){
          seconds=seconds-1; 

          bt.print("0");
          bt.print(minutes); 
          bt.print(":0");
          bt.print(seconds);
          bt.println();
          
          Serial.print("0");
          Serial.print(minutes); 
          Serial.print(":0");
          Serial.print(seconds);
          Serial.println();
        }else{
          seconds=seconds-1;

          bt.print("0");
          bt.print(minutes); 
          bt.print(":");
          bt.print(seconds);
          bt.println();
          
          Serial.print("0");
          Serial.print(minutes); 
          Serial.print(":");
          Serial.print(seconds);
          Serial.println();
        }
      }else{ // 00:00
        bt.print("Game Over");
        Serial.print("Game Over");
        over=1;
      }
      delay (1000); 
    }   
  }
}
