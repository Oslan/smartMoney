import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


const index = ({categorias}) => {
    return (
        <View>
           
            <FlatList
              data={categorias}
              renderItem={({item})=> <Text>{item.key}</Text>}
            />

        </View>
    );
}
const style = StyleSheet.create({
  
});
export default index;
