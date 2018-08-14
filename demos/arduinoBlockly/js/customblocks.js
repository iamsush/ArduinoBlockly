Blockly.Blocks['led_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn led on for")
        .appendField(new Blockly.FieldNumber(1, 0, 10), "high")
        .appendField("sec and off for")
        .appendField(new Blockly.FieldNumber(2, 0, 10), "low")
        .appendField("seconds");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['led_light'] = function(block) {
  var number_high = block.getFieldValue('high');
  var number_low = block.getFieldValue('low');
  var code = {high : number_high, low : number_low};
  return JSON.stringify(code);
};
