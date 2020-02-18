import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';
import Colors from '../../styles/Colors';

import Container from '../Core/Container';

const index = () => {
   
  const categorias = [
        {
            key:'Alimentacao : 20,00'
        },
        {
            key:'Combustivel : 20,00'
        },
        {
            key:'Aluguel : 20,00'
        }
    ];

    return (
        <Container 
             title="Categorias" 
            label="Últimos 7 dias" 
            buttonLabel="Ver mais"
            action={()=> alert()} >
            
            <EntrySummaryChart />
            <EntrySummaryList categorias={categorias} />
           
        </Container>
    );
}


export default index;
