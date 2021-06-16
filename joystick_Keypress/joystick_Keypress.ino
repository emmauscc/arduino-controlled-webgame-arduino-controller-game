#define joyX A0
#define joyY A1
 
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  // put your main code here, to run repeatedly:
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
}
