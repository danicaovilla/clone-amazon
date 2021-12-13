import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Slide from './../Slide/Slide';

import Styles from './Style';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={Styles.container}>
          <Slide />
          <Text style={Styles.textoDestaque}>
            Vem Verão | Amazon Moda
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={Styles.containerDestaques}>
            <View style={Styles.boxDestaque}>
              <Image
                style={Styles.destaque}
                source={require('./../../assets/imagens/destaque-01.jpg')}
              />
              <Text style={Styles.textoCapas}>Todas as Novidades</Text>
            </View>
            <View style={Styles.boxDestaque}>
              <Image
                style={Styles.destaque}
                source={require('./../../assets/imagens/destaque-02.jpg')}
              />
              <Text style={Styles.textoCapas}>Feminino</Text>
            </View>
            <View style={Styles.boxDestaque}>
              <Image
                style={Styles.destaque}
                source={require('./../../assets/imagens/destaque-03.jpg')}
              />
              <Text style={Styles.textoCapas}>Masculino</Text>
            </View>
            <View style={Styles.boxDestaque}>
              <Image
                style={Styles.destaque}
                source={require('./../../assets/imagens/destaque-04.jpg')}
              />
              <Text style={Styles.textoCapas}>Meninas</Text>
            </View>
            <View style={Styles.boxDestaque}>
              <Image
                style={Styles.destaque}
                source={require('./../../assets/imagens/destaque-05.jpg')}
              />
              <Text style={Styles.textoCapas}>Meninos</Text>
            </View>
          </ScrollView>

          <View style={Styles.container}>
            <Text style={Styles.textoOferta}>Oferta do dia</Text>
            <Image
              style={Styles.imagemOferta}
              source={require('./../../assets/imagens/ofertas/oferta-01.jpg')}
            />
            <Text style={Styles.textoValor}>
              R$ 
              <Text style={Styles.textoValorSpan}> 79</Text>
              90
              </Text>
            <Text style={Styles.textoKit}>
              Kit com 3 Camisas Polo Basic Sortida, Masculino, Polo Martch
            </Text>
            <Text style={Styles.textoTodas}>Ver todas as ofertas</Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
};

export default Home;