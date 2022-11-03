int ENA = 7;
int IN1 = 6;
int IN2 = 5;

void extend_actuator(int time){
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);

  delay(time);

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
}

void setup() {
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);

  digitalWrite(ENA, HIGH);
}

void loop() {

}
