import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from "./js/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
      </Provider>
    );
  }
}
