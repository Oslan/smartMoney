import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import Colors from '../../styles/Colors';


const App = ({ navigation })=>{

  const [ isLoad, setIsLoad] = useState(true);

    // useEffect(() => {
    //   console.log('useEffect');
    //   setTimeout(()=>{
    //     setIsLoad(true);
    //   },5000)
    // });


  return (
    <View style={style.container}>

        <BalancePanel onNewEntryPress={()=>navigation.navigate('NewEntry')} />

          {/* {isLoad ?(
           
          ):(<Text>Carregando Categorias...</Text>)
          } */}

        {/* {isLoad ? (
            
        ):(<Text>Caregando Ultimos lancamentos...</Text>)
        } */}
         <EntrySummary  />

         <EntryList onEntryPress={(item)=> navigation.navigate('NewEntry', {
           item
         })} />

    </View>
  );
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.background,
   
  },
  
});

export default App;