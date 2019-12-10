import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import images from '../assets/images';

export default class TouchableButton extends Component {

    constructor(props) {
        super(props);

        this.images = {
            "active": images[this.props.image],
            "pushed": images[this.props.image + "Pressed"],
            "inactive": images[this.props.image + "Inactive"],
        }


        this.state = {
            status: "active"
        }

    }

    renderContent = () => {
        if (this.props.text) {
            return(
            <Text style = {this.props.textStyle}> {this.props.text} </Text>
            )
        }
    }

    handlePressIn = () => {

        if (this.props.inactive) {
            return;
        }

        this.setState({
            status: "pushed"
        });

        this.props.onPress && this.props.onPress();

    }

    handlePressOut = () => {

        if (this.props.inactive) {
            return;
        }

        this.setState({
            status: "active"
        });
    }

    render () {
        const status = this.props.inactive ? "inactive" : this.state.status;
        const content = this.renderContent();
        return (

            <TouchableWithoutFeedback onPressIn = {this.handlePressIn} onPressOut = {this.handlePressOut}>
                <View style = {[this.props.style, {justifyContent: 'center' , alignItems:'center'}]}>

                    <Image source = {this.images[status]} style = {{width: this.props.style.width, height: this.props.style.height, position: 'absolute'}} resizeMode =  {this.props.resizeMode || "stretch" }/>
                    {content}
                </View>
            </TouchableWithoutFeedback>
        );
    }


}