import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SVG, { Circle, Rect } from 'react-native-svg';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const index = ({ item, isFirstItem, isLastItem, onEntryPress }) => {
   
    const bulletLineY = isFirstItem ? 25 : 0;
    const bulletLineheight = isLastItem ? 30 : 50;
    const showBulletLine = !(isFirstItem && isLastItem);
    const bulletColor =  Colors.white;

    return (
      <TouchableOpacity onPress={()=>{
        onEntryPress && onEntryPress(item);
      }}>
        <View style={styles.container}>
            <View style={styles.bullet}> 
                    <SVG height="50"width="30">
                            {showBulletLine && (
                                <Rect 
                                    x="9"
                                    y={bulletLineY}
                                    width="1.5"
                                    height={bulletLineheight}
                                    fill={Colors.white}
                                />
                            )}
                            
                            <Circle 
                                    cx="10"
                                    cy="25"
                                    r={8}
                                    stroke={Colors.background}
                                    strokeWidth="1.5"
                                    fill={bulletColor}
                            />
                        </SVG>
            </View>

            <View style={styles.description}>
                            <Text style={styles.descriptionText}>{item.description}</Text> 
                        <View style={styles.details}>
                            <Icon style={styles.entryAtIcon} name="access-time" size={12} /> 
                            <Text style={styles.entryAtText}>{item.entryAt.toString()}</Text>
                            { item.adress && (
                                <>
                                <Icon style={styles.adressIcon} name="person-pin" size={12} />
                                <Text style={styles.adressText}> {item.adress}</Text>
                                </>
                            )}
                        </View>
            </View>

            <View style={styles.amount}>
                    <Text style={styles.amountText}> R$ 12,00</Text>
            </View>
        </View>   
     </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bullet: {

    },
    description: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    amount: {
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    descriptionText:{
        fontSize: 13,
        color: Colors.white
    },
    amountText: {
        fontSize: 13,
        color: Colors.white
    },
    details: {
      
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    entryAtIcon:{
        color: Colors.white,
        marginRight: 2,
        marginTop: 3
    },
    entryAtText: {
        fontSize: 11,
        color: Colors.metal
    },
    adressIcon: {
        color: Colors.white,
        marginRight: 2,
        marginLeft: 5,
        marginTop: 2
    },
    adressText: {
        fontSize: 11,
        color: Colors.metal
    }
});

export default index;
