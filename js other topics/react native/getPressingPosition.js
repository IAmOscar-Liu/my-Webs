import React, { Component } from 'react';
import { PanResponder,Alert, AppRegistry, View,Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Touchables extends Component {

  constructor(props){
     super(props);
     this.state={
         color:'red',
         locationX:0,
         locationY:0,
         width:0,
         height:0,
         x:0,
         y:0 ,
         showText: false,
         ViewlocationX : 0,
         ViewlocationY : 0   
     };
    
  }
  
  
  onLayout = (e) => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x ,
      y: e.nativeEvent.layout.y 
    })
  }
  
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  
  handleScroll = e => {
    console.log('pressing')
    this.state.color == 'green'?  this.setState({color:'red'}) : 
  this.setState({color:'green'})
    this.setState({locationY: e.nativeEvent.contentOffset.y})
  }
  
  handleViewPress= e => {
      this.state.showText ? this.setState({showText:false}) : this.setState({showText: true})
  }
  
  handleOnResponderMove= e => {
      this.setState({
        ViewlocationX : e.nativeEvent.locationX,
        ViewlocationY : e.nativeEvent.locationY,
      })
  }


  render() {
    const renderView = this.state.showText ? <Text>True</Text> : <Text>False</Text>
    return (
      <ScrollView  onResponderMove = {this.handleOnResponderMove} style={styles.container} scrollEventThrottle={16} onScrollBeginDrag={this.handleScroll} onScrollEndDrag={this.handleScroll}>
          <Text>locationX: {this.state.locationX} 
          </Text>
          <Text> locationY: {this.state.locationY}
          </Text>
           <Text>Press locationX: {this.state.ViewlocationX}</Text>
           <Text>Press locationY: {this.state.ViewlocationY}</Text>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.color}</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View  style={[styles.button,{backgroundColor:this.state.color}]}>
            <Text style={styles.buttonText}>{this.state.color}</Text>
          </View>
        </TouchableOpacity>
        <View  onLayout={this.onLayout}  style={{backgroundColor:'yellow'}} ref={r => this.myView = r} >

          <Text> width: {this.state.width}
          </Text>
          <Text> height: {this.state.height}
          </Text>
          <Text> x: {this.state.x}
          </Text>
          <Text> y: {this.state.y}
          </Text>
        </View>

        <TouchableHighlight style={{height:100,backgroundColor:'pink',display:'flex',justifyContent:'center',alignItems:'center'}} onPress={this.handleViewPress}>
          <View >
            {renderView}
           </View> 
        </TouchableHighlight >
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
                {this.state.color}
            </Text>
          </View>
          
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.color}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
    flex:1
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  buttonText: {
    padding: 20,
    //color: 'white'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);
