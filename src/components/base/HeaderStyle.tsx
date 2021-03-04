import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderBackgroundWrapperProps {
  isActive?: boolean;
}

export const HeaderBackgroundWrapper = styled.header<HeaderBackgroundWrapperProps>`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 20;
  background-color: ${(props) =>
    props.isActive ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.2)'};
  transition: background-color 0.6s ease-in-out;
`;

export const HeaderLayoutWrapper = styled.div`
  max-width: 1290px;
  width: 100%;
  height: 100px;
  margin: 0 auto;

  padding: 0 48px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
`;

export const HeaderItemBar = styled.div`
  display: flex;
  margin-left: 28px;
`;

export const HeaderLink = styled(Link)`
  padding: 7px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  :active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  & + & {
    margin-left: 28px;
  }
`;
