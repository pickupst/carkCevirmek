import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import Constants from './Constants';
import ReelSet from './components/ReelSet';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.ReelSet = null;
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style = {styles.playContainer}>
  
            <ReelSet ref = {(ref) => { this.ReelSet = ref; }} />
  
        </View>
  
        <View style = {styles.buttonContainer}>
  
            <Button title = "Çevir" onPress = {() => {this.ReelSet.spin() }}> </Button>
  
        </View>
  
      </ View>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  buttonContainer: {

    height: 60,
    width: Constants.MAX_WIDTH,
    backgroundColor: 'purple'

  },

  playContainer: {

    height: Constants.MAX_HEIGHT - 60,
    width: Constants.MAX_WIDTH,
    backgroundColor: 'blue'
    
  }

});