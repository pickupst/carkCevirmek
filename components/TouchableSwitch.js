import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import images from '../assets/images';

export default class TouchableSwitch extends Component {

    constructor(props) {
        super(props);

        this.images = {
            "active": images[this.props.image],
            "inactive": images[this.props.image + "Inactive"],
        }


        this.state = {
            status: this.props.status
        }

    }

    
    handlePressOut = () => {
        let newStatus = this.state.status === "active" ? "inactive" : "active";

        this.setState({
            status: newStatus
        });

        this.props.onSwitch && this.props.onSwitch(newStatus);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPressOut = {this.handlePressOut}>
            <View style={[this.props.style, { justifyContent: 'center', alignItems: 'center' }]}>
                <Image source={this.images[this.state.status]} style={{ width: this.props.style.width, height: this.props.style.height, position: 'absolute' }} resizeMode={this.props.resizeMode || "stretch"} />
            </View>
            </TouchableWithoutFeedback>
        );
    }


}