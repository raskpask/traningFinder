import React, { Component } from 'react';
import { EventEmitter, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { connect } from "react-redux";
import { Text, View } from '../components/Themed'
import store from '../js/store';;
import { setLocation } from "../js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    setLocation: location => dispatch(setLocation(location))
  };
}

const mapStateToProps = state => {
  return { location: state.location };
};
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      positions: [],
      location: {
        latitude: 59.43,
        longitude: 17.94,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    store.subscribe(() => {
      this.setState({
        articles: store.getState().articles,
        positions: store.getState().positions,
        location: store.getState().location
      });
    });
  }
  onRegionChange(location) {
    this.props.setLocation(location);
  }
  render() {
    return (
      <View style={styles.container} >

        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <MapView
          style={styles.map}
          region={this.state.location}
          onRegionChange={this.onRegionChange}
          onLongPress={(e) => console.log(e.nativeEvent.coordinate)}
        >
          {this.state.positions.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default Home;
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
