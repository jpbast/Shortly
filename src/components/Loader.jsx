import React, {useContext} from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import {LoadingContext} from '../contexts/LoadingContext';

export default function Loaderr() {
  const loadingCtx = useContext(LoadingContext);
  const loading = loadingCtx[0];

  return (
    <Loader
      visible={loading}
      type="Oval"
      color="rgb(59, 48, 84, 1)"
      height={70}
      width={70}
    />
  );
}
