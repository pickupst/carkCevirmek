import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, Easing } from 'react-native';
import Constants from '../Constants';
import Symbol from './Symbol';

export default class Reel extends Component {

    constructor (props) {
        super(props);
        this.symbols = "BBCDGLGLCCCLLDDMS777XDBL";
        this.reelSymbols = this.symbols.repeat(Constants.REELS_REPEAT).split("")
        this.symbolHeight = this.props.height / Constants.SYMBOLS;

        this.position = this.reelSymbols.length - Constants.SYMBOLS;

        this.currentScrollPos = (this.reelSymbols.length - Constants.SYMBOLS) * this.symbolHeight * -1;

        this.state = {
            scrollPos: new Animated.Value(this.currentScrollPos)
        }
    }

    scrollByOffSet = (offset) => {

        this.currentScrollPos = this.currentScrollPos + (this.symbolHeight * offset);

        this.position = this.position - offset;

        Animated.timing(    
            this.state.scrollPos,
            {
                toValue: this.currentScrollPos,
                duration: 750 + (this.props.index * 250),
                useNativeDriver: true,
                easing: Easing.inOut(Easing.exp)
            }
        ).start(() => {

            this.position = ((Constants.REELS_REPEAT - 2) * this.symbols.length) + (this.position % this.symbols.length);
            this.currentScrollPos = this.position * this.symbolHeight * -1;
            this.state.scrollPos.setValue(this.currentScrollPos);

        });

    } 

    render () {
        return (
            <View style = {[styles.reel, {width: this.props.width, height: this.props.height}]} > 
                <Animated.View style = {{ width: this.props.width, height: this.reelSymbols.length * this.symbolHeight, transform: [{ translateY: this.state.scrollPos }]}}>

                {this.reelSymbols.map((el, idx) => {
                    return <Symbol symbol = {el} key = {idx} index = {idx} width = {this.props.width} height = {this.symbolHeight}>

                    </Symbol>
                })}


                </Animated.View>



            </View>
        )

    }
}

const styles = StyleSheet.create({

    reel: {
      overflow: 'hidden'
    },
  
  });