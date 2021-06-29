int seconds;
int minutes;
int over;

void setup() {
  Serial.begin(9600);
  seconds=1;
  minutes=2;
  over=0;
}

void loop() {
  if(over==0){
    if(seconds!= 0 && minutes!= 0 || seconds==0 && minutes!=0 || seconds!= 0 && minutes==0){
      if(seconds==0 && minutes!=0){
        seconds=59;
        minutes=minutes-1;
        Serial.print("0");
        Serial.print(minutes); 
        Serial.print(":");
        Serial.print(seconds);
        Serial.println();
      }else if(seconds<=10){
        seconds=seconds-1; 
        Serial.print("0");
        Serial.print(minutes); 
        Serial.print(":0");
        Serial.print(seconds);
        Serial.println();
      }else{
        seconds=seconds-1;
        Serial.print("0");
        Serial.print(minutes); 
        Serial.print(":");
        Serial.print(seconds);
        Serial.println();
      }
    }else{
      Serial.print("Game Over");
      over=1;
    }
    delay (1000); 
  }  
}
