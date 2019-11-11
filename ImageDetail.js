import React from 'react';
import {Text, Button, TouchableOpacity, StyleSheet} from 'react-native'

const ImageScreen=(props)=>{
console.log(props);
  return(
    <Text>{props.titlehere}</Text>
  );
};


const styles=StyleSheet.create({
  TextStyle:{

  }
});


export default ImageScreen;
