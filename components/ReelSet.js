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
        this.winningLines = [];

    }


    randomBetween = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1) + min);

    }

    highLightWinningLines = (currentIndex) => {

        if (!this.winningLines.length) {
            return;
        }

        if (currentIndex > 0) {
            //turn off the light on the previous line
            Constants.LINES[this.winningLines[currentIndex - 1]].map((el) => {

                this.reels[el[0]].hightLightAtIndex(el[1], false);
    
            });
        }

        if (currentIndex > this.winningLines.length - 1) {
            return;
        }

        Constants.LINES[this.winningLines[currentIndex]].map((el) => {

            this.reels[el[0]].hightLightAtIndex(el[1], true);
            this.reels[el[0]].shakeAtIndex(el[1]);

        });

        setTimeout(() => {

            this.highLightWinningLines(currentIndex + 1);

        }, 800);
    }

    evaluateResults = () => {
        this.winningLines = [];

        for (let lineIdx = 0; lineIdx < Constants.LINES.length; lineIdx++) {
            let streak = 0;
            let currentKind = null;

            for (let coordIdx = 0; coordIdx < Constants.LINES[lineIdx].length; coordIdx++) {
                let coords = Constants.LINES[lineIdx][coordIdx];
                let symbolAtCoords = this.spinResults[coords[0]][coords[1]];

                if (coordIdx === 0) {
                    if (symbolAtCoords === "D") {
                        break;
                    }

                    currentKind = symbolAtCoords;
                    streak = 1;
                } else  {
                    if (symbolAtCoords !== currentKind) {
                        break;
                    }
                    streak += 1;
                }
                
            }

            if (streak >= 2) {
                this.winningLines.push(lineIdx);
            }
            
        }
        this.highLightWinningLines(0);
    }

    spin = () => {
        this.reelsInMotion = Constants.REELS;

        for (let index = 0; index < Constants.REELS; index++) {
            this.reels[index].scrollByOffSet(this.randomBetween (
                (Constants.REELS_REPEAT - 6) * this.reels[index].symbols.length,
                (Constants.REELS_REPEAT - 5) * this.reels[index].symbols.length,

            ), (reelIdx, results) => {

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