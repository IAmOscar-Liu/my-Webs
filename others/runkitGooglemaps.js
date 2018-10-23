
/***********https://stackoverflow.com/questions/51333897/react-native-build-error-development-server-returned-response-error-code-500**********/

/****https://github.com/googlemaps/google-maps-services-js****/
function getData(_type){

    const googleMapsClient = require('@google/maps').createClient({
      key: 'AIzaSyBH959l1KOCgndIu6yEQ1rgyFB8MffgPcA',
      Promise: Promise
    });

    googleMapsClient.placesNearby({          location: {lat: -33.867, lng: 151.195},
              radius: 5000,
              type: _type})
      .asPromise()
      .then((response) => {
        //console.log(response.json.results);
        let _results = response.json.results;
        //console.log(_results)
        for(let i = 0;i<_results.length;i++){
          console.log(_results[i].name);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // googleMapsClient.placesNearby({          location: {lat: -33.867, lng: 151.195},
    //            radius: 5000,
    //            type: _type},function(err,response){
    //              if(!err){
    //                     console.log('Here are the results of '+_type)
    //                     let _results = response.json.results;
    //      //console.log(_results)
    //                      for(let i = 0;i<3;i++){
    //                       console.log(_results[i].name);
    //                      }
    //              }
    //            });

}

getData('park');
getData('hotel');









/************https://www.npmjs.com/package/googleplaces**********/

function getData() {
    "use strict";
   var Googleplaces = require("googleplaces")
    var assert = require("assert");

    //var PlaceSearch = require("../lib/PlaceSearch.js");
    //var config = require("./config.js");

    var googleplaces = new Googleplaces('AIzaSyBH959l1KOCgndIu6yEQ1rgyFB8MffgPcA', 'json');

    var parameters = {
        location: [40.7127, -74.0059],
        rankby: "distance",
        types: "park"
    };
    googleplaces.placeSearch(parameters, function (error, response) {
        //if (error) throw error;
        //assert.notEqual(response.results.length, 0, "Place search must not return 0 results");
        if(!error){
          for(let i = 0; i<response.results.length; i++){
            console.log(response.results[i])
          }
        }else{
          console.log(error)
        }
    });

    // parameters = {
    //     location: [40.7127, -74.0059],
    //     rankby: "distance",
    //     types: "doctor"
    // };
    // googleplaces.placeSearch(parameters, function (error, response) {
    //     if (error) throw error;
    //     assert.notEqual(response.results.length, 0, "Ranked place search must not return 0 results");
    // });

};

getData();

/*********************************************************************************************/

//line 573  onPress={() => this._onPress(rowData)} move to
//line 58 default style row height removed

import { Rating ,Icon} from 'react-native-elements';

/************GooglePlacesAutocomplete.js************/
_renderRowData = (rowData) => {
  if (this.props.renderRow) {
    return this.props.renderRow(rowData);
  }

  if(rowData.vicinity){
    return (
      <View style={{flex:1,flexDirection:'row'}}>
        <Image
          style={{width: 30, height: 30}}
          source={{uri: rowData.icon}}
        />
        <View>
          <Text style={{fontSize:20}}>{rowData.name}</Text>
          <View style={{height:20,flex:1,flexDirection:'row',marginHorizontal:5}}>
            <Text style={{flex:2}}>Rating: </Text>
              {this.props.renderRating(rowData.rating)}
            <Text style={{flex:4}}>{rowData.rating}</Text>
          </View>
        </View>
        <TouchableHighlight onPress={() => this._onPress(rowData)} style={{width: 30, height: 30,marginRight:10}}>
          {this.props.renderIcon()}
        </TouchableHighlight>
      </View>
    )
  }else{
    return (
      <Text style={[{flex: 1}, this.props.suppressDefaultStyles ? {} : defaultStyles.description, this.props.styles.description, rowData.isPredefinedPlace ? this.props.styles.predefinedPlacesDescription : {}]}
        numberOfLines={this.props.numberOfLines}
      >
        {this._renderDescription(rowData)}
      </Text>
    );
  }
}

/**********<GooglePlacesAutocomplete>************/

textInputHide={true}
onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
        this.setState({listItemDetailData:details})
      }}
renderRating={(num)=>{return
  <Rating
    style={{flex:4}}
    imageSize={15}
    readonly
    fractions={2}
    startingValue={num}
    ratingBackgroundColor='orange'
  />
}}
renderIcon={()=>{return
  <Icon
    name='ios-information-circle'
    type='ionicon'
    color='#517fa4'
  />
}}

/*****************react native maps**************************************/
import MapView from 'react-native-maps';
<View style={styles.container}>
  <MapView
    provider={PROVIDER_GOOGLE}
    style={styles.map}
    region={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}
  >
     <Marker
      coordinate={{latitude:37.78825,longitude:-122.4324}}
      title={'my title'}
      description={'my description'}
      />
  </MapView>
</View>

const styles = StyleSheet.create({
  container:{
    position:absolute,
    top:0,
    left:0,
    bottom:0,
    right:0,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  map:{
    position:absolute,
    top:0,
    left:0,
    bottom:0,
    right:0,
  }
})

//https://codeburst.io/how-to-deploy-a-create-react-native-app-to-the-appstore-229a8fa36fb1
//http://www.ileafsolutions.com/blog/deploying-react-native-app-ios-android-windows/
