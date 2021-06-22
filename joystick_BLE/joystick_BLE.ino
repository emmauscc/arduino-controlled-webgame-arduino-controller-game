#include <SoftwareSerial.h>
#define joyX A0
#define joyY A1

// Bluetooth TX -> Arduino D8
const int BLUETOOTH_TX = 8;
// Bluetooth RX -> Arduino D7
const int BLUETOOTH_RX = 7;

SoftwareSerial bt(BLUETOOTH_TX, BLUETOOTH_RX);

void setup() {
  Serial.begin(9600);
  bt.begin(9600);
  Serial.begin(9600);
  Serial.println("Ready to Receive and Send");

}

void loop() {
  int xValue = analogRead(joyX);
  int yValue = analogRead(joyY);

  if(xValue == 1023 && yValue>=200 && yValue<=900){
    bt.print('w');
    Serial.println('w');
    delay(10);
  }else if(xValue>=200 && xValue<=900 && yValue == 0){
    bt.print('a   ');
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
  }else{
  }

  //READING FROM WEB
  if (bt.available()) {

    while (bt.available()) {

      int incoming = bt.read();

      //sample -> if message is A, do something

      if(incoming ==49){ //acsii code for "1"

        Serial.println(1); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING
             
      }else if(incoming ==50){ //acsii code for "2"
        Serial.println(2); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING
      }else if(incoming ==51){ //acsii code for "3"
        Serial.println(3); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING
      }

      //End of Sample
      
    }  
  }
  
  delay(10);
}
