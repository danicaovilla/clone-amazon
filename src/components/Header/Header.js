import React from 'react';
import {View, Text, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SLIcons from 'react-native-vector-icons/SimpleLineIcons';

import Styles from './Style';

const Header = () => {
  return (
    <>
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#41d9e4', '#a5e6ce']}
          style={Styles.buscaContainer}
        >
          <View style={Styles.buscaBox}>
            <Ionicons name="search" size={20} color={'#000'} style={Styles.buscaIcone} />
            <TextInput
              style={Styles.buscaInput}
              placeholder="Pesquisar na Amazon.com.br"
            />
          </View>
        </LinearGradient>
      </View>
      <View style={Styles.containerEndereco}>
        <SLIcons name="location-pin" size={16} color={'#000'} style={Styles.iconeEndereco} />
        <Text style={Styles.textoEndereco}>
          Enviar para Danielli Caovilla - Petrópolis 25665
        </Text>
        <SLIcons name="arrow-down" size={10} color={'#000'} style={Styles.iconeEndereco2} />
      </View>
    </>
  );
};

export default Header;
