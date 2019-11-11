import React from 'react';
import { Text, StyleSheet , View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {     {/* we dont need to use props we can dorectly use navigation here */}
  return (
  	<View>
 	 	<Text style={styles.text}>Tut comms</Text>
 	 	<Button 
 	 		onPress={()=> props.navigation.navigate("Components")}   {/* we dont need to use props we can directly use navigation here */}
 	 		title="Go to Components Demo"/>

 	 	<TouchableOpacity  onPress={()=> props.navigation.navigate("Another")}>   
 	 	 <Text>Go to List Demo</Text>
 	 	</TouchableOpacity>

  	</View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
