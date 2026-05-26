import {View, Image} from 'react-native';
import {styles} from '../components/styles.js';

export const StatusMensagem = ({ultimaMensagem, statusMensagem}) => {
  if(statusMensagem == '')
    return;
  else if(ultimaMensagem == 'Figurinha'){
    return (
      <View style={styles.viewStatusEIconeFigurinha}>
        <Image
          source={statusMensagem}
          style={styles.imgStatusMsg}        
        />
        <Image
          source={require('../assets/images/figurinha.png')}
          style={styles.imgStatusMsg}        
        />
      </View>
    );
  }
  else{
    return (
      <Image
        source={statusMensagem}
        style={styles.imgStatusMsg}        
      />
    );
  }
}