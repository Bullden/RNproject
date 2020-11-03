import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataApi} from '../../redux/actions/getDataApi';
import PhotoComponent from './PhotoComponent';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';

const NavPanel = () => {
  return (
    <View style={styles.wrapNavPanel}>
      <View style={styles.navPanel}></View>
    </View>
  );
};
export default NavPanel;

var styles = StyleSheet.create({
  wrapNavPanel: {
    width: Dimensions.get('window').width,
    height: 100,
  },
  navPanel: {
    display: 'flex',
    justifyContent: 'center',
  },
});
