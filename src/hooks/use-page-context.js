import { useContext, useEffect } from 'react';

import { GlobalDispatchContext } from '@context';

const usePageContext = langKey => {
  const dispatch = useContext(GlobalDispatchContext);
  useEffect(() => {
    dispatch({ type: 'SWITCH_LANG', payload: langKey });
  }, []);
};

export default usePageContext;
