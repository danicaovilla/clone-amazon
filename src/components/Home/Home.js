import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

import Styles from './Style';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={Styles.container}>
          <View style={Styles.boxSlide}>
            <Image
              style={Styles.slide}
              source={require('./../../assets/imagens/slides/slide-01.jpg')}
            />
          </View>
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
          {/* <Text style={Styles.destaque}>Gás para treinar</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.containerCapas}>
                        <View style={Styles.boxDestaque}>
                            <Image
                                style={Styles.destaque}
                                source={require('./../../../assets/images/capa06.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Na pressão</Text>
                            <Text style={Styles.textoCapas}>Single • Xand Avião</Text>
                        </View>
                        <View style={Styles.boxDestaque}>
                            <Image
                                style={Styles.destaque}
                                source={require('./../../../assets/images/capa09.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Correndo com classic rock</Text>
                            <Text style={Styles.textoCapas}>Playlist • Youtube Music</Text>
                        </View>
                        <View style={Styles.boxDestaque}>
                            <Image
                                style={Styles.destaque}
                                source={require('./../../../assets/images/capa02.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Se ferrou</Text>
                            <Text style={Styles.textoCapas}>Single • Dennis DJ e MC Kevinho</Text>
                        </View>
                    </ScrollView>
                    <Text style={Styles.destaque}>Hits de hoje</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.containerCapas}>
                        <View style={Styles.boxDestaque}>
                            <Image
                                style={Styles.destaque}
                                source={require('./../../../assets/images/capa04.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Seu mix</Text>
                            <Text style={Styles.textoCapas}>Música personalizada</Text>
                        </View>
                        <View style={Styles.boxDestaque}>
                            <Image
                                style={Styles.destaque}
                                source={require('./../../../assets/images/capa05.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Song Machine Episode 7</Text>
                            <Text style={Styles.textoCapas}>EP • Gorillaz</Text>
                        </View>
                        <View style={Styles.boxDestaque}>
                            <Image
                                style={Styles.destaque}
                                source={require('./../../../assets/images/capa08.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Fica melhor com rock</Text>
                            <Text style={Styles.textoCapas}>Playlist • Youtube Music</Text>
                        </View>
                    </ScrollView> */}
        </View>
      </ScrollView>
      <Footer />
    </>
  );
};

export default Home;
