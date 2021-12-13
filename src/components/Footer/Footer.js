import React from 'react';
import {View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FAIcons from 'react-native-vector-icons/FontAwesome5';

import Styles from './Style';

const Footer = () => {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.subcontainer}>
          <IonIcons name="home-outline" size={26} color={'#000'} style={Styles.icon} />
        </View>
        <View style={Styles.subcontainer}>
          <IonIcons name="person-outline" size={26} color={'#000'} style={Styles.icon} />
        </View>
        <View style={Styles.subcontainer}>
          <IonIcons name="cart-outline" size={26} color={'#000'} style={Styles.icon} />
        </View>
        <View style={Styles.subcontainer}>
          <FAIcons name="bars" size={26} color={'#000'} style={Styles.icon} />
        </View>
      </View>
    </>
  );
};

export default Footer;