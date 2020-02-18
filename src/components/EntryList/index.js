import React,{ useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Container from '../Core/Container';
import { getEntries } from '../../services/Entries';
import Item from './EntryListItem';

const index = ({ onEntryPress }) => {
    const [entries, setEntries] = useState([]);

    useEffect(()=>{
        
        async function loadEntries(){
            const data = await getEntries();
            setEntries(data);
        }
        loadEntries();
     
    },[]);

    return (
        <Container title="Últimos Lançamentos">
          
            <FlatList
                keyExtractor={ (item) => item.id }
                data={ entries }
                renderItem={({item, index})=> (
                   <Item 
                    item={ item } 
                    isFirstItem={ index === 0 }
                    isLastItem={ index === entries.length -1}
                    onEntryPress={ onEntryPress }
                   />
                ) }
            />
        </Container>
        
    );
}

export default index;
