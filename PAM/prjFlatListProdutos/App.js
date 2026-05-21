// import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import {styles} from './components/styles.js';
import {DATA} from './components/data.js';

const Item = ({nomeProduto, valorProduto, qtdProduto, dataCadastroProduto}) => {
  return (
    <View style={styles.listaProdutos}>
      <Text style={styles.titulo}>{nomeProduto}</Text>
      <Text style={styles.preco}>R${parseFloat(valorProduto).toFixed(2)}</Text>
      <Text style={styles.paragrafo}>
        Quantidade: <Text style={styles.destaque}>{qtdProduto}</Text>
      </Text>
      <Text style={styles.paragrafo}>
        Data de Cadastro: <Text style={styles.destaque}>{dataCadastroProduto}</Text>
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewFlatList}>
        <FlatList
          data={DATA}
          renderItem={({item}) =>
            <Item
              nomeProduto={item.nomeProduto}
              valorProduto={item.valorProduto}
              qtdProduto={item.qtdProduto}
              dataCadastroProduto={item.dataCadastroProduto}
            />}
          keyExtractor={item => item.idProduto}
        />
      </View>
    </View>
  );
};