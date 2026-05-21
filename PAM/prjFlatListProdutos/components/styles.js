import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    fontSize: 18,
    fontWeight: 600,
  },
  
  preco:{
    fontSize: 22,
    fontWeight: 800,
  },

  destaque:{
    fontWeight: 600
  },

  paragrafo:{
    fontSize: 16,
    fontWeight: 400
  },

  listaProdutos:{
    backgroundColor: '#77caed',
    padding: 15,
    borderRadius: 7,
    marginBottom: 10,
  },

  viewFlatList:{
    width: '90%',
  },
});