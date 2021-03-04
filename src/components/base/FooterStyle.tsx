import styled from 'styled-components';

export const FooterLayoutWrapper = styled.footer`
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 300px;

  padding: 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const FooterDescription = styled.div`
  font-weight: bold;
`;

export const Octocat = styled.a`
  margin-top: 20px;
  fill: #ced4da;

  height: 30px;
  width: 30px;

  svg {
    :hover {
      fill: #f8f9fa;
    }
  }
`;
