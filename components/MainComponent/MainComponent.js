import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataApi} from '../../redux/actions/getDataApi';
import PhotoContainer from '../PhotoComponent/PhotoContainer';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const MainComponent = () => {
  return (
    <View style={styles.main}>
      <PhotoContainer />
    </View>
  );
};

export default MainComponent;

var styles = StyleSheet.create({
  // main: {
  //   backgroundColor: 'black',
  // },
});
