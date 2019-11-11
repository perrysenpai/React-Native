import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen=()=>{
	const list=[
	{name: "friend1"},
	{name: "friend2"},
	{name: "friend3"},
	{name: "friend4"},
	{name: "friend5"},
	{name: "friend6"},
	{name: "friend7"},
	{name: "friend8"}
	];
{/*  we can do {name: "friend1" , key:"1"} for every element of the flatlist or do the following*/  }
	return (
	<FlatList 
	keyExtractor={(friend)=>friend.name}
	data={list}
	renderItem={({item})=>{
		return <Text>{item.name}</Text>;
	}}
	/>
	);
};

const stylefx=StyleSheet.create({
	style:{
		fontSize:30
	}
});

export default ListScreen