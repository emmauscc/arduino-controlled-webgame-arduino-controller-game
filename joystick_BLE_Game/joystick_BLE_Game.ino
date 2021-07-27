#include <SoftwareSerial.h>
#define joyX A0
#define joyY A1

// Bluetooth TX -> Arduino D8
const int BLUETOOTH_TX = 8;
// Bluetooth RX -> Arduino D7
const int BLUETOOTH_RX = 7;

int seconds;
int minutes;
int over;
int countdownStatus;

SoftwareSerial bt(BLUETOOTH_TX, BLUETOOTH_RX);
int lives=4;
String joystickStatus="";

void setup() {
  Serial.begin(9600);
  bt.begin(9600);
  Serial.begin(9600);
  Serial.println("Ready to Receive and Send");
  seconds=1;
  minutes=2;
  over=0;
  countdownStatus=0;

  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);

}

void loop() {
  int xValue = analogRead(joyX);
  int yValue = analogRead(joyY);

  if (joystickStatus == "enabled"){
    if(xValue == 1023 && yValue>=200 && yValue<=900){
      bt.print('w');
      Serial.println('w');
      delay(250);
    }else if(xValue>=200 && xValue<=900 && yValue == 0){
      bt.print('a');
      Serial.println('a');
      delay(250);
    }else if(xValue == 0 && yValue>=200 && yValue<=900){
      bt.print('s');
      Serial.println('s');
      delay(250);
    }else if(xValue>=200 && xValue<=900 && yValue == 1023){
      bt.print('d');
      Serial.println('d');
      delay(250);
    }
  }
  //READING FROM WEB
  if (bt.available()) {

    while (bt.available()) {

      int incoming = bt.read();

      //sample -> if message is A, do something
      if(over==0){
          if(incoming ==49){ //acsii code for "1"
    
            Serial.println("Difficulty: easy"); //Write to Serial Monitor
    
            bt.print("message received"); //Write to Browser
    
            //DO SOMETHING
            joystickStatus = "enabled";
            lives=4;
          }else if(incoming ==50){ //acsii code for "2"
            Serial.println("Difficulty: normal"); //Write to Serial Monitor
    
            bt.print("message received"); //Write to Browser
    
            //DO SOMETHING
            joystickStatus = "enabled";
            lives=4;
          }else if(incoming ==51){ //acsii code for "3"
            Serial.println("Difficulty: hard"); //Write to Serial Monitor
    
            bt.print("message received"); //Write to Browser
    
            //DO SOMETHING
            joystickStatus = "enabled";
            lives=4;
          }else if(incoming ==104){ //ascii code for "h"
            if(joystickStatus == "enabled"){
              //Serial.println('h'); //Write to Serial Monitor
              if (lives!= 0){
                lives=lives-1;
              }
              //Serial.println();
              Serial.print("lives: ");
              Serial.print(lives);
              Serial.println();
      
      
              bt.print("message received"); //Write to Browser
            }
          }else if(incoming ==110){ //ascii code for "n"
            if(joystickStatus == "enabled"){
              //Serial.println('n'); //Write to Serial Monitor
              if (lives!=4){
                lives=lives+1;
              }
              //Serial.println();
              Serial.print("lives: ");
              Serial.print(lives);
              Serial.println();
      
              bt.print("message received"); //Write to Browser
            }
    
          //End of Sample
          }else if(incoming ==102){ // ascii code for "f"
            if(joystickStatus == "enabled"){
              //Serial.println('f'); //Write to Serial Monitor
              Serial.println("Game Over");
      
              delay(100);
      
              bt.print("message received"); //Write to Browser
      
              joystickStatus = "disabled";
              over=1;
            }
          }else if(incoming ==99){ //acsii code for "c"
          
              Serial.println("Start Countdown"); //Write to Serial Monitor
      
              delay(100);
      
              bt.print("Start Countdown"); //Write to Browser
      
              //DO SOMETHING
              countdownStatus = 1;
          } 
      }
    
  /*if(countdownStatus==1){
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

          bt.println("0");
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
  }*/
    if(over==0){
      if(lives==0){
        digitalWrite(9, LOW);
        digitalWrite(10, LOW);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);
        //countdownStatus=0;
          bt.println("");
          bt.print("Game Over");
          Serial.println("Game Over"); 
          over=1;
          joystickStatus="disabled";
      }else if (lives==1){
        digitalWrite(9, HIGH);
        digitalWrite(10, LOW);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);
      }else if (lives==2){
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);
      }else if (lives==3){
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(12, LOW);
      }else if (lives==4){
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(12, HIGH);
      }
      delay(100); 
    }
  
  }
    
  }
}
