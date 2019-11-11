import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen=()=>{
	const friend=[
		{name:"Friend 1", age:"20"},
		{name:"Friend 2", age:"20"},
		{name:"Friend 3", age:"20"},
		{name:"Friend 4", age:"20"},
		{name:"Friend 5", age:"20"},
		{name:"Friend 6", age:"20"},
		{name:"Friend 7", age:"20"},
	];


	return (
		<FlatList
		keyExtractor={(friend)=>friend.name}
		data={friend}
		renderItem={({item})=>{
			return <Text>{item.name} - AGE {item.age}</Text>
		}}
		/>
		);
};


const styles=StyleSheet.create({
	TextStyle:{
		fontSize:20
	}
})


export default ListScreen
