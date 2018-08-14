const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

const arduinoBuilderHome = '/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly';
const arduinoHome = '/home/sushant/Arduino';
const avrdudeHome = '/home/sushant/.arduino-create/arduino/avrdude/6.3.0-arduino9';
const port = 'ttyACM0';

exports.writeToFile = function(path, content){


  fs.writeFile(path, content, (err) => {
  if (err) throw err;
  console.log('The file has been saved to tmp directory!');
  });


}



exports.getCode = function (high, low){
  return (`int digitalPin = 13;

void setup() {
  // Set the pin as an output pin.
  pinMode(digitalPin, OUTPUT);
}

void loop() {
  // Set the pin HIGH
  digitalWrite(digitalPin, HIGH);
  delay(`+(high*1000)+`);

  // Set the pin LOW
  digitalWrite(digitalPin, LOW);
  delay(`+(low*1000)+`);
}`)
}

exports.compileCode = function(){
  let command =
  `rm -rf ${arduinoBuilderHome}/tmp/build && \
  mkdir ${arduinoBuilderHome}/tmp/build && \
  ${arduinoBuilderHome}/arduino\-1\.8\.5/arduino-builder \
    -compile \
    -hardware ${arduinoBuilderHome}/arduino\-1\.8\.5/hardware \
    -tools ${arduinoBuilderHome}/arduino\-1\.8\.5/tools-builder \
    -tools ${arduinoBuilderHome}/arduino\-1\.8\.5/hardware/tools/avr \
    -built-in-libraries ${arduinoBuilderHome}/arduino\-1\.8\.5/libraries \
    -libraries ${arduinoHome}/libraries \
    -logger humantags \
    -fqbn=arduino:avr:uno \
    -build-path ${arduinoBuilderHome}/tmp/build \
    -verbose ${arduinoBuilderHome}/tmp/arduinoFile.ino \
    \
    && ${avrdudeHome}/bin/avrdude \
      -C${avrdudeHome}/etc/avrdude.conf \
      -patmega328p \
      -carduino \
      -P/dev/${port } \
      -b115200 -D \
      -Uflash:w:${arduinoBuilderHome}/tmp/build/arduinoFile.ino.hex`;
    console.log("compiling");
  execCommand(command);
  console.log("compiled");
}

// exports.runCode = function(){
//   let command =
//   `/home/sushant/.arduino-create/arduino/avrdude/6.3.0-arduino9/bin/avrdude \
//     -C/home/sushant/.arduino-create/arduino/avrdude/6.3.0-arduino9/etc/avrdude.conf \
//     -patmega328p \
//     -carduino \
//     -P/dev/ttyACM0 \
//     -b115200 -D \
//     -Uflash:w:/home/sushant/Sushant/blockly/blockly/demos/arduinoBlockly/tmp/build/arduinoFile.ino.hex`
//   execCommand(command);
//
// }

async function execCommand(command) {
  const { stdout, stderr } = await exec(command);
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
