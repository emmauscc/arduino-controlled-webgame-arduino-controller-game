#include <SoftwareSerial.h>
#define joyX A0
#define joyY A1

// Bluetooth TX -> Arduino D8
const int BLUETOOTH_TX = 8;
// Bluetooth RX -> Arduino D7
const int BLUETOOTH_RX = 7;

void setup() {
  Serial.begin(9600);
  bt.begin(9600);
  Serial.println("Ready to Receive and Send");

}

void loop() {
  int xValue = analogRead(joyX);
  int yValue = analogRead(joyY);

  if(xValue == 1023 && yValue>=200 && yValue<=900){
    Serial.println('w');
    delay(10);
  }else if(xValue>=200 && xValue<=900 && yValue == 0){
    Serial.println('a');
    delay(10);
  }else if(xValue == 0 && yValue>=200 && yValue<=900){
    Serial.println('s');
    delay(10);
  }else if(xValue>=200 && xValue<=900 && yValue == 1023){
    Serial.println('d');
    delay(10);
  }else{
  }
  delay(10);
  
  while (Serial.available()) {
      
      String input = Serial.readStringUntil('\r');
      
      //String input = Serial.readStringUntil('\r');
      String output = "";
      for (int i = 0; i < input.length(); i++) {
        char c = input.charAt(i);
        if (c != 10 && c != 13) { // Don't send line end characters to HM 10 
          output += c;
        }
      }
      Serial.print("Entered: "); 
      Serial.println(output);
      bt.print(output);
    }
    
}
