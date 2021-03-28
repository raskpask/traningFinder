import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';

import { connect } from "react-redux";
import { addArticle, addPosition } from "../js/actions/index";

import { Text, View } from '../components/Themed';

import AddEventScreen from "./components/addEventScreen";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    addPosition: position => dispatch(addPosition(position))
  };
}

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title name",
      newEventButtonColor: '#FFFFFF',
      selectedMenu: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.addPosition({
      coordinates: {
        latitude: 59.4285,
        longitude: 17.9484,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      title: 'Sollentuna Station',
      description: "The train station of sollentuna."
    });
    this.props.addPosition({
      coordinates: {
        latitude: 59.4583907,
        longitude: 17.9499998,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      title: 'Playa de molin',
      description: "The best beachvolleyball court in Sweden."
    });
  }
  addEvent() {
    this.setState({ newEventButtonColor: '#000000', selectedMenu: 'addEvent' })
    console.log("New EVENT")
    // this.setState({newEventButtonColor: '#FFFFFF'})
  }
  renderMenu() {
    return (
      <View>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title, { color: this.state.newEventButtonColor }} onPress={() => this.addEvent()}>Add event</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title} onPress={() => this.addEvent()}>My events</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.title} onPress={() => this.addEvent()}>About us</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button style={styles.title} onPress={() => this.handleChange()} title="Press to change state" />
      </View>
    )
  }
  renderContent() {
    switch (this.state.selectedMenu) {
      case "":
        return (
          this.renderMenu()
        )
      case "addEvent":
        return (
          <AddEventScreen />
        )
      default:
        this.renderMenu()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}
const Settings = connect(
  null,
  mapDispatchToProps
)(SettingsScreen);
export default Settings;

const styles = StyleSheet.create({
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
