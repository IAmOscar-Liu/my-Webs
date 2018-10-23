import React from 'react';
import {StyleSheet,Text,View,FlatList,TouchableHighlight,ActivityIndicator} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Badge,ButtonGroup,List, ListItem,Rating } from 'react-native-elements';
import axios from 'axios';



export default class Screen1 extends React.Component{
  constructor(props){
    super(props);

    this.inputRefs = {};

    this.state = {
        onload:false,
        listSelected:-1,
        yOffset:0,
        movieKind: 'now_playing',
        buttons:[],
        page:1,
        items: [
            {
                label: 'Now Playing',
                value: 'now_playing',
            },
            {
                label: 'Popular',
                value: 'popular',
            },
            {
                label: 'Top Rated',
                value: 'top_rated',
            },
            {
                label: 'Upcoming',
                value: 'upcoming',
            },
        ],
        movieNum: 20,
        items2: [
            {
                label: '20',
                value: 20,
            },
            {
                label: '40',
                value: 40,
            },
            {
                label: '60',
                value: 60,
            },
        ],
        movieResults:[],
        currentMovieResults:[]
    };
  }


  componentDidUpdate(prevProps) {
    if (this.props.screenProps !== prevProps.screenProps) {
      this.props.navigation.navigate('Home')
    }
  }

  loadData(){

    if(this.state.movieNum===20){this.setState({buttons:['All','Page 1']})}
    else if(this.state.movieNum===40){this.setState({buttons:['All','Page 1','Page 2']})}
    else{this.setState({buttons:['All','Page 1','Page 2','Page 3']})}

    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/${this.state.movieKind}?api_key=5fb93387541fc093f329bc1481d3b3e8&language=en-US&page=${this.state.page+1}`
    //   )
    //   .then(data => {this.setState({movieResults:data.data.results})})
    //   .catch(err => console.log(err));

    function assignMovie(data,index){
      if(index===0){
        this.setState({currentMovieResults:data})
      }
     }

     this.setState({onload:true,movieResults:[],currentMovieResults:[]});
     for(let i=0 ; i< this.state.movieNum/20 ; i++){
       axios
         .get(
           `https://api.themoviedb.org/3/movie/${this.state.movieKind}?api_key=5fb93387541fc093f329bc1481d3b3e8&language=en-US&page=${i+1}`
         )
         .then(data => {this.setState({movieResults:this.state.movieResults.push(data.data.results)},assignMovie(data,i))})
         .catch(err => console.log(err));
     }
     this.setState({onload:false})

  }

  onSwitchPage(page){
    if(page === 1){
      this.setState({currentMovieResults:this.state.movieResults.filter(function(item, index, array){
        return index < 20
      }})
    } else if(page === 2){
      this.setState({currentMovieResults:this.state.movieResults.filter(function(item, index, array){
        return  index >= 20 || index < 40
      }})
    } else if(page === 3){
      this.setState({currentMovieResults:this.state.movieResults.filter(function(item, index, array){
        return  index >= 40 || index < 60
      }})
    }  else{
      this.setState({currentMovieResults:this.state.movieResults})
    }
  }

  onPressRightIcon(i){
    if(this.state.listSelected===i){
      this.setState({listSelected:-1})
    }else{
      this.setState({listSelected:i})
    }
  }


  onRenderListFooterComponent(){
    if(this.state.onload){
      return(
        <View style={{paddingVertical:20,borderTopWidth:1,
        borderTopColor:'#CED0CE'}}>
          <ActivityIndicator animating size='large' />
        </View>
      )else{
        return null;
      };
    }

  }

  onRenderItem = ({item,index})=>{
     if(this.state.listSelected===index){
      return(
        <ListItem
          avatar={{uri:`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}}
          avatarContainerStyle={{height:'80%',maxHeight:150,width:80,marginVertical:'10%',marginHorizontal:10}}
          avatarStyle={{height:'100%',width:'100%'}}
          title={item.title}
          hideChevron
          subtitle={
            <View style={{marginTop:10,justifyContent:'space-between'}}>
              <Text>{'Release Date: '+item.release_date}</Text>
              <Text style={{marginVertical:10}}>{item.overview}</Text>
              <View style={{height:20,flex:1,flexDirection:'row'}}>
                <Text style={{flex:2}}>Rating: </Text>
                <Rating
                  style={{flex:4}}
                  imageSize={15}
                  readonly
                  fractions={2}
                  startingValue={item.vote_average/2}
                  ratingBackgroundColor='orange'
                />
                <Text style={{flex:4}}>({item.vote_average}/10)</Text>
              </View>
              <Badge containerStyle={{backgroundColor:'violet',marginHorizontal:'25%'}} onPress={()=>{this.onPressRightIcon(index)}} >
                <Text>Hide</Text>
              </Badge>
            </View>
          }
        />
      )}else{return(
        <ListItem
          roundAvatar
          title={item.title}
          subtitle={
              <View style={{marginLeft:13,height:20,flex:1,flexDirection:'row'}}>
                <Text style={{flex:2,alignSelf:'center'}}>Rating: </Text>
                <Rating
                  style={{flex:3}}
                  imageSize={15}
                  readonly
                  fractions={2}
                  startingValue={item.vote_average/2}
                  ratingBackgroundColor='orange'
                />
                <Text style={{flex:5}}>({item.vote_average}/10)</Text>
              </View>
          }
          avatar={{uri:`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}}
          onPressRightIcon={()=>{this.onPressRightIcon(index)}}
        />
    )}

  }

  FlastlistscrollToTop(){
    this.FlatListControl.scrollTo({x: 0, y: 0});
  }


  render(){

    let ifShowTopButton = this.state.yOffset > 50 ? 'block':'none';

    return(
      <View style={styles.container}>
        <View style={{height:120}}>
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flex:2,height:80}}>

                  <View style={{ paddingVertical: 5 }} />
                  <Text>  Type:</Text>
                  <RNPickerSelect
                      placeholder={{
                          label: 'Select a movie...',
                          value: null,
                      }}
                      items={this.state.items}
                      onValueChange={(value) => {
                          this.setState({
                              movieKind: value,
                          });
                      }}
                      onUpArrow={() => {
                          this.inputRefs.name.focus();
                      }}
                      onDownArrow={() => {
                          this.inputRefs.picker2.togglePicker();
                      }}
                      style={{ ...pickerSelectStyles }}
                      value={this.state.movieKind}
                      ref={(el) => {
                          this.inputRefs.picker = el;
                      }}
                  />
            </View>
            <View style={{flex:2,height:80}}>
                  <View style={{ paddingVertical: 5 }} />

                  <Text>  Number:</Text>
                  <RNPickerSelect
                      placeholder={{
                          label: 'Select a number...',
                          value: null,
                      }}
                      items={this.state.items2}
                      onValueChange={(value) => {
                          this.setState({
                              movieNum: value,
                          });
                      }}
                      onUpArrow={() => {
                          this.inputRefs.picker.togglePicker();
                      }}
                      onDownArrow={() => {
                          this.inputRefs.company.focus();
                      }}
                      style={{ ...pickerSelectStyles }}
                      value={this.state.movieNum}
                      ref={(el) => {
                          this.inputRefs.picker2 = el;
                      }}
                  />
            </View>
            <View style={{flex:1,height:80}} >
                <TouchableHighlight style={{backgroundColor:'#03A9F4',paddingVertical:13,marginHorizontal:5,marginTop:25,borderRadius:10}} onPress={()=>{this.setState({page:1},this.loadData())}} >
                   <Text style={{fontSize:20,alignSelf:'center'}}>GO</Text>
                </TouchableHighlight>
            </View>
          </View>

          <View style={{marginTop:85,paddingHorizontal:'15%'}}>
            <ButtonGroup
              buttons={this.state.buttons}
              selectedIndex={this.state.page}
              containerStyle={{height:35,borderRadius:10}}
              onPress={(indexPage)=>{this.setState({page:indexPage},this.onSwitchPage(indexPage))}}
            />
          </View>

        </View>


        <View style={{marginBottom: '15%'}}>
          {this.state.currentMovieResults.length>0?
          <List>
            <FlatList
              ref={(ref) => {this.FlatListControl = ref}}
              scrollEventThrottle={16}
              onScroll={event=>{this.setState({yOffset:event.nativeEvent.contentOffset.y}) }}
              data={this.state.currentMovieResults}
              renderItem={this.onRenderItem}
              keyExtractor={(item,index)=>item.original_title}
              extraData={this.state.listSelected}
              ListFooterComponent={this.onRenderListFooterComponent}

            />
          </List>
          :<Text style={{lineHeight:20,marginTop:25,alignSelf:'center'}}>No Results</Text>
          }
          <TouchableHighlight onPress={()=>{this.setState({yOffset:0},this.FlastlistscrollToTop()) }} style={[styles.topButton,{display:ifShowTopButton}]}>
            <Text>Top</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%'
    //alignItems:'center',
    //justifyContent:'center',
  },
  topButton:{
    position:'fix',
    bottom:20,
    right:20,
    width:50,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius:'50%'
  }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginHorizontal:5,
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
