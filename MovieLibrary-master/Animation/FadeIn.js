import React from "react";
import { StyleSheet, View, Animated, Easing, Dimensions } from "react-native";

class FadeIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      position: new Animated.Value(Dimensions.get("window").width),
      //   opacity: new Animated.Value(1),
      delay: 500,
      duration: 500,
    };
  }

  componentDidMount() {
    Animated.spring(this.state.position, {
      toValue: 0,
      useNativeDriver: false,
    }).start();


  }

  render() {
    return (
      <Animated.View
        style={
          { left: this.state.position } /*, { opacity: this.state.opacity }*/
        }
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeIn;
