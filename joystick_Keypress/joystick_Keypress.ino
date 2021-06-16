#define joyX A0
#define joyY A1
 
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  // put your main code here, to run repeatedly:
  int xValue = analogRead(joyX);
  int yValue = analogRead(joyY);

  if(xValue == 1023 && yValue == 513){
    Serial.print('w');
    delay(10);
  }else if(xValue == 505 && yValue == 0){
    Serial.print('a');
    delay(10);
  }else if(xValue == 0 && yValue == 513){
    Serial.print('s');
    delay(10);
  }else if(xValue == 505 && yValue == 1023){
    Serial.print('d');
    delay(10);
  }else{
    
  }
  delay(10);
}
