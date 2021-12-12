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
          style={Styles.container}
        >
          <TextInput
            style={Styles.input}
            placeholder="Pesquisar na Amazon.com.br"
          />
        </LinearGradient>
      </View>
      <View style={Styles.container}>
        <SLIcons name="location-pin" style={Styles.iconeEndereco} />
        <Text style={Styles.textoEndereco}>
          Enviar para Danielli Caovilla - Petrópolis 25665
        </Text>
        <SLIcons name="arrow-down" style={Styles.iconeEndereco2} />
      </View>
    </>
  );
};

export default Header;
