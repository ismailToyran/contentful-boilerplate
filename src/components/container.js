import styled from 'styled-components';
import { Flex } from 'reflexbox/styled-components';

export default styled(Flex)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1320px) {
    margin: 0 5vmin;
  }
`;
