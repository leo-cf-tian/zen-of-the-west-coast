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
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  long distance = getDistance();
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  if(distance < 30){
    digitalWrite(LED, HIGH);
    delay(5000);
    digitalWrite(LED, LOW);
  }
}
