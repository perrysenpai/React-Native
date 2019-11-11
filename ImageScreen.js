import React from 'react';
import {Text, Button, TouchableOpacity, StyleSheet, View} from 'react-native';
import ImageDetail from "../Components/ImageDetail";

const ImageScreen=()=>{
  return(
    <View>
      <ImageDetail titlehere="forest"/>
      <ImageDetail titlehere="mountain"/>
      <ImageDetail titlehere="river"/>
    </View>
  );
};


const styles=StyleSheet.create({
  TextStyle:{

  }
});


export default ImageScreen;
