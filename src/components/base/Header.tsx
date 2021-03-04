import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScroll from 'hooks/useScroll';
import {
  HeaderBackgroundWrapper,
  HeaderLayoutWrapper,
  Logo,
  HeaderItemBar,
  HeaderLink,
} from './HeaderStyle';

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset && !active) setActive(true);
    else setActive(false);
  };

  useScroll(handleScroll);

  return (
    <HeaderBackgroundWrapper isActive={active}>
      <HeaderLayoutWrapper>
        <Link to="/">
          <Logo alt="술안주 저장소" />
        </Link>
        <HeaderItemBar>
          <HeaderLink to="/">소개</HeaderLink>
          <HeaderLink to="/explore">탐색</HeaderLink>
        </HeaderItemBar>
      </HeaderLayoutWrapper>
    </HeaderBackgroundWrapper>
  );
};

export default Header;
