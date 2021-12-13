import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxSlide: {
    width: '100%',
  },
  slide: {
    width: 'auto',
    height: 280,
  },
  textoDestaque: {
    padding: 15,
    color: 'black',
    fontSize: 20,
  },
  containerDestaques: {
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  boxDestaque: {
    marginRight: 15,
    width: 85,
  },
  destaque: {
    width: 85,
    height: 70,
    marginBottom: 5,
  },
  destaqueCapas: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Euclid Extra Bold',
  },
  textoCapas: {
    color: '#999',
    textAlign: 'center',
  },
  textoOferta: {
    borderTopWidth: 5,
    borderTopColor: '#ccc',
    paddingTop: 15,
    color: 'black',
    textAlign: 'left',
    paddingHorizontal: 15,
    fontSize: 30,
  },
  imagemOferta: {
    left: 130,
  },
  textoValor: {
    paddingTop: 15,
    color: 'black',
    textAlign: 'left',
    paddingHorizontal: 15,
    fontSize: 15,
  },
  textoValorSpan: {
    marginTop: 10,
    fontSize: 30,
  },
  textoKit: {
    paddingTop: 15,
    color: 'black',
    textAlign: 'left',
    paddingHorizontal: 15,
    fontSize: 15,
  },
  textoTodas: {
    paddingVertical: 15,
    color: '#4aafb5',
    textAlign: 'left',
    paddingHorizontal: 15,
    fontSize: 15,
  },
});

export default styles;
