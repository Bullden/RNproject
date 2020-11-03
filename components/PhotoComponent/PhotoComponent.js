import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {shareModal} from '../../redux/actions/modal';
import ModalComponent from '../ModalComponent/ModalComponent';

const PhotoComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectData, setSelectData] = useState({});

  const listOfPhotos = useSelector((state) => state.api.dataApiList);
  const newStateForModal = useSelector((state) => state.modal.isModal);

  const dispatch = useDispatch();

  useEffect(() => {
    setModalVisible(newStateForModal);
    dispatch(shareModal(''));
  }, [newStateForModal]);

  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
    setSelectData(item);
  };

  return (
    <View style={styles.container}>
      {isModalVisible ? (
        <ModalComponent data={selectData} visible={isModalVisible} />
      ) : null}

      <ScrollView>
        {listOfPhotos.map((i) => (
          <View key={i.id}>
            <TouchableOpacity onPress={() => toggleModal(i)}>
              <Image source={{uri: i.download_url}} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.lineWrap}>
              <View style={styles.line}></View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default PhotoComponent;

var styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  image: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 20,
    borderTopColor: 'black',
    borderTopWidth: 1,
    margin: 20,
    width: '20%',
  },
  lineWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
