import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import Constants from './Constants';
import ReelSet from './components/ReelSet';


const App = () => {
  return (
    <View style={styles.container}>
      
      <View style = {styles.playContainer}>

          <ReelSet />

      </View>

      <View style = {styles.buttonContainer}>

          <Button title = "Çevir" onPress = {() => {}}> </Button>

      </View>

    </ View>
  );
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

export default App;
