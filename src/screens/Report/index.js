import React from 'react';
import { View, Picker, Text, TouchableOpacity } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const index = ({navigation}) => {
    return (
        <View>
            <BalanceLabel currentBalance={300} />
                <View>
                    <Picker>
                        <Picker.Item label="Todas as Categorias"></Picker.Item>
                        <Picker.Item label="Alimentacao"></Picker.Item>
                        <Picker.Item label="Combustivel"></Picker.Item>
                    </Picker>
                    <Picker>
                        <Picker.Item label="Ultimos 7 dias"></Picker.Item>
                    </Picker>


                    <View>
                        <TouchableOpacity>
                            <Text>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            <EntrySummary />
            <EntryList />
        </View>
    )
}
export default index;
