import React, {useContext} from 'react';

export const AppContext = React.createContext({
  state: {
    list: null,
  },
  setState: () => null,
});

export const useAppContext = () => useContext(AppContext);
