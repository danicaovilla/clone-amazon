import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Constantes para resolução
const sliderWidth = Dimensions.get('window').width;

const Slide = () => {
  const carouselItens = [
    {
      image: require('./../../assets/imagens/slides/slide-01.jpg'),
    },
    {
      image: require('./../../assets/imagens/slides/slide-02.jpg'),
    },
    {
      image: require('./../../assets/imagens/slides/slide-03.jpg'),
    },
    {
      image: require('./../../assets/imagens/slides/slide-04.jpg'),
    },
  ];

  function renderItem({item}) {
    return (
      <View style={styles.carouselItemContainer}>
        <Image style={styles.carouselItemImage} source={item.image} />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Carousel
          data={carouselItens}
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  carouselItemImage: {
    width: 'auto',
    height: 280,
  },
});

export default Slide;
