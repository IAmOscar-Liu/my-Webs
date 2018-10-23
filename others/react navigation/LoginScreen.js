import React from 'react';
import {StyleSheet,Text,view,Button} from 'react-native';


export default class LoginScreen extends React.Component{
  static navigationOptions={
    header:null
  }

  render(){
    return(
      <View style={{styles.container}}>
        <Button title="Go To Home Screen" onPress={()=>this.props.navigation.navigate('Home')} />
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
