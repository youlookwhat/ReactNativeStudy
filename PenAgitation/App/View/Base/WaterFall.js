'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ListView
} from 'react-native';

var AutoResponisve = require('autoresponsive-react-native');

var Constant = require('../../Util/Constant')

module.exports = React.createClass({

  getDefaultProps: function(){

    return {

    };

  },

  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.leftTop = 0;
    this.leftHeight = 0;
    this.rightTop = 0;
    this.rightHeight = 0;
    return {
      dataSource: ds.cloneWithRows([
        [{color:'red',height:100}, {color:'yellow',height:150}, {color:'green',height:170}, {color:'pink',height:80}, {color:'red',height:180}, {color:'orange',height:60}, {color:'yellow',height:60}, {color:'pink',height:80}, {color:'gray',height:100}, {color:'purple',height:240}],
        [{color:'red',height:80}, {color:'yellow',height:120}, {color:'green',height:170}, {color:'pink',height:80}, {color:'red',height:180}, {color:'orange',height:60}, {color:'yellow',height:60}, {color:'pink',height:80}, {color:'gray',height:100}, {color:'purple',height:240}],
        [{color:'red',height:80}, {color:'yellow',height:120}, {color:'green',height:170}, {color:'pink',height:80}, {color:'red',height:180}, {color:'orange',height:60}, {color:'yellow',height:60}, {color:'pink',height:80}, {color:'gray',height:100}, {color:'purple',height:240}],
        [{color:'red',height:80}, {color:'yellow',height:120}, {color:'green',height:170}, {color:'pink',height:80}, {color:'red',height:180}, {color:'orange',height:60}, {color:'yellow',height:60}, {color:'pink',height:80}, {color:'gray',height:100}, {color:'purple',height:240}],
        [{color:'red',height:80}, {color:'yellow',height:120}, {color:'green',height:170}, {color:'pink',height:80}, {color:'red',height:180}, {color:'orange',height:60}, {color:'yellow',height:60}, {color:'pink',height:80}, {color:'gray',height:100}, {color:'purple',height:240}],
        [{color:'red',height:80}, {color:'yellow',height:120}, {color:'green',height:170}, {color:'pink',height:80}, {color:'red',height:180}, {color:'orange',height:60}, {color:'yellow',height:60}, {color:'pink',height:80}, {color:'gray',height:100}, {color:'purple',height:240}],
        ])
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function(){

  },

  componentWillUnmount: function() {

  },
  componentWillReceiveProps: function(nextProps){

  },

  shouldComponentUpdate: function() {



  },

  onContainerDidLayout() {
    this.top = this.leftTop+this.leftHeight-this.rightTop-this.rightHeight;
    this.leftTop = 0;
    this.rightTop = 0;
    console.log(this.top)
  },

  renderCell(data,s,r){


    return (


      <AutoResponisve
        onItemDidLayout={this.onItemDidLayout}
        onContainerDidLayout={this.onContainerDidLayout}>
        {
          data.map((obj,index)=>{
            var top = 0;

            if (this.top > 0){

              if (index == 1 && r != 0){
                top = -(this.top)
              }

            }else {

              if (index == 0 && r != 0){
                top = this.top
              }

            }

              return (

              <View style={{width:Constant.screenWidth/2,height:obj.height,marginTop:top,backgroundColor:obj.color}}  key={String(index)+String(r)}>

                <Text style={{fontSize:60}}>{index}</Text>

              </View>

              )
          })
        }



      </AutoResponisve>

    )



  },
  onItemDidLayout(style){
    if (style.left == 0){
      this.leftHeight = style.height;
      this.leftTop = style.top > this.leftTop ? style.top : this.leftTop;
    }else{
      this.rightHeight = style.height;
      this.rightTop = style.top > this.rightTop ? style.top : this.rightTop;
    }
  },
  render: function(){


    //return (
    //  <ScrollView  contentContainerStyle={{height:2000,backgroundColor:'blue',width:375}}>
    //
    //    <AutoResponisve
    //      onItemDidLayout={this.faa}>
    //      <View style={{height:220,width:375/2,backgroundColor:'red'}}>
    //        <Text>{1}</Text>
    //      </View>
    //
    //      <View style={{height:260,width:375/2,backgroundColor:'green'}}>
    //        <Text>{2}</Text>
    //      </View>
    //
    //
    //      <View style={{height:260,marginTop:-40,width:375/2,backgroundColor:'yellow'}}>
    //        <Text>{3}</Text>
    //      </View>
    //
    //      <View style={{height:140,width:375/2,backgroundColor:'purple'}}>
    //        <Text>{4}</Text>
    //      </View>
    //      <View style={{height:140,width:375/2,backgroundColor:'red'}}>
    //        <Text>{5}</Text>
    //      </View>
    //
    //    </AutoResponisve>
    //    <AutoResponisve
    //      onItemDidLayout={this.faa}>
    //      <View style={{height:220,marginTop:-200,width:375/2,backgroundColor:'pink'}}>
    //        <Text>{1}</Text>
    //      </View>
    //
    //      <View style={{height:360,width:375/2,backgroundColor:'green'}}>
    //        <Text>{2}</Text>
    //      </View>
    //
    //
    //      <View style={{height:130,marginTop:-40,width:375/2,backgroundColor:'yellow'}}>
    //        <Text>{3}</Text>
    //      </View>
    //
    //      <View style={{height:140,width:375/2,backgroundColor:'purple'}}>
    //        <Text>{4}</Text>
    //      </View>
    //      <View style={{height:140,width:375/2,backgroundColor:'red'}}>
    //        <Text>{5}</Text>
    //      </View>
    //
    //    </AutoResponisve>
    //
    //  </ScrollView>
    //
    //
    //)

    return (
      <ListView
        style={{flex:1,backgroundColor:'blue'}}
        dataSource={this.state.dataSource}
        renderRow={this.renderCell}>
      </ListView>
    );
  },

});

var styles = StyleSheet.create({

});



