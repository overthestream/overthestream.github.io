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
          <Logo alt="" />
        </Link>
        <HeaderItemBar>
          <HeaderLink to="/"></HeaderLink>
        </HeaderItemBar>
      </HeaderLayoutWrapper>
    </HeaderBackgroundWrapper>
  );
};

export default Header;
