import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const index = ( { 
                title, 
                label, 
                buttonLabel, 
                action,
                children 
            }) => {
    return (
       <View style={style.container}>
            <Text style={style.title}>{title}</Text>
           {children}
        {(label || buttonLabel) && (
           <View style={style.horizontal}>
               { label && (
                <Text style={style.actionLabel}>{label}</Text>
            )}
                {buttonLabel && (
                        <TouchableOpacity 
                            style={style.actionButton}
                            onPress={action}
                        >
                            <Icon 
                                name="insert-chart" 
                                style={style.actionButtonIcon} 
                            />
                            <Text style={style.actionButtonText}>
                                {buttonLabel}
                            </Text>
                        </TouchableOpacity>
                )}
            </View>
        )}
       </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.asphalt,
        margin: 5,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        padding: 8
    },
    title:{
        fontSize:12,
        color: Colors.white
    },
    horizontal:{
        flexDirection:'row'
    },
    actionLabel: {
        fontSize:12,
        color: Colors.white,
        flex: 1
    },
    actionButton: {
        fontSize: 14,
        flexDirection: 'row',
       
    },
    actionButtonIcon: {
        fontSize:12,
        color: Colors.white,
        marginRight: 2,
        marginTop: 2
    },
    actionButtonText: {
        fontSize:12,
        color: Colors.white
    }
});

export default index;
