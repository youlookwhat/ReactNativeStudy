/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  Image
} from 'react-native';

import ReactNative from 'react-native';

import Svg,{
  Path
} from 'react-native-svg';


let Constant = require('./App/Util/Constant');
let SvgPath = require('./App/View/Widget/SvgPath');

let Signature = require('./App/View/Widget/Signature');

import Sketch from 'react-native-sketch';

let GeneralStyle = require('./App/View/Style/GeneralStyle');

var ViewSnapshotter = NativeModules.ViewSnapshotter;

var PenAgitation = React.createClass({

  getInitialState: function(){

    this.pts = new Array(4);
    this.beginPath = '';
    this.path = '';
    this.ptCounter = 0;
    this.isTouch = false;
    return {
      path:'',
      images:[],
      imagesData:''
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function(){




  },

  onTouch(evt){

    this.isTouch = true;

    var event = evt.nativeEvent;
    if (event.touches.length > 1 || (parseInt(event.pageX) ==0  &&  parseInt(event.pageY) ==0)){
      return;
    }


    var str = this.path + '';

    str = str + 'M'+String(event.locationX)+' '+String(event.locationY)+' '+ 'L'+String(event.locationX)+' '+String(event.locationY)+' ';

    this.beginPath = str;

    this.ptCounter = 0;

    this.pts[0] = {x:event.locationX,y:event.locationY};

    this.path = str;



    var images = this.state.images;
    images.push(1);

    this.setState({
      images:images,
      path: str
    });







  },

  onMove(evt){

    this.isTouch = true;

    var event = evt.nativeEvent;

    if (event.touches.length > 1 || (parseInt(event.pageX) ==0  &&  parseInt(event.pageY) ==0)){
      return;
    }

    var str = this.path+'';

    this.ptCounter++;

    this.pts[this.ptCounter] =  {x:event.locationX,y:event.locationY};

    if (this.ptCounter == 3){

      var curveStr = this.beginPath + 'S'+String(this.pts[2].x)+' '+String(this.pts[2].y)+' '+String(this.pts[3].x)+' '+String(this.pts[3].y)+' ';

      this.pts[0] = this.pts[3];

      this.ptCounter = 0;
      this.beginPath = curveStr;


      this.path = curveStr;

      this.setState({
        paths: curveStr,
        images:this.state.images
      });

    }
    else if (this.ptCounter == 2){
      var Qstr = this.beginPath + 'Q'+String(this.pts[1].x)+' '+String(this.pts[1].y)+' '+String(this.pts[2].x)+' '+String(this.pts[2].y)+' ';

      this.path = Qstr;

      this.setState({
        path: Qstr,
        images:this.state.images
      });

    }
    else if (this.ptCounter == 1){
      str = str + 'L'+String(this.pts[1].x)+' '+String(this.pts[1].y)+' ';


      this.path = str;

      this.setState({
        path: str,
        images:this.state.images
      });


    }


  },

  onRelease(evt){


    this.isTouch = false;

    clearTimeout(this.saveImage);
    this.saveImage = setTimeout(()=>{

      if (this.isTouch == false){


        ViewSnapshotter.saveSnapshotToPath(ReactNative.findNodeHandle(this.svg),(error, success) => {
          if (success) {
            console.log('success');
            //var images = this.state.images;
            //images.push(1);
            this.setState({

              //images:images,
              imagesData:success.data

            });
            this.clean();

          } else {
            console.log(error)
          }
        });

      }


    },1000);






  },

  shouldStart(evt){

    var event = evt.nativeEvent;


    if (event.touches.length > 1){
      return false;
    }

    return true;
  },

  shouldMove(evt){

    var event = evt.nativeEvent;


    if (event.touches.length > 1){
      return false;
    }

    return true;
  },

  renderPaths(){



    return (

      <SvgPath
        path ={this.state.path}
        refresh = {true}
        />

    )

  },
  clean() {


    var promise = new Promise((resolve, reject) => {

      this.pts = new Array(4);
      this.beginPath = '';
      this.path = '';
      this.ptCounter = 0;


      this.setState({
          path:'',
          imageData:''
        }
        ,()=>{
          resolve();
        })

    });


    return promise;
  },
  back(){
    var images = this.state.images;
    images.pop();
    this.setState({

      images:images

    });
  },
  onLoad(){


    //var temp = this.path + '';
    //
    //
    //
    //this.pts = new Array(4);
    //this.beginPath = '';
    //this.path = '';
    //this.ptCounter = 0;
    //
    //
    //
    //
    //
    //
    //this.setState({
    //  path:temp
    //});

  },
  renderImages(){

    console.log(this.state.images.length)


    return this.state.images.map((data,index)=> {

      if (index == this.state.images.length - 1){
        return (

          <Svg
            key = {index}
            width={50}
            height={50}
            >
            {this.renderPaths()}
          </Svg>


        )
      }else{

        <View style={{width:50,height:50,backgroundColor:'transparent'}}  key = {index}>
        </View>

      }
    });

  },
  render() {
    return (
      <View style={{flex:1,backgroundColor: 'burlywood',alignItems:'center'}}>
        <Image style={{width:Constant.screenWidth,height:Constant.screenHeight-230,position:'absolute',left:0,top:0}}
               onLoad={this.onLoad}
               source={{uri:'data:image/jpeg;base64,'+this.state.imagesData}}/>
        <View style={[GeneralStyle.containerRow,{flexWrap:'wrap',width:Constant.screenWidth,height:Constant.screenHeight-230}]}
              ref={(ref)=>{this.svg = ref}}>

          {this.renderImages()}
        </View>
        <View style={{flex:1}} />
        <View style={{width:200,height:200,backgroundColor:'white'}}>
          <View style={{width:200,height:200,backgroundColor:'transparent'}}

                onStartShouldSetResponder={this.shouldStart}
                onMoveShouldSetResponder={this.shouldMove}
                onResponderGrant={this.onTouch}
                onResponderMove={this.onMove}
                onResponderRelease={this.onRelease}>


            {/*<Sketch
             fillColor="#f5f5f5"
             strokeColor="#111111"
             strokeThickness={4}
             onReset={this.onReset}
             onUpdate={this.onUpdate}
             ref={(sketch) => { this.sketch = sketch; }}
             style={{width:Constant.screenWidth,height:Constant.screenHeight-30}}
             />*/}

            <Svg

              width={200}
              height={200}
              >
              {this.renderPaths()}
            </Svg>

          </View>
        </View>
        <TouchableOpacity
          style={{backgroundColor:'white',borderRadius:5,height:30,width:80,alignItems:'center',justifyContent:'center',alignSelf:'center'}}
          onPress={this.back}
          >
          <Text>清除</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
module.exports = Signature;
