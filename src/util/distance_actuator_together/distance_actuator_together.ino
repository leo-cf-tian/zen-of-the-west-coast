int ENA = 7;
int IN1 = 6;
int IN2 = 5;
int TRIG = 12;
int ECHO = 11;

long getDistance(){
  digitalWrite(TRIG, LOW);
  delay(50);
  digitalWrite(TRIG, HIGH);
  delay(100);
  digitalWrite(TRIG, LOW);

  pinMode(ECHO, INPUT);
  long duration = pulseIn(ECHO, HIGH);
  return (duration/2)/29.1;
}

void extend_actuator(int time){
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  delay(time);

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
}

void setup() {
  Serial.begin(9600);

  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);

  pinMode(LED, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);

  digitalWrite(ENA, HIGH);
}

void loop() {
  long distance = getDistance();
  if(distance <= 15)
  {
    extend_actuator(2000);
  }
}
