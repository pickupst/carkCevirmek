import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView
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
        
        <SafeAreaView style = {styles.playContainer}>
            <ReelSet ref = {(ref) => { this.ReelSet = ref; }} />
        </SafeAreaView>
  
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
    backgroundColor: 'black'

  },

  playContainer: {

    height: Constants.MAX_HEIGHT - 60,
    width: Constants.MAX_WIDTH,
    backgroundColor: 'black'

  }

});