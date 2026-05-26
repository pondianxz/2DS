import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101D25',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    gap: 20,
  },

  titulo:{
    color: '#fff',
    fontWeight: 800,
    fontSize: 22,
  },
  
  iconePesquisar:{
    tintColor: '#969DA2',
    width: 24,
    height: 24
  },

  viewTitulo:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  viewIconesCabecalho:{
    display: 'flex',
    flexDirection: 'row',
    gap: 18
  },

  viewCabecalho:{
    display: 'flex',
    gap: 20,
  },

  iconeCamera:{
    tintColor: '#fff',
    width: 24,
    height: 24
  },
  
  iconeTresPontinhos:{
    tintColor: '#fff',
    width: 24,
    height: 24
  },

  viewBarraPesquisa:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    width: 345,
    gap: 8,
    backgroundColor: '#2f3436',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50
  },
  
  txPesquisa:{
    color: '#969DA2',
    fontSize: 16,
  },

  txContato:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 500
  },

  txHorarioUltimaMsgContato:{
    color: '#969DA2',
    fontSize: 13
  },

  viewNomeEHorario:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 275
  },

  viewNomeEUltimaMsg:{
    display: 'flex',
    gap: 2
  },

  containerItem:{
    display: 'flex',
    flexDirection: 'row',
  },

  txUltimaMsg:{
    color: '#969DA2',
    fontSize: 15
  },

  imgStatusMsg:{
    marginTop: 2,
    width: 18,
    height: 18
  },

  imgFotoContato:{
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  viewUltimaMsg:{
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },

  viewStatusEIconeFigurinha:{
    display: 'flex',
    flexDirection: 'row',
    gap: 4
  },

  viewContato:{
    display: 'flex',
    flexDirection: 'row',
    width: 340,
    gap: 13,
    marginBottom: 25,
    alignItems: 'center'
  },
});
