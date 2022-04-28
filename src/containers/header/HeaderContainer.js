import React from 'react';

// components
import AppBar from '../../components/header';
import useGetHeaderData from './useGetHeaderData';

const AppBarContainer = () => {

  const {
    weatherData,
    language,
    onSelectLanguage,
  } = useGetHeaderData();

  return <AppBar {...{
    weatherData,
    language,
    onSelectLanguage
  }} />
}

export default AppBarContainer;