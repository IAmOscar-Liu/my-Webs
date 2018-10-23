import React from 'react';
import {StyleSheet,Text,view,Button} from 'react-native';


export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={{styles.container}}>
         <Button title="Go back to login screen" onPress={()=>this.props.navigation.goBack()} />
         <Button title="Pop to top to login screen" onPress={()=>this.props.navigation.popToTop()} />
      </View>
    );
  }
}



const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
}),
