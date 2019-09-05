Blockly.JavaScript['i2c_matrix_4x4_keypad'] = function(block) {
  var text_i2c_keypad_pin_sda = block.getFieldValue('I2C_KEYPAD_PIN_SDA');
  var text_i2c_keypad_pin_scl = block.getFieldValue('I2C_KEYPAD_PIN_SCL');
  var variable_i2c_keypad_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('I2C_KEYPAD_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `
#EXTINC
#include <i2c_keypad.h>
#END

#VARIABLE
#define ${variable_i2c_keypad_instance}_sda ${text_i2c_keypad_pin_sda}
#define ${variable_i2c_keypad_instance}_scl ${text_i2c_keypad_pin_scl}
I2CKEYPAD ${variable_i2c_keypad_instance}(${variable_i2c_keypad_instance}_sda, ${variable_i2c_keypad_instance}_scl);
char ${variable_i2c_keypad_instance}_press;
#END

#SETUP
Serial.begin(115200);
Serial.println("Start Keypad");

${variable_i2c_keypad_instance}.begin(0x20, 100); // void begin(char addr = 0x20, long interval = 200) ;
  ${variable_i2c_keypad_instance}.on(PRESS, [](char ${variable_i2c_keypad_instance}) { // void on(KEYPAD_EVENT event, KeypadEventCallback callback) ;
    ${variable_i2c_keypad_instance}_press = ${variable_i2c_keypad_instance};
  });
#END

${variable_i2c_keypad_instance}.scand();
  `;
  return code;
};

Blockly.JavaScript['i2c_matrix_4x4_keypad_read'] = function(block) {
  var variable_i2c_keypad_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('I2C_KEYPAD_INSTANCE'), Blockly.Variables.NAME_TYPE);
  // var dropdown_i2c_keypad_read = block.getFieldValue('I2C_KEYPAD_READ');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_i2c_keypad_instance}_press`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};