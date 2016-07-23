'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

module.exports = React.createClass({

  getDefaultProps: function(){

    return {
        backgroundColor:'red'
    };

  },

  getInitialState: function(){
    console.log( this.props.backgroundColor)

    var ds =new  ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    return {
        dataSource: ds.cloneWithRows(['消息通知', '修改密码','清除缓存','使用帮助','联系客服','问题反馈','发现APP','关于我们','喜欢抗癌卫士?给个5星好评吧','喜欢抗癌卫士?分享给好友'])
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function(){

  },
  componentWillUpdate:function () {

  },
    componentDidUpdate:function () {
        
    }  ,
  componentWillUnmount: function() {

  },
  componentWillReceiveProps: function(nextProps){

  },

  shouldComponentUpdate: function() {



  },

  toastStr(msg){
      ToastAndroid.show(msg,ToastAndroid.LONG);
  },

  renderCell(data,sId,rId) {

      var top = 0;
      switch(Number(rId)){
          case 0:
          case 4:
            top = 30;
          break;
        default:
            break;
      }

      return(
          <TouchableOpacity style={[styles.container,{marginTop:top}]}
          onPress = {()=>this.toastStr(data)} >
          <Text>{data} </Text>
          <View style={{flex:1}}/>
          <Image source={{uri:'node_modules_reactnative_libraries_customcomponents_navigationexperimental_assets_backicon' }} 
                style={styles.image}/>
          </TouchableOpacity>
      );
  },

renderFooter(){
    
    return(
        // <TouchableOpacity style={{alignItems:'center',justifyContent:'center',margin:15,borderRadius:4,backgroundColor:"#a00",height:40}}>
        //     <Text style={{color:'#ffffff',fontSize:17}}> 推出</Text>
        // </TouchableOpacity>

        <Text onPress ={()=>{ToastAndroid.show("11111",ToastAndroid.LONG)}}
            
        style={{flex:1,backgroundColor:"#a00",height:40,textAlign:'center',textAlignVertical:"center",borderRadius:10,margin:15}}>11111</Text>
    );
},

  render: function(){
      var obj={}
    return (
        <ListView 
            renderFooter= {this.renderFooter}
            dataSource={this.state.dataSource}
            renderRow= {this.renderCell}
        />

    );
  },

});

var styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        height:50,
        paddingHorizontal:15
    },

    image :{
        width:40,
        height:40,
    },
    

})



