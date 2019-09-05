Blockly.Blocks['i2c_matrix_4x4_keypad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("I2C Pin Setup")
        .appendField("SDA")
        .appendField(new Blockly.FieldTextInput("21"), "I2C_KEYPAD_PIN_SDA")
        .appendField("SCL")
        .appendField(new Blockly.FieldTextInput("22"), "I2C_KEYPAD_PIN_SCL");
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("I2C_KEYPAD1", null, ["Plugin.I2C_KEYPAD"], ["Plugin.I2C_KEYPAD"]), "I2C_KEYPAD_INSTANCE")
        .appendField("Loop / I2C Matrix 4x4 Keypad");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['i2c_matrix_4x4_keypad_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("I2C_KEYPAD1", null, ["Plugin.I2C_KEYPAD"], ["Plugin.I2C_KEYPAD"]), "I2C_KEYPAD_INSTANCE")
        .appendField("Read Press Key");
        // .appendField(new Blockly.FieldDropdown([["0","I2C_KEYPAD_KEY0"], ["1","I2C_KEYPAD_KEY1"], ["2","I2C_KEYPAD_KEY2"], ["3","I2C_KEYPAD_KEY3"], ["4","I2C_KEYPAD_KEY4"], ["5","I2C_KEYPAD_KEY5"], ["6","I2C_KEYPAD_KEY6"], ["7","I2C_KEYPAD_KEY7"], ["8","I2C_KEYPAD_KEY8"], ["9","I2C_KEYPAD_KEY9"], ["*","I2C_KEYPAD_KEY_STAR"], ["#","I2C_KEYPAD_KEY_SHARP"], ["A","I2C_KEYPAD_KEYA"], ["B","I2C_KEYPAD_KEYB"], ["C","I2C_KEYPAD_KEYC"], ["D","I2C_KEYPAD_KEYD"]]), "I2C_KEYPAD_READ");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};