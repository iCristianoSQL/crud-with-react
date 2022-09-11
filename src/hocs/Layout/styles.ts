import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${colors.primary[1.2]};
  overflow-y: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;
