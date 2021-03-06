#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#define joyX A0
#define joyY A1

// Bluetooth TX -> Arduino D8
const int BLUETOOTH_TX = 8;
// Bluetooth RX -> Arduino D7
const int BLUETOOTH_RX = 7;

SoftwareSerial bt(BLUETOOTH_TX, BLUETOOTH_RX);
LiquidCrystal_I2C lcd(0x27,16,2);

byte Heart[8] = {
  0b00000,
  0b01010,
  0b11111,
  0b11111,
  0b01110,
  0b00100,
  0b00000,
  0b00000
};

int seconds;
int minutes;
int over = 1;
int lives;
int joystick = 0;
int score;
unsigned long startMillis;
int difficulty;

void setup() {
    Serial.begin(9600);
    bt.begin(9600);
    Serial.println("Ready");
  
    pinMode(9, OUTPUT);
    pinMode(10, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(12, OUTPUT);

    lcd.init();
    lcd.backlight();
    lcd.createChar(0, Heart);
}

void loop() {
  
  //if (bt.available()) {

    //while (bt.available()) {

      int incoming = bt.read();
      
      
          if(incoming ==49){ //acsii code for "1"

            /*bt.print("Difficulty: easy"); //Write to Browser
            bt.println();*/

            Serial.print("Difficulty: easy"); //Write to Serial Monitor
            /*Serial.println();
            Serial.print("difficulty number: ");
            Serial.print(incoming);*/
            Serial.println();
    
            lives=4;
            seconds=35;
            minutes=0;
            over=0;
            joystick = 1;
            score=0;
            difficulty=1;

            startMillis = millis();

            updateLife();
            
          }else if(incoming ==51){ //acsii code for "3"
            Serial.print("Difficulty: hard"); //Write to Serial Monitor
            /*Serial.println();
            Serial.print("difficulty number: ");
            Serial.print(incoming);*/
            Serial.println();
    
            /*bt.print("Difficulty: hard"); //Write to Browser
            bt.println();*/
    
            lives = 2;
            seconds=25;
            minutes=0;
            over=0;
            joystick = 1;
            score=0;
            difficulty=2;

            startMillis = millis();

            updateLife();
            
          }else if(incoming ==104){ //ascii code for "h"
            if(over == 0){
              if (lives!= 0){
                lives=lives-1;
              }

              updateLife();
              Serial.print("lives: ");
              Serial.print(lives);
              /*Serial.println();
              Serial.print("incoming number: ");
              Serial.print(incoming);*/
              Serial.println();

              /*bt.print("lives: "); 
              bt.print(lives);
              bt.println();*/

              checkSecondPass();
            }
          }else if(incoming == 110){ //ascii code for "n"
            if(over == 0){
              if(difficulty==1){
                if (lives!=4){
                  lives=lives+1;
                } 
              }else if(difficulty==2){
                if(lives!=2){
                  lives=lives+1;
                } 
              }

              updateLife();
              Serial.print("lives: ");
              Serial.print(lives);
              /*Serial.println();
              Serial.print("incoming number: ");
              Serial.print(incoming);*/
              Serial.println();
              
              /*bt.print("lives: ");
              bt.print(lives);
              bt.println();*/

              checkSecondPass();
            }
          }else if(incoming ==102){ // ascii code for "f"
            if(over == 0){
              Serial.println("Game Over");
      
              //bt.println("Game Over"); //Write to Browser
      
              over=1;
              joystick = 0;
              lives=0;
              difficulty=0;

              updateLife();

              lcd.clear();
              lcd.setCursor(3,0);
              lcd.print("Game Over");
            }
          }else if(incoming ==118){ // ascii code for "v"
            if(over == 0){
              delay(3000);
              Serial.println("Winner");

              //bt.println("Winner");
              score=(seconds*100)+lives*10;
              bt.print(score);
             
              lcd.clear();
              lcd.setCursor(4,0);
              lcd.print("Winner!");
              delay(3000);
              lcd.setCursor(2,1);
              lcd.print("Score: ");
              lcd.print(score);

              over=1;
              joystick = 0;
              lives = 0;
              difficulty=0;
            }
          }
    
      if(over==0){
        checkSecondPass();
         if(joystick == 1){
              int xValue = analogRead(joyX);
              int yValue = analogRead(joyY);
              checkSecondPass();
                  
              if(xValue > 900 && yValue>=200 && yValue<=900){
                bt.print('w');
                //Serial.println('w');
                checkSecondPass();
                delay(250);
              }else if(xValue>=200 && xValue<=900 && yValue < 100){
                bt.print('a');
                //Serial.println('a');
                checkSecondPass();
                delay(250);
              }else if(xValue < 100 && yValue>=100 && yValue<=900){
                bt.print('s');
                //Serial.println('s');
                checkSecondPass();
                delay(250);
              }else if(xValue>=100 && xValue<=900 && yValue > 900){
                bt.print('d');
                //Serial.println('d');
                checkSecondPass();
                delay(250);
              }
          }  
            
      }
    
  //}
 //}
}

void countdownFunction(){
  if(seconds!= 0 && minutes!= 0 || seconds==0 && minutes!=0 || seconds>1 && minutes==0){ // if 1:01- 1:59 or if 1:00 or if 0:02-0:59
      if(seconds==0 && minutes!=0){ // 1:00
        seconds=59;
        minutes=minutes-1;

        /*bt.print("0");
        bt.print(minutes); 
        bt.print(":");
        bt.print(seconds);
        bt.println();*/

        lcd.clear();
        lcd.setCursor(1,0);
        lcd.print("Time: 0");
        lcd.print(minutes);
        lcd.print(":");
        lcd.print(seconds);

        lcd.setCursor(1,1);
        lcd.print("Lives: "); 
        
        for(int i=0;i<lives;i++){
          lcd.write(byte(0));
        }
        
        /*Serial.print("0");
        Serial.print(minutes); 
        Serial.print(":");
        Serial.print(seconds);
        Serial.println();*/
      }else if(seconds<=10){ // 1:01 - 1:10
        seconds=seconds-1; 

        /*bt.print("0");
        bt.print(minutes); 
        bt.print(":0");
        bt.print(seconds);
        bt.println();*/

        lcd.clear();
        lcd.setCursor(1,0);
        lcd.print("Time: 0");
        lcd.print(minutes);
        lcd.print(":0");
        lcd.print(seconds);

        lcd.setCursor(1,1);
        lcd.print("Lives: "); 
        
        for(int i=0;i<lives;i++){
          lcd.write(byte(0));
        }
        
        /*Serial.print("0");
        Serial.print(minutes); 
        Serial.print(":0");
        Serial.print(seconds);
        Serial.println();*/
      }else{ // 1:11 - 1:59
        seconds=seconds-1;

        /*bt.print("0");
        bt.print(minutes); 
        bt.print(":");
        bt.print(seconds);
        bt.println();*/

        lcd.clear();
        lcd.setCursor(1,0);
        lcd.print("Time: 0");
        lcd.print(minutes);
        lcd.print(":");
        lcd.print(seconds);

        lcd.setCursor(1,1);
        lcd.print("Lives: "); 
        
        for(int i=0;i<lives;i++){
          lcd.write(byte(0));
        }
        
        /*Serial.print("0");
        Serial.print(minutes); 
        Serial.print(":");
        Serial.print(seconds);
        Serial.println();*/
      }
    }else{ // 00:00
      /*bt.print("Game Over");
      bt.println();*/
      bt.print("o");
      Serial.print("Game Over");
      
      digitalWrite(9, LOW);
      digitalWrite(10, LOW);
      digitalWrite(11, LOW);
      digitalWrite(12, LOW);
      
      lcd.clear();
      lcd.setCursor(1,0);
      lcd.print("Ran out of Time");
      lcd.setCursor(3,1);
      lcd.print("Game Over");
      
      over=1;
      joystick=0;
      difficulty=0;
    }
}

void updateLife(){
    if(lives==0){
        digitalWrite(9, LOW);
        digitalWrite(10, LOW);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);
        
        /*bt.println();
        bt.print("Game Over");*/
        
        Serial.println("Game Over"); 

        lcd.clear();
        lcd.setCursor(0,0);
        lcd.print("Ran out of Lives");
        lcd.setCursor(3,1);
        lcd.print("Game Over");
        
        over=1;
        joystick=0;
        difficulty=0;

        checkSecondPass();
        
      }else if (lives==1){
        digitalWrite(9, HIGH);
        digitalWrite(10, LOW);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);

        lcd.clear();
        lcd.setCursor(1,1);
        lcd.print("Lives: ");
         
        for(int i=0;i<1;i++){
          lcd.write(byte(0));
        }
        checkSecondPass();
        
      }else if (lives==2){
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);

        lcd.clear();
        lcd.setCursor(1,1);
        lcd.print("Lives: "); 
        
        for(int i=0;i<2;i++){
          lcd.write(byte(0));
        }
        checkSecondPass();
        
      }else if (lives==3){
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(12, LOW);
        
        lcd.clear();
        lcd.setCursor(1,1);
        lcd.print("Lives: "); 
        
        for(int i=0;i<3;i++){
          lcd.write(byte(0));
        }
        checkSecondPass();
        
      }else if (lives==4){
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(12, HIGH);

        lcd.clear();
        lcd.setCursor(1,1);
        lcd.print("Lives: "); 
        
        for(int i=0;i<4;i++){
          lcd.write(byte(0));
        }
        checkSecondPass();
      }
}

void checkSecondPass(){
  
  if((millis())-(startMillis) >= 1000){ // if (current time elapsed - starting time elapsed) >= 1000 milliseconds
    /*Serial.println();
    Serial.print("millis: ");
    Serial.print(millis());
    Serial.println();
    Serial.print("startMillis: ");
    Serial.print(startMillis);
    Serial.println();
    Serial.print("time difference: ");
    Serial.print(((unsigned int)millis())-((unsigned int)startMillis));
    Serial.println();*/
    startMillis=millis();
    /*Serial.print("newStartMillis: ");
    Serial.print(startMillis);
    Serial.println();*/
    
    countdownFunction();
  }
}
