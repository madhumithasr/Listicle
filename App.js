/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './Routes';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState();

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
        <Routes />
      </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
