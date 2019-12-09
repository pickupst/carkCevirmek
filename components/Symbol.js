import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Constants from '../Constants';
import Images from '../assets/images'

export default class Symbol extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: true,
        };
    }

    getImage = () => {

        switch (this.props.symbol) {
            case "B":
                return Images.bell;
                break;
            case "C":
                return Images.cherry;
                break;
            case "X":
                return Images.clock;
                break;
            case "D":
                return Images.dice;
                break;
            case "G":
                return Images.grape;
                break;
            case "L":
                return Images.lemon;
                break;
            case "M":
                return Images.melon;
                break;
            case "O":
                return Images.orange;
                break;
            case "P":
                return Images.plum;
                break;
            case "7":
                return Images.seven;
                break;
            case "S":
                return Images.star;
                break;
            default:
                return Images.dice;
        }

    }

    setActive = (active) => {
        this.setState({
            active: active
        });
    }

    render() {
        let symbolSource = this.getImage();
        return (
            <View style={[styles.symbol, { width: this.props.width, height: this.props.height }]} >

                <Image style = {{ width: this.props.width - 40, height: this.props.height - 20, opacity: this.state.active ? 1 : 0.3 }} resizeMode = "contain" source = {symbolSource} />

            </View>
        )

    }
}

const styles = StyleSheet.create({

    symbol: {
        padding: 0
    },

});