/**
 * Created by jingbin on 16/7/23.
 */
import React, {Component} from 'react';
import {
    ListView,
    TouchableOpacity,
    View,
    Text,
    Image,
    ToastAndroid
} from 'react-native'

module.exports = React.createClass({

    /**
     * 组件再次被调用:(5--2)
     * (1不会被调用)
     * */

    /**
     * 1.实例化调用,以后不在调用
     * 初始化固定值,以后不再改变,如静态数据源
     */
    getDefaultProps: function () {
        return {
            backgroundColor: 'red'
        };
    },

    /**
     * 2.初始化状态值,可用于改变组件状态
     */
    getInitialState: function () {
        console.log(this.props.backgroundColor)

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1 != r2});
        return {
            dataSource: ds.cloneWithRows(['消息通知', '修改密码', '清除缓存', '使用帮助', '联系客服', '问题反馈', '发现APP', '关于我们', '喜欢抗癌卫士?给个5星好评吧', '喜欢抗癌卫士?分享给好友'])

        };
    },

    /**
     * 3.组件将在加载前调用
     */
    componentWillMount: function () {

    },

    /**
     * 5.组件已加载,渲染完成
     * 网络访问
     * */
    componentDidMount: function () {

    },

    /**
     * 组件刷新前调用，类似componentWillMount
     * */
    componentWillUpdate: function () {

    },

    /**
     * 更新后的hook
     * */
    componentDidUpdate: function () {

    },

    /**
     * ***------------------**:
     * 销毁期，用于清理一些无用的内容，如：点击事件Listener，只有一个过程：
     *
     * */
    componentWillUnmount: function () {

    },

    /**
     * 指父元素对组件的props或state进行了修改
     * */
    componentWillReceiveProps: function (nextProps) {

    },

    /**
     * 一般用于优化，可以返回false或true来控制是否进行渲染
     * */
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

    /**
     * 4.组件渲染,必须有
     * 只能访问this.props和this.state
     * */
    render: function () {
        return (
            <ListView dataSource={this.state.dataSource}
                      renderFooter={this.renderFooter()}
                      renderRow={this.renderCell}/>
        );
    },

    renderFooter(){
        return (
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 15,
                    borderRadius: 4,
                    backgroundColor: "#a00",
                    height: 40
                }}>

                <Text
                    style={{color: '#ffffff', fontSize: 17}}
                    onPress={()=>ToastAndroid.show("111", ToastAndroid.LONG)}>退出</Text>
            </TouchableOpacity>
        );
    },

});


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
