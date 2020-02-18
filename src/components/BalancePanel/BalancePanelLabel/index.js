import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../styles/Colors';

const index = ({currentBalance}) => {
    return (
        <View style={style.container}>
            <Text style={style.label}>Saldo Atual</Text>
            <Text style={style.value}>{currentBalance}</Text>
        </View>
    );
}
 const style = StyleSheet.create({
     container:{
        marginTop: 20,
        alignItems:'center'
     },
    label: {
        fontSize: 14,
        color: Colors.white
    },value:{
        fontSize: 36,
        color: Colors.white
    }
 });

export default index;