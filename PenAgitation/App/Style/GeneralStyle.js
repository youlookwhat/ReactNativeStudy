/**
 * Created by hezhe on 16/2/18.
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Dimensions
} = React;

const screenWidth = Dimensions.get('window').width;


module.exports = StyleSheet.create({
  containerRow: {
    flex: 0,
    flexDirection: 'row',
  },
  containerColumn: {
    flex: 0,
    flexDirection: 'column',
  },
  navTitle: {
    fontSize: 17,
    textAlign: 'center',
    color:  '#00aaee',
    marginVertical:10,
  },
  navBarButtonText: {
    fontSize: 17,
    textAlign: 'center',
    color:  '#00aaee',
    marginVertical:10
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  username: {
    fontSize: 15,
    textAlign: 'left',
    color:  '#3c3c3c',
  },
  content: {
    fontSize: 15,
    textAlign: 'left',
    color:  '#666666',
  },
  time: {
    fontSize: 10,
    textAlign: 'left',
    color: '#9fa0a0',
  },
  minText: {
    fontSize: 11.5,
    textAlign: 'left',
  },
  midText: {
    fontSize: 15,
    textAlign: 'left',
  },
  maxText: {
    fontSize: 17,
    textAlign: 'left',
  },

});

