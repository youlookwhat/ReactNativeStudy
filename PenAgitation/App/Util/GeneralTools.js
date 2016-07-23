/**
 * Created by hezhe on 16/2/18.
 */

import React, { Component } from 'react';



var ProgressHUD = require('react-native-progress-hud');
function _icon(imageUri) {
  return {
    uri: imageUri,
    //isStatic: true
  };
}

function _stringFromDate(date){
  var timeStr = date == undefined ? '':(date.getFullYear()+'-'+ (date.getMonth() >= 9 ? date.getMonth()+1 : '0'+(date.getMonth()+1) )+'-'+(date.getDate() >= 10 ?date.getDate():('0'+date.getDate()) )+' '+(date.getHours() >= 10 ? date.getHours() : ('0'+date.getHours()))+':'+(date.getMinutes() >= 10 ? date.getMinutes() : ('0'+date.getMinutes())));
  return timeStr;
}

function _undefineToBlank(data) {
  return data?data:''
}

function _route(index,title,data,click) {
  return {
    index: index,
    title: title,
    data:data,
    click:click,
  };
}

function _renderProgressHud(isVisible,message){

  return(

    <ProgressHUD
      isVisible={isVisible}
      message={message}
      isDismissible={false}
      overlayColor={'transparent'}
      />

  )

}

function _deleteBlank(obj) {
  var temp = Object.assign({},obj)

  for (var x in temp){

    if ( Object.prototype.hasOwnProperty.call(temp,x)) {

      y = temp[x];

      if (y==="null" || y===null || y==="" || typeof y === "undefined") {
        delete temp[x];
      }

    }

  }

  return temp

}

module.exports = {
  icon: _icon,
  route :_route,
  undefineToBlank:_undefineToBlank,
  renderProgressHud:_renderProgressHud,
  deleteBlank:_deleteBlank,
  stringFromDate:_stringFromDate

};