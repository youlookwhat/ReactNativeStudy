import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Sketch from 'react-native-sketch';

let Constant = require('../../Util/Constant');

const styles = StyleSheet.create({
  container: {
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  sketch: {
    height: Constant.screenHeight, // Height needed; Default: 200px
    width: Constant.screenWidth
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#111111',
    padding: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

var Signature = React.createClass({





  render() {
    return (
      <View style={styles.container}>
        <Sketch
          fillColor="#f5f5f5"
          strokeColor="#111111"
          strokeThickness={2}
          ref={(sketch) => { this.sketch = sketch; }}
          style={styles.sketch}
          />
      </View>
    );
  }

});

module.exports = Signature;