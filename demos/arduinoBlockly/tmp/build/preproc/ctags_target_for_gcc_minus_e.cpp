# 1 "/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/arduinoFile.ino"
# 1 "/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/arduinoFile.ino"
int digitalPin = 13;

void setup() {
  // Set the pin as an output pin.
  pinMode(digitalPin, 0x1);
}

void loop() {
  // Set the pin HIGH
  digitalWrite(digitalPin, 0x1);
  delay(1000);

  // Set the pin LOW
  digitalWrite(digitalPin, 0x0);
  delay(2000);
}
