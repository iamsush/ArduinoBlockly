int digitalPin = 13;

void setup() {
  // Set the pin as an output pin.
  pinMode(digitalPin, OUTPUT);
}

void loop() {
  // Set the pin HIGH
  digitalWrite(digitalPin, HIGH);
  delay(1000);

  // Set the pin LOW
  digitalWrite(digitalPin, LOW);
  delay(2000);
}