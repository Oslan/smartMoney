import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const index = ({currentBalance}) => {
    return (
        <View style={style.container}>
            <Text style={style.label}>{currentBalance}</Text>
            <Text style={style.value}>R$ 2.000,00 </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop:20,
        alignItems:'center',
        backgroundColor:'rgb(255,90,80)'
    },
    label: {
        fontSize: 22
    },
    value: {
        fontSize: 18
    }

});

export default index;