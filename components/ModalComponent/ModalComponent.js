import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {shareModal} from '../../redux/actions/modal';

export default function ModalComponent(props) {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(shareModal(false));
  };
  return (
    <BlurView
      style={styles.mainModalContainer}
      blurType="regular"
      blurAmount={10}>
      <View style={styles.insideModal}>
        <View style={styles.wrapTextButton}>
          <View style={styles.textButton}>
            <Text style={styles.modalText}>Author: {props.data.author}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(props.data.download_url)}>
              <Text style={[styles.modalText, styles.hrefText]}>
                Click here for visit website
              </Text>
            </TouchableOpacity>
          </View>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </View>
    </BlurView>
  );
}

var styles = StyleSheet.create({
  modalText: {
    fontSize: 20,
    paddingBottom: 10,
  },
  wrapTextButton: {
    backgroundColor: 'white',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textButton: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1,
  },
  mainModalContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  hrefText: {
    color: 'rgba(10,132,255,1)',
    fontSize: 14,
  },
  insideModal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
