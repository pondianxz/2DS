import { Text, View, FlatList, Image } from 'react-native';
import {styles} from './components/styles.js';
import {DATA} from './components/data.js';
import {StatusMensagem} from './components/statusMsg.js';

const Item = ({nomeContato, fotoContato, horarioUltimaMsgContato, ultimaMensagem, statusMensagem}) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.viewContato}>
        <Image
          source={fotoContato}
          style={styles.imgFotoContato}
        />

        <View style={styles.viewNomeEUltimaMsg}>
          <View style={styles.viewNomeEHorario}>
            <Text style={styles.txContato}>{nomeContato}</Text>
            <Text style={styles.txHorarioUltimaMsgContato}>{horarioUltimaMsgContato}</Text>
          </View>

          <View style={styles.viewUltimaMsg}>
            {StatusMensagem({ultimaMensagem, statusMensagem})}
            
            <Text style={styles.txUltimaMsg}>{ultimaMensagem}</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewCabecalho}>

        <View style={styles.viewTitulo}>
          <Text style={styles.titulo}>HelloApp</Text>

          <View style={styles.viewIconesCabecalho}>
            <Image
              source={require('./assets/images/camera.png')}
              style={styles.iconeCamera}
            />
            <Image
              source={require('./assets/images/3pontinhos.png')}
              style={styles.iconeTresPontinhos}
            />
          </View>
        </View>

        <View style={styles.viewBarraPesquisa}>
          <Image
            source={require('./assets/images/pesquisaIcone.png')}
            style={styles.iconePesquisar}
          />
          <Text style={styles.txPesquisa}>Pergunte à Hello AI ou pesquise</Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>
          <Item
            nomeContato={item.nomeContato}
            fotoContato={item.fotoContato}
            horarioUltimaMsgContato={item.horarioUltimaMsgContato}
            ultimaMensagem={item.ultimaMensagem}
            statusMensagem={item.statusMensagem}
          />}
          keyExtractor={item => item.idContato}
      />
    </View>
  );
};