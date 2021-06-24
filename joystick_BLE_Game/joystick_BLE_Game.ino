#include <SoftwareSerial.h>
#define joyX A0
#define joyY A1

// Bluetooth TX -> Arduino D8
const int BLUETOOTH_TX = 8;
// Bluetooth RX -> Arduino D7
const int BLUETOOTH_RX = 7;

SoftwareSerial bt(BLUETOOTH_TX, BLUETOOTH_RX);
//int lives=3;
//String joystickStatus="";

void setup() {
  Serial.begin(9600);
  bt.begin(9600);
  Serial.begin(9600);
  Serial.println("Ready to Receive and Send");

}

void loop() {
  int xValue = analogRead(joyX);
  int yValue = analogRead(joyY);

  //if (joystickStatus == "enabled"){
    if(xValue == 1023 && yValue>=200 && yValue<=900){
      bt.print('w');
      Serial.println('w');
    delay(10);
    }else if(xValue>=200 && xValue<=900 && yValue == 0){
      bt.print('a');
      Serial.println('a');
      delay(10);
    }else if(xValue == 0 && yValue>=200 && yValue<=900){
      bt.print('s');
      Serial.println('s');
      delay(10);
    }else if(xValue>=200 && xValue<=900 && yValue == 1023){
      bt.print('d');
      Serial.println('d');
      delay(10);
    }
  //}
  //READING FROM WEB
  /*if (bt.available()) {

    while (bt.available()) {

      int incoming = bt.read();

      //sample -> if message is A, do something

      if(incoming ==49){ //acsii code for "1"

        Serial.println("Difficulty: easy"); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING
        joystickStatus = "enabled";
      }else if(incoming ==50){ //acsii code for "2"
        Serial.println("Difficulty: normal"); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING
        joystickStatus = "enabled";
      }else if(incoming ==51){ //acsii code for "3"
        Serial.println("Difficulty: hard"); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING
        joystickStatus = "enabled";
      }else if(incoming ==104){ //ascii code for "h"
        if(joystickStatus == "enabled"){
          //Serial.println('h'); //Write to Serial Monitor
          if (lives!= 0){
            lives=lives-1;
          }
          Serial.println();
          Serial.print("lives: ");
          Serial.print(lives);
  
          delay(100);
  
          bt.print("message received"); //Write to Browser
        }
      }else if(incoming ==110){ //ascii code for "n"
        if(joystickStatus == "enabled"){
          //Serial.println('n'); //Write to Serial Monitor
          lives=lives+1;
          Serial.println();
          Serial.print("lives: ");
          Serial.println(lives);
  
          delay(100);
  
          bt.print("message received"); //Write to Browser
        }

      //End of Sample
    }else if(incoming ==102){ // ascii code for "f"
        Serial.println('f'); //Write to Serial Monitor
        Serial.println("Game Over");

        delay(100);

        bt.print("message received"); //Write to Browser

        joystickStatus = "disabled";
    }   
  }
  
  delay(10);
}*/
}
