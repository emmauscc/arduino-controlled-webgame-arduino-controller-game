int buttonLives = 0;
int buttonHit = 0;
int lives = 4;

void setup() {
  Serial.begin(9600);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(4, INPUT);
  pinMode(3, INPUT);
      digitalWrite(9, HIGH);
      digitalWrite(10, HIGH);
      digitalWrite(11, HIGH);
      digitalWrite(12, HIGH);
}

void loop() {
      
  
  buttonLives = digitalRead(4);
  buttonHit = digitalRead(3);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:

  if (buttonLives == HIGH) { //when livebutton is pressed
    if(lives<4){
      lives=lives+1;
    }
      
    Serial.print(lives);
    if(lives==0){
      digitalWrite(9, LOW);
      digitalWrite(10, LOW);
      digitalWrite(11, LOW);
      digitalWrite(12, LOW);
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
    delay(1000);
  }

  if (buttonHit == HIGH) { // When hitbutton is pressed lose a life
    if(lives>0){
      lives=lives-1;
    }
    
    Serial.print(lives);
    if(lives==4){
      digitalWrite(9, HIGH);
      digitalWrite(10, HIGH);
      digitalWrite(11, HIGH);
      digitalWrite(12, HIGH);
    }else if (lives==3){
      digitalWrite(9, HIGH);
      digitalWrite(10, HIGH);
      digitalWrite(11, HIGH);
      digitalWrite(12, LOW);
    }else if (lives==2){
      digitalWrite(9, HIGH);
      digitalWrite(10, HIGH);
      digitalWrite(11, LOW);
      digitalWrite(12, LOW);
    }else if (lives==1){
      digitalWrite(9, HIGH);
      digitalWrite(10, LOW);
      digitalWrite(11, LOW);
      digitalWrite(12, LOW);
    }else if (lives==0){
      digitalWrite(9, LOW);
      digitalWrite(10, LOW);
      digitalWrite(11, LOW);
      digitalWrite(12, LOW);
    }
      delay(1000);
  }
  
}
