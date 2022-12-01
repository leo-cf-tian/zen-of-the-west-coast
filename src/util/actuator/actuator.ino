#include <LiquidCrystal.h>

// initialize the library by associating any needed LCD interface pin
// with the arduino pin number it is connected to
const int rs = 10, en = 9, d4 = 8, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
int timesOpened = 0;

// constants won't change
const int ENA_PIN = 7;  // the Arduino pin connected to the EN1 pin L298N
const int IN1_PIN = 6;  // the Arduino pin connected to the IN1 pin L298N
const int IN2_PIN = 5;  // the Arduino pin connected to the IN2 pin L298N

int TRIG = 12;
int ECHO = 11;

long getDistance() {
  digitalWrite(TRIG, LOW);
  delay(50);
  digitalWrite(TRIG, HIGH);
  delay(100);
  digitalWrite(TRIG, LOW);

  pinMode(ECHO, INPUT);
  long duration = pulseIn(ECHO, HIGH);
  return (duration / 2) / 29.1;
}

void setup() {
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("Times Opened:");

  Serial.begin(9600);
  pinMode(ENA_PIN, OUTPUT);
  pinMode(IN1_PIN, OUTPUT);
  pinMode(IN2_PIN, OUTPUT);

  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);

  digitalWrite(ENA_PIN, HIGH);
}

void loop() {
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(timesOpened);

  long distance = getDistance();
  Serial.println(distance);
  if (distance <= 15) {
    timesOpened++;
    digitalWrite(IN1_PIN, LOW);
    digitalWrite(IN2_PIN, HIGH);
    lcd.print(5);

    // delay(8000);  // actuator will stop extending automatically when reaching the limit

    // digitalWrite(IN1_PIN, LOW);
    // digitalWrite(IN2_PIN, LOW);

    // delay(5000);

    // // retracts the actuator
    // digitalWrite(IN1_PIN, HIGH);
    // digitalWrite(IN2_PIN, LOW);

    // delay(10000);  // actuator will stop retracting automatically when reaching the limit
    // digitalWrite(IN1_PIN, LOW);
    // digitalWrite(IN2_PIN, LOW);
  }
}
