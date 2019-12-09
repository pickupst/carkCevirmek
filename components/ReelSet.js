import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from '../Constants';
import Reel from './Reel';

export default class ReelSet extends Component {

    constructor (props) {
        super(props);

        this.state = {
            width: null,
            height: null
        }

        this.reels = [];
        this.reelsInMotion = null;
        this.spinResults = [];

    }


    randomBetween = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1) + min);

    }

    evaluateResults = () => {
        
    }

    spin = () => {
        this.reelsInMotion = Constants.REELS;

        for (let index = 0; index < Constants.REELS; index++) {
            this.reels[index].scrollByOffSet(this.randomBetween (
                (Constants.REELS_REPEAT - 6) * this.reels[index].symbols.length,
                (Constants.REELS_REPEAT - 5) * this.reels[index].symbols.length,

            ), (reelIdx, result) => {

                this.reelsInMotion -= 1;
                this.spinResults[reelIdx] = results;

                if (this.reelsInMotion === 0) {
                    this.evaluateResults();
                }

            });
        }
    }

    onLayout = (e) => {
        this.setState({

            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height


        })
    } 

    renderReels = () => {
        let reelWidth = this.state.width / Constants.REELS;
        let reelList = Array.apply(null, Array(Constants.REELS)).map((el, idx) => {
        
        return( <Reel width = {reelWidth} height = {this.state.height} key = {idx} index = {idx} ref = {(ref) => {this.reels[idx] = ref }}></Reel>)

        });

        return  (
            <>
            
            {reelList}
            
             </>
        )

    } 

    render () {
        return (
            <View style = {styles.reelSet} onLayout = {this.onLayout} > 
                
                {this.state.width && this.state.height && this.renderReels()}


            </View>
        )

    }
}

const styles = StyleSheet.create({

    reelSet: {
      flex: 1,
      flexDirection: 'row',
    },
  
  });