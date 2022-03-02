import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';

const width = Dimensions.get('screen').width;

const HomeScreen = () => {
  const {nowPlaying, isLoading, popularMovies, topRated, upcoming} =
    useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Main Carousel */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* In theaters movies */}
        <HorizontalSlider title="Popular Movies" movies={popularMovies} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
