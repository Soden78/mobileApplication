import React, { useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

const MyCarousel = () => {
  const carouselData = [
    { id: 1, image: require('../assets/kafka-spider.gif') },
    { id: 2, image: require('../assets/bronya-honkai.gif') },
    { id: 3, image: require('../assets/march.gif') },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      swiperRef.current.scrollBy(1);
    }, 8000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        showsPagination={false}
        autoplay={false} // Désactiver l'autoplay pour éviter les conflits avec le défilement automatique personnalisé
      >
        {carouselData.map((item) => (
          <View key={item.id} style={styles.carouselSlide}>
            <Image source={item.image} style={styles.carouselImage} />
          </View>
        ))}
      </Swiper>
      <Text>Vous pouvez scroller en glissant votre doigt</Text>
    </View>
  );
};

MyCarousel.propTypes = {
  // Define prop types using the prop-types package
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
});

export default MyCarousel;
