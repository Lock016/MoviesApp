import React from 'react';
import {View, Text, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';

import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        {/* Details */}
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="gray" size={16} />
          <Text style={{color: 'black'}}> {movieFull.vote_average}</Text>
          <Text style={{color: 'black'}}>
            {' '}
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Sinopsis */}
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Sinopsis
        </Text>
        <Text style={{color: 'black'}}>{movieFull.overview}</Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Budget
        </Text>
        <Text style={{color: 'black'}}>
          {' '}
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      {/* Cast */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
            marginHorizontal: 20,
          }}>
          Cast
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 60}}
        />
      </View>
    </>
  );
};

export default MovieDetails;
