'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Svg,{
  Path
} from 'react-native-svg';

module.exports = React.createClass({

  getDefaultProps: function(){

    return {
      refresh:false
    };

  },

  getInitialState: function(){
    return {

    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function(){

  },

  shouldComponentUpdate: function() {

      if (this.props.refresh == true){
        return true;
      }
      return false;
  },

  render: function(){

    return (
      <Path

        d={this.props.path}
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        scale={1}
        />
    );
  },

});

var styles = StyleSheet.create({

});



