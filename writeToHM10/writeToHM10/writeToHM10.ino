#include <Servo.h>
#include <SoftwareSerial.h>

const unsigned long BAUD_RATE = 9600;

// Bluetooth TX -> Arduino D8
const int BLUETOOTH_TX = 8;
// Bluetooth RX -> Arduino D7
const int BLUETOOTH_RX = 7;

Servo leftHip;
Servo rightHip;
Servo leftAnkle;
Servo rightAnkle;

SoftwareSerial bt(BLUETOOTH_TX, BLUETOOTH_RX);

void setup() {
	// Baud rate must be same for bluetooth and serial.
	// It helps to prevent interference.

  Serial.begin(9600);
  leftHip.attach(3); 
  rightHip.attach(2); 
  leftAnkle.attach(4);
  rightAnkle.attach(5);

   resetServos();
   
   delay(1000);
	bt.begin(BAUD_RATE);
	Serial.begin(BAUD_RATE);
	Serial.println("Ready to Receive and Send");

}

void loop() {

  //READING FROM WEB
	if (bt.available()) {

    while (bt.available()) {

      int incoming = bt.read();

      //sample -> if message is A, do something

      if(incoming ==65){ //acsii code for "A"

        Serial.println(incoming); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING

        leftHip.write(90);

        delay(500);

        leftHip.write(0);      
      }else{
        Serial.println(incoming); //Write to Serial Monitor

        delay(100);

        bt.print("message received"); //Write to Browser

        //DO SOMETHING
        
        rightHip.write(90);

        delay(500);

        resetServos();    
      }

      //End of Sample
      
  	}  
	}

    //WRITING TO WEB//

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

void moveForward(){

  moveServo(rightHip,60,1);
  moveServo(leftHip,60,1);

  moveServo(rightAnkle,130,5);

  for(int j=60;j<120;j=j+5){
    
    moveServo(rightHip,j,1);
    
    moveServo(leftHip,j,1);
    
    delay(5);
  }
  
  delay(100);

  moveServo(rightAnkle,90,5);
  
  moveServo(leftAnkle,40,5);

  for(int j=120;j>60;j=j-5){
     
    moveServo(rightHip,j,1);
    
    moveServo(leftHip,j,1);
    delay(5);
  }  
  delay(100);
  
  moveServo(leftAnkle,90,5);

  delay(10);
  
}

void moveServo(Servo &currentServo,int setAngle,int delayMS){

   int i=(int)currentServo.read();

   while(i !=setAngle){

    currentServo.write(i);

      if(i<setAngle){

        i=i+5;
      }else{
        i=i-5;
      }
      delay(delayMS);
    }
}

void resetServos(){
  leftHip.write(90);
  rightHip.write(90);
  leftAnkle.write(90);
  rightAnkle.write(90);

}
