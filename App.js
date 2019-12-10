import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  Image
} from 'react-native';
import Constants from './Constants';
import ReelSet from './components/ReelSet';
import images from './assets/images';
import TouchableButton from './components/TouchableButton';
import TouchableSwitch from './components/TouchableSwitch';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.ReelSet = null;
  }

  spin = () => {
    this.ReelSet.spin()
  }

  render() {
    return (
      <View style={styles.container}>
  
        <Image style = {styles.backgroundImage} source = {images.background} resizeMode = "stretch" />

        <View style = {styles.topBar} >

          <Image style = {styles.backgroundTopBar} source = {images.backgroundTop} resizeMode = "stretch" />
          <TouchableSwitch
            status = "active"
            style = {styles.buttonSound}
            image = "buttonSound" />

        </View>
        <View style = {styles.main} >
          <ReelSet ref = {(ref) => { this.ReelSet = ref; }} />
        </View>
        <View style = {styles.bottomBar} >
          <Image style = {styles.backgroundBottomBar} source = {images.backgroundBottom} resizeMode = "stretch" />

          <TouchableButton  
            text = ""
            textStyle = {styles.buttonText}
            onPress = {this.spin}
            style = {styles.buttonSpin}
            inactive = {false}
            image = "buttonSpin" >
            </TouchableButton>
        </View>

      </ View>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {

    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
    position: "absolute"

  },
  backgroundTopBar: {
    position: "absolute",
    width: Constants.MAX_WIDTH,
    height: Constants.XR * 53
  },
  topBar: {
    width: Constants.MAX_WIDTH,
    height: Constants.XR * 53
  },
  main: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT - (71 + 53) * Constants.XR
  },
  backgroundBottomBar: {
    position: "absolute",
    width: Constants.MAX_WIDTH,
    height: Constants.XR * 71
  },
  bottomBar: {
    width: Constants.MAX_WIDTH,
    height: Constants.XR * 71
  },
  buttonSpin: {
    position: 'absolute',
    top: Constants.XR * 10,
    right: Constants.XR * 51,
    width: Constants.XR * 100,
    height: Constants.XR * 30,

  },
  buttonText: {

    color: '#F7FCFD',
    fontSize: Constants.XR * 24,
    alignContent: 'center',
    justifyContent: 'center'

  },
  buttonSound: {
    position: 'absolute',
    top: Constants.XR * 5,
    left: Constants.XR * 52,
    width: Constants.XR * 32,
    height: Constants.XR * 32,
  }

});