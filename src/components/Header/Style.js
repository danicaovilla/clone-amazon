import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#c8f1e3',
  },
  subcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  texto: {
    color: '#999',
    fontSize: 12,
  },
  image: {
    width: 85,
    height: 25,
  },
  icon: {
    paddingLeft: 30,
    color: '#fff',
    fontSize: 26,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textoEndereco: {
    fontSize: 12,
    color: 'black',
  },
  iconeEndereco: {
    marginRight: 5,
    color: 'black',
    fontSize: 16
  },
  iconeEndereco2: {
    marginTop: 5,
    marginLeft: 5,
    color: 'black',
    fontSize: 10
  }
});

export default styles;
