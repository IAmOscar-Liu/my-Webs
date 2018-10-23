import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet,Text,TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200
  }
});

export default class DisplayAnImageWithStyle extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
      }}>
        <View style={{width: 150, height: 50}} >
          <View style={{flex: 1, flexDirection: 'row',height:'100%'}}>
            <View style={{width:'50%',height:'100%',backgroundColor:'red',borderTopLeftRadius:20,overflow:'hidden'}}>
            </View>
            <View style={{width:'50%',height:'100%',backgroundColor:'blue',borderTopRightRadius:20,overflow:'hidden'}}>
            </View>
          </View>
        </View>
        <View style={{width: 150, height: 50}} >
          <View style={{flex: 1, flexDirection: 'row',height:'100%'}}>
            <View style={{width:'40%',height:'100%',backgroundColor:'orange'}}>
            </View>
            <View style={{width:'60%',height:'100%',backgroundColor:'pink'}}>
            </View>
          </View>
        </View>
        <View style={{width: 150, height: 50}} >
          <View style={{flex: 1, flexDirection: 'row',height:'100%'}}>
            <View style={{width:'66%',height:'100%',backgroundColor:'gray',borderBottomLeftRadius:20,overflow:'hidden'}}>
            </View>
            <View style={{width:'34%',height:'100%',backgroundColor:'skyblue',borderBottomRightRadius:20,overflow:'hidden'}}>
            </View>
          </View> 
        </View>
      </View>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'DisplayAnImageWithStyle',
  () => DisplayAnImageWithStyle
);
