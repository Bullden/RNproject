import React from 'react';
import {useDispatch} from 'react-redux';
import {getDataApi} from '../../redux/actions/getDataApi';
import PhotoComponent from './PhotoComponent';

const PhotoContainer = () => {
  const dispatch = useDispatch();
  dispatch(getDataApi());

  return (
    <>
      <PhotoComponent />
    </>
  );
};
export default PhotoContainer;
