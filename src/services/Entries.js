import { getRealm } from './Realm';
import { Alert } from 'react-native';
import { getUUID } from '../services/UUID';

export const getEntries = async ()=>{

     const realm = await getRealm();

     const entries = realm.objects('Entry');
     console.log('getEntries :: ',JSON.stringify(entries));
     
     return entries;
}

export const  saveEntry = async (data, entry={})=>{

     const realm = await getRealm();
   
let obj={}
     realm.write(()=>{
         try{
          obj={
               id: entry.id || getUUID(),
               amount: data.amount || entry.amount,
               entryAt: data.entryAt || entry.entryAt,
               isInit: false,
               address:'Rua Salonika'
          };
         realm.create('Entry', obj, true);
         Alert.alert(
              'Aviso',
              'Efetuado com sucesso!',
             
         );
         }catch(error){
          Alert.alert(`Error - ${error}`);
         }
     });
     console.log(obj);
     return obj;
};

export const removeEntry = async entry=>{
     const realm = await getRealm();
     try {
          realm.write(()=>{
               realm.delete(entry);
          });
     } catch (error) {
          Alert.alert(`Error - ${error}`);
     }
    
}