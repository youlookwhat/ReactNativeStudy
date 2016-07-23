/**
 * Created by jingbin on 16/7/23.
 */
import React, {Component} from 'react';
import {
    ListView,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native'

module.exports = React.createClass({


    getDefaultProps: function () {
        return {
            backgroundColor: 'red'
        };
    },

    getInitialState: function () {
        console.log(this.props.backgroundColor)

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1 != r2});
        return {
            dataSource: ds.cloneWithRows(['消息通知', '修改密码', '清除缓存', '使用帮助', '联系客服', '问题反馈', '发现APP', '关于我们', '喜欢抗癌卫士?给个5星好评吧', '喜欢抗癌卫士?分享给好友'])

        };
    },

    componentWillMount: function () {

    },

    componentDidMount: function () {

    },

    componentWillUpdate: function () {

    },

    componentDidUpdate: function () {

    },

    componentWillUnmount: function () {

    },

    componentWillReceiveProps: function (nextProps) {

    },

    shouldComponentUpdate: function () {

    },

    renderCell(data, sId, rId) {

        var top = 0;
        switch (Number(rId)) {
            case 0:
            case 4:
                top = 0;
                break;
            default:
                break;
        }

        return (
            <TouchableOpacity style={[style.container, {marginTop: top}]}
                              onPress={() => this.toastStr(data)}>
                <Text>{data}</Text>
                <View style={{flex: 1}}/>
                <Image
                    source={{uri: 'node_modules_reactnative_libraries_customcomponents_navigationexperimental_assets_backicon'}}
                    style={style.image}/>

            </TouchableOpacity>
        );

    },

    render: function () {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderCell}/>
        );
    },

})
var style = StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 15
    },

    image: {
        width: 50,
        height: 50,
    },
})


