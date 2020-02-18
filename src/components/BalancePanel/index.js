import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../styles/Colors';
import LinearGradiente from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const index = ( {onNewEntryPress} ) => {
    return (
        <View style={style.container}>
            <LinearGradiente colors={[Colors.violet, Colors.blue]} style={style.painel}>
                <BalancePanelLabel currentBalance={20000}  />
                <BalancePanelChart />
            </LinearGradiente>
                <TouchableOpacity style={style.button} onPress={onNewEntryPress} >
                   <Icon name='add' size={30} color={Colors.white} />
                </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container:{},
    painel:{
       paddingVertical: 10
    },
    button: {
        backgroundColor: Colors.green,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -25,
        marginRight: 10,
        shadowColor: Colors.black,
        elevation: 7
    } 
  });

export default index;