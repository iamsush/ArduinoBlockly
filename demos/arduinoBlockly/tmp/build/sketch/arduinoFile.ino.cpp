#include <Arduino.h>
#line 1 "/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/arduinoFile.ino"
#line 1 "/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/arduinoFile.ino"
int digitalPin = 13;

#line 3 "/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/arduinoFile.ino"
void setup();
#line 8 "/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/arduinoFile.ino"
void loop();
#line 3 "/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/arduinoFile.ino"
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
