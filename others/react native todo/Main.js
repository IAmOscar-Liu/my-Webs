import React from 'react';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Main extends React Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={style.header}>
          <Text style={style.headerText}>- NOTER -</Text>
        </View>

        <ScrollView style={styles.ScrollView}>

        </ScrollView>
       
        <View style={styles.footer}>

          <TextInput
             style={styles.TextInput}
             placeholder='>note'
             placeholderTextColor='white'
             underlineColorAndroid='transparent'  >
          </TextInput>

        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet create({
    container:{
      flex:1,
    },
    header:{
      backgroundColor:'#E91E63',
      alignItems:'center',
      borderBottomWidth:'10',
      borderBottomColor:'#ddd',
    },
    headerText:{
      color:'white',
      fontSize:18,
      padding:26,
    },
    ScrollContainer:{
      flex:1,
      marginBottom:100,
    },
    footer:{
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      zIndex:10,
    },
    TextInput:{
      allignSelf:'stretch',
      color:'#fff',
      padding:20,
      backgroundColor:'#252525',
      borderTopWidth:2,
      borderTopColor:'#ededed',
    },
    addButton:{
      position:'absolute',
      zIndex:11,
      right:20,
      bottom:90,
      backgroundColor:'#E91E63',
      width:90,
      height:90,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8,
    },
    addButtonText:{
      color:'#fff',
      fontSize: 24,
    },
});
