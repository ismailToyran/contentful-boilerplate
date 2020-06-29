import React, { useEffect, useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  isDark: false,
  lang: 'en'
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      localStorage.setItem('isDark', JSON.stringify(action.payload));
      return {
        ...state,
        isDark: action.payload
      };
    }
    case 'SWITCH_LANG': {
      return {
        ...state,
        lang: action.payload
      };
    }
    default:
      throw new Error('Bad Action Type');
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getIsDark = JSON.parse(localStorage.getItem('isDark'));
    dispatch({ type: 'TOGGLE_THEME', payload: getIsDark });
  }, []);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
