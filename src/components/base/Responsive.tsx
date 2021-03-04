import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface ResponsiveProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rest?: any;
}

const Responsive: React.FC<ResponsiveProps> = (props) => {
  const { children, rest } = props;

  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
