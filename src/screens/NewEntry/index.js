import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry, removeEntry} from '../../services/Entries';

const index = ({ navigation }) => {

    const entry = navigation.getParam('item',{
        id: null,
        amount: 0,
        entryAt: new Date(),
      }); 

    const [ amount, onChangeAmount] = useState(`${entry.amount}`);

    const isValid = ()=>{
        return true;
    }

    const save =()=>{
        const data ={
            amount : parseFloat(amount)
        }

        saveEntry(data, entry); 
        goBack();
    }

    const goBack=()=>{
        navigation.goBack();
    }
    
    const remove = ()=>{
        removeEntry(entry);
        goBack();
    }
    return (
        <View style={style.container}> 

            <BalanceLabel currentBalance={30000} />

            <TextInput value={amount} onChangeText={amount => onChangeAmount(amount)} style={style.input} />
            <Text>{amount}</Text>
            <TextInput style={style.input} />

            <TouchableOpacity>
                <Text>GPS</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Camera</Text>
            </TouchableOpacity>

            <View>
                <TouchableOpacity onPress={()=>{
                    isValid() && save()
                }}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={remove}>
                    <Text>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goBack}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex:1,

    },
    input:{
        borderColor:'#000',
        borderWidth: 1
    }

});
export default index;