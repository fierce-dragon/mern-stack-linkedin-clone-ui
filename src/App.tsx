import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { TStore } from './store';
import { AppProvider } from './contexts';
import Routes from './routes';

interface IProps {
  store: TStore;
  persistor: any;
  basename: string;
}

const App: React.FC<IProps> = ({ store, persistor, basename }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppProvider>
          <Router basename={basename}>
            <Routes />
          </Router>
        </AppProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
