// constants won't change
const int ENA_PIN = 7; // the Arduino pin connected to the EN1 pin L298N
const int IN1_PIN = 6; // the Arduino pin connected to the IN1 pin L298N
const int IN2_PIN = 5; // the Arduino pin connected to the IN2 pin L298N

int TRIG = 12;
int ECHO = 11;
int LED = 8;

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

void setup() {
  pinMode(ENA_PIN, OUTPUT);
  pinMode(IN1_PIN, OUTPUT);
  pinMode(IN2_PIN, OUTPUT);

  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);

  digitalWrite(ENA_PIN, HIGH);
}

void loop() {
  long distance = getDistance();
  if(distance <= 15) {
    digitalWrite(IN1_PIN, LOW);
    digitalWrite(IN2_PIN, HIGH);

    delay(20000); // actuator will stop extending automatically when reaching the limit

    // retracts the actuator
    digitalWrite(IN1_PIN, HIGH);
    digitalWrite(IN2_PIN, LOW);

    delay(20000); // actuator will stop retracting automatically when reaching the limit
  }
}
