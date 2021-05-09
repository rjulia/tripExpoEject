import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { Provider as PaperProvider } from 'react-native-paper'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'

import rootReducers from './redux/reducers'
import Authentication from './navigation/Authentication'
import theme from './theme'

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  whitelist: ['user']
}

const persitedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(
  persitedReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
)

const persistor = persistStore(
  store
)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Authentication />
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
