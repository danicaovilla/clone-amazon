import React from 'react';
import { View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MI from 'react-native-vector-icons/MaterialIcons';

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
            inlineImageLeft="search_icon"
            placeholder="Pesquisar na Amazon.com.br"
          />
        </LinearGradient>
      </View>
      <View style={Styles.container}>
        <MI name="search" style={Styles.icon} />
        <Text>Enviar para Danielli Caovilla - Petrópolis 25665</Text>
      </View>
    </>
  );
};

export default Header;
