import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

import { GlobalDispatchContext } from '@context';

const LangSwitch = () => {
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <StyledLangSwitch>
      <button
        onClick={() => {
          dispatch({ type: 'SWITCH_LANG', payload: 'en' });
          navigate('/about/');
        }}
      >
        En
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'SWITCH_LANG', payload: 'tr' });
          navigate('/tr/about/');
        }}
      >
        Tr
      </button>
    </StyledLangSwitch>
  );
};

const StyledLangSwitch = styled(Flex)``;

export default LangSwitch;
